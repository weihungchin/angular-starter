import { DataService } from '@app/services/data.service';
import { SideNavService } from "@app/services";
import { Component, OnInit } from "@angular/core";
import { WebConstants } from "@app/constants/web-constants";


export enum StatusCodeEnum {
  SC = "Scheduled",
  OH = "On-Hold",
  SL = "Shortlisted",
  KIV = "KIV",
  RJ = "Rejected",
  NI = "Not Interested",
  DC = "Declined"
}

export const StatusCodeMap = new Map();
StatusCodeMap.set("SC", StatusCodeEnum.SC);
StatusCodeMap.set("OH", StatusCodeEnum.OH);
StatusCodeMap.set("SL", StatusCodeEnum.SL);
StatusCodeMap.set("KIV", StatusCodeEnum.KIV);
StatusCodeMap.set("RJ", StatusCodeEnum.RJ);
StatusCodeMap.set("NI", StatusCodeEnum.NI);
StatusCodeMap.set("DC", StatusCodeEnum.DC);

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

  selectedFilterList = [];

  showFilterList = false;
  showFilter = false;
  selectedApplicant: any;
  applicantsData: any;


  constructor(
    private sideNavService: SideNavService,
    private dataService: DataService
  ) {
  }

  ngOnInit() {
    this.getApplicants(WebConstants.APPLICANTS_PATH);
  }


  onToggleSideNav() {
    this.sideNavService.toggle();
  }

  onClickApplicant(applicant) {
    this.applicantsData = [...this.applicantsData.map(this.setSelected(applicant))];
    this.selectedApplicant = { ...applicant };
  }


  private getApplicants(refName) {
    this.dataService.read(refName).subscribe(
      data => {
        this.applicantsData =
          data
            .map(this.bindSelectedAttr)
            .map(this.defaultSelected.bind(this));
        this.selectedApplicant = this.applicantsData.filter(this.filterSelected)[0];
        console.log(this.selectedApplicant);
      },
      err => {
        console.log(err);
      }
    )
  }

  private bindSelectedAttr(item) {
    item["selected"] = false;
    return item;
  }
  private defaultSelected(item, index) {
    if (!this.selectedApplicant) {
       if(index === 0){
          item.selected = true;
       }
      
    }else{
       if(this.selectedApplicant && this.selectedApplicant.id == item.id){
         item.selected = true;
       }
    }

    return item;
  }

  private setSelected(selectedItem) {
    return item => {
      item.selected = selectedItem.id === item.id;
      return item;
    };
  }

  private filterSelected(item) {
    return item.selected == true;
  }


}
