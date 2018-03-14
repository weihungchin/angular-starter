import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DetailCardComponent implements OnInit {

  isEditable = false;
  @Input('data')
  selectedApplicant:any;

  statusList: any = [
    { key: "s", value: "Scheduled" },
    { key: "o", value: "On-Hold" },
    { key: "sl", value: "Shortlisted" }
  ];
  selectedStatus = this.statusList[0].key;

  mobileFormCtrl = new FormControl('', [
    Validators.required
  ])

 
  constructor() { }

  ngOnInit() {
    this.mobileFormCtrl.valueChanges.debounceTime(1000).subscribe(
      data => {
        console.log(data);
      }
    )
  }

  ngOnChanges(){
   
  }

  toggleEdit(){
    this.isEditable = !this.isEditable;
  }

  onBlur(e){
    console.log(e);
  }
}
