import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-lesson-details',
  templateUrl: 'lesson-details.html',
})
export class LessonDetailsPage {
  rate='0';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  contains=["Photoshop","in Desgin","HTML","CSS","Dreamwaver"];

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessonDetailsPage');
  }

  // bookmark function
  bookmark_Click=false;
  bookmark(){
    this.bookmark_Click=(this.bookmark_Click == false)?true:false;
    console.log(this.bookmark_Click);
  }

  // click heart btn
  clicked_heart=false;
  heart_color="color4";
  click_like(){   
    if(this.clicked_heart==false){
      this.clicked_heart =true;
      this.heart_color="danger";
    }
    else{
      this.clicked_heart =false;
      this.heart_color="color4";
    }
  }

}
