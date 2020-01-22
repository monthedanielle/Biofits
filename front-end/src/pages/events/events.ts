import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  click_mark=false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider) {
  }
   events=[
     {img:'assets/img/events/001.png',title:'Event Title',date:'10 oct,2017'},
     {img:'assets/img/events/001.png',title:'Event Title',date:'10 oct,2017'},
     {img:'assets/img/events/001.png',title:'Event Title',date:'10 oct,2017'},
     {img:'assets/img/events/001.png',title:'Event Title',date:'10 oct,2017'},
   ]
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  ionViewCanEnter() {
    return this.authProvider.authenticated();
  }
 // click mark book function
  marked(item, $event){
    $event.stopPropagation();
    item.click_mark=(item.click_mark==true)?false:true;
  }




  // =========================
  // calender Function
  months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  day_num=1;
  day_name='Wednesday';
  month_name='Nov';
  year=2017;

  max_days;
  day_index=this.days.indexOf(this.day_name);
  month_index=this.months.indexOf(this.month_name);


  calendar_function(type){
    this. detect_month_days();
    // when increase days
    if(type=='increase'){
      if(this.day_num==this.max_days){
        this.month_index=this.month_index+1;

        this. detect_month_days();
        this.day_num=0;
        if(this.month_index>=this.months.length){
            this.month_index=0;
            this.year=this.year+1;
        }
      }
      if(this.day_index==this.days.length - 1){
        this.day_index=-1;
      }
      this.day_index=this.day_index+1;
      this.day_num=this.day_num+1;
    }
    // when decrease days
    else if(type=='decrease'){
      if(this.day_num==1){
        this.month_index=this.month_index-1;
        this. detect_month_days();
        this.day_num=this.max_days;
        if(this.month_index<=0){
            this.month_index=this.months.length - 1;
            this.year=this.year-1;
        }
      }
      else{
        this.day_num=this.day_num-1;
      }
      if(this.day_index==0){
        this.day_index=this.days.length;
      }
      this.day_index=this.day_index-1;
    }

    this.day_name=this.days[this.day_index];
    this.month_name=this.months[this.month_index];
    console.log(this.day_name);
    console.log(this.day_num);
    console.log(this.month_name);
    console.log(this.year);
  }

//  how meny days in month
  detect_month_days(){
    if(this.month_index==3||this.month_index==5||this.month_index==8||this.month_index==10){
      this.max_days=30;
    }
    else if(
      this.month_index==0||
      this.month_index==2||
      this.month_index==4||
      this.month_index==6||
      this.month_index==7||
      this.month_index==9||
      this.month_index==11){
         this.max_days=31;
    }
    else if(this.month_index==1){
      if(this.year%4==0){
        this.max_days=29;
      }
      else{
        this.max_days=28;
      }
    }
  }

// ==============================
}
   