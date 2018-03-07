import { SideNavService } from '@app/services';
import { AngularFireDatabase } from "angularfire2/database";
import { Component, OnInit } from "@angular/core";
import { WebConstants } from "@app/constants/web-constants";

export enum StatusCodeEnum {
  SC = 'Scheduled',
  OH = 'On-Hold',
  SL = 'Shortlisted',
  KIV = 'KIV',
  RJ = 'Rejected',
  NI = 'Not Interested',
  DC = 'Declined'
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
  statusList: any = [
    { key: 's', value: "Scheduled" },
    { key: 'o', value: 'On-Hold' },
    { key: 'sl', value: 'Shortlisted' }
  ]
  selectedStatus = this.statusList[0].key




  constructor(private ngFireDB: AngularFireDatabase, private sideNavService:SideNavService) {

  }

  ngOnInit() {
    this.getApplicants(WebConstants.APPLICANTS_PATH);
  }




  onClickSideCard(e) {
    this.applicantsData = [...this.applicantsData.map(this.setSelected(e))];
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

  onSelectFilter(e) {
    this.selectedFilterList = [...this.selectedFilterList, e];
    console.log(this.selectedFilterList);
  }


  getStatusClass(type, statusCode) {
    let cssClasses = this.switchCSSClass(type, statusCode);
    return cssClasses;
  }

  toggleSideNav(){
    this.sideNavService.toggle();
  }

  private getApplicants(path) {
    this.isLoading = true;
    this.ngFireDB
      .list(path)
      .valueChanges()
      .subscribe(
        data => {
          this.applicantsData = [...data];

          this.applicantsData.map(this.bindSelectedAttr).map(this.defaultSelected);
          this.isLoading = false;
          this.selectedApplicant = { ...this.applicantsData[0] };
          console.log(this.applicantsData);
          // console.log("applicants data", JSON.stringify(this.applicantsData));
        },
        err => {
          console.log(err);
        }
      );
  }

  private bindSelectedAttr(item) {
    item['selected'] = false;
    return item;
  }
  private defaultSelected(item, index) {
    if (index == 0) {
      item.selected = true;
    }
    return item;
  }
  private setSelected(selectedItem) {
    return (item) => {
      item.selected = selectedItem.id == item.id;
      return item;
    }
  }

  private switchCSSClass(type = 'bullet', statusCode) {
    let cssClassPrefix = type == 'bullet' ? 'scard-stat--' : 'stat-text--';

    let cssClasses;
    switch (statusCode) {
      case "SC": {
        cssClasses = [`${cssClassPrefix}scheduled`];
        break;
      }
      case "SL": {
        cssClasses = [`${cssClassPrefix}shortlisted`];
        break;
      }
      case 'OH': {
        cssClasses = [`${cssClassPrefix}onhold`];
        break;
      }
    }

    return cssClasses;
  }
}
