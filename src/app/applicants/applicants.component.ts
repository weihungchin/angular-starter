import { AngularFireDatabase } from "angularfire2/database";
import { Component, OnInit } from "@angular/core";
import { WebConstants } from "@app/constants/web-constants";

@Component({
  selector: "app-applicants",
  templateUrl: "./applicants.component.html",
  styleUrls: ["./applicants.component.scss"]
})
export class ApplicantsComponent implements OnInit {
  filterList = [
    { key: "r", value: "Recruiter" },
    { key: "c", value: "Channel" },
    { key: "u", value: "University" }
  ];

  selectedFilterList = [
  ]

  showFilterList = false;
  showFilter = false;
  selectedApplicant: any = {
    name: "",
    mobile: "",
    email: ""
  };
  applicantsData: any;
  isLoading = true;
  constructor(private ngFireDB: AngularFireDatabase) {}

  ngOnInit() {
    this.getApplicants(WebConstants.APPLICANTS_PATH);
  }

  private getApplicants(path) {
    this.isLoading = true;
    this.ngFireDB
      .list(path)
      .valueChanges()
      .subscribe(
        data => {
          this.applicantsData = [...data];
          this.isLoading = false;
          this.selectedApplicant = { ...this.applicantsData[0] };
          console.log("applicants data", this.selectedApplicant);
        },
        err => {
          console.log(err);
        }
      );
  }

  onClickSideCard(e) {
    this.selectedApplicant = Object.assign({}, e);
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  onAddFilter() {
    this.showFilterList = !this.showFilterList;
  }

  onMenuClosed(e) {
    console.log(e);
    this.showFilterList = !this.showFilterList;
  }

  onSelectFilter(e){
    this.selectedFilterList = [...this.selectedFilterList, e];
    console.log(this.selectedFilterList);
  }
}
