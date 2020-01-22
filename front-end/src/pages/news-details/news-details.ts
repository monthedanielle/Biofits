import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-news-details',
  templateUrl: 'news-details.html',
})
export class NewsDetailsPage {
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
    console.log(this.click_mark);
  }
  
  // click heart btn
  clicked_heart=false;
  num_clicked=50;
  heart_color="color3";
  click_like(){
    if(this.clicked_heart==false){
      this.clicked_heart =true;
      this.num_clicked=this.num_clicked+1;
      this.heart_color="danger";
    }
    else{
      this.clicked_heart =false;
      this.num_clicked=this.num_clicked-1;
      this.heart_color="color3";
    }
  }    
}
