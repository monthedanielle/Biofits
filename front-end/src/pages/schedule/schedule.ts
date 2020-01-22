import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  items=[
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]
  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

  // calender Function
  months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  month_name='Nov';
  year=2017;

  month_index=this.months.indexOf(this.month_name);
  calendar_function(type){
    if(type=='increase'){
      if(this.month_index==this.months.length-1){
        this.month_index=0;
        this.year=this.year+1;
      }
      else{
        this.month_index=this.month_index+1;
      }
    }
    else if(type=='decrease'){
      if(this.month_index==0){
        this.month_index=this.months.length-1;
        this.year=this.year-1;
      }
      else{
        this.month_index=this.month_index-1;
      }
    }
    this.month_name=this.months[this.month_index];
    console.log(this.month_name);
    console.log(this.year);
  }
}
   