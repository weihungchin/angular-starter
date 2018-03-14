import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SummaryCardComponent implements OnInit {

  @Input('data')
  applicantsData:any;

  @Output('onClickSelected')
  selectedApplicant:EventEmitter<any> = new EventEmitter<any>();

  @Output('onToggleSideNav')
  onToggleSideNav:EventEmitter<void> = new EventEmitter<void>();

  isLoading:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.isLoading = (this.applicantsData && this.applicantsData.length >0)?false:true;
  }
  
  toggleSideNav() {
    this.onToggleSideNav.emit();
  }

  
  onClickSideCard(e) {
    this.selectedApplicant.emit(Object.assign({}, e));
  }
 

  getStatusClass(type, statusCode) {
    const cssClasses = this.switchCSSClass(type, statusCode);
    return cssClasses;
  }

  

  private switchCSSClass(type = "bullet", statusCode) {
    const cssClassPrefix = type === "bullet" ? "scard-stat--" : "stat-text--";

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
      case "OH": {
        cssClasses = [`${cssClassPrefix}onhold`];
        break;
      }
    }

    return cssClasses;
  }

}
