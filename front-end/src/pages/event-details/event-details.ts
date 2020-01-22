import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {

  click_mark=false;
  show_comment=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailsPage');
  }
  add_comment(){
    this.show_comment=(this.show_comment==true)?false:true;
  }
  // click mark book function
  marked(){    
    this.click_mark=(this.click_mark==true)?false:true;
  }
  // click attend
  click_attend=false;
  color='color1';
  btn_text='attend';
  attend(){
    if(this.click_attend==true){
      this.color='color1';
      this.click_attend=false;
      this.btn_text='Cancelled Attend';
    }
    else{
      this.color='color2';
      this.click_attend=true;
      this.btn_text='Will Attend';
    }
  }

    // click heart btn
  clicked_heart=false;
  num_clicked=50;
  heart_color="light";
  click_like(){
    if(this.clicked_heart==false){
      this.clicked_heart =true;
      this.num_clicked=this.num_clicked+1;
      this.heart_color="danger";
    }
    else{
      this.clicked_heart =false;
      this.num_clicked=this.num_clicked-1;
      this.heart_color="light";
    }
  }  
}
    