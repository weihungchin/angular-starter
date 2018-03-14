import { Component, OnInit, ViewChild } from "@angular/core";
import { MatCheckboxChange } from "@angular/material/checkbox";
import {
  MatSelectionList,
  MatSelectionListChange,
} from "@angular/material/list";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class FilterComponent implements OnInit {
  @ViewChild("list") selectionList: MatSelectionList;

  itemList: any = [
    { key: "1", label: "item 1" },
    { key: "2", label: "item 2" },
    { key: "3", label: "item 3" }
  ];

  filterList: any = [
    {
      groupKey: "r",
      groupLabel: "Recruiter",
      groupList: [
        { key: "1", label: "item 1" },
        { key: "2", label: "item 2" },
        { key: "3", label: "item 3" }
      ]
    },
    {
      groupKey: "c",
      groupLabel: "Channel",
      groupList: [
        { key: "c1", label: "Channel 1" },
        { key: "c2", label: "Channel 2" },
        { key: "c3", label: "Channel 3" }
      ]
    },
    {
      groupKey: "y",
      groupLabel: "Years of Experience",
      groupList: [
        { key: "y1", label: "0 -1 years" },
        { key: "y2", label: "2 - 4 years" },
        { key: "y3", label: "5 - 7 years" },
        { key: "y4", label: "> 7 years" },
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}

  onSelectChange(e: MatSelectionListChange) {
    console.log(e.option.value, e.option.selected);
    // console.log(this.selectionList.selectedOptions.selected);
    // const arr: MatListOption[] = this.selectionList.selectedOptions.selected;
    // if (arr && arr.length > 0) {
    //   console.log(arr[0].value);
    // }
  }

  onGroupCheck(e: MatCheckboxChange, list:MatSelectionList) {
    if (e.checked) {
      list.selectAll();
    } else if (!e.checked) {
      list.deselectAll();
    }
  }
}
