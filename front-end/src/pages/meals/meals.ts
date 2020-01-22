import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-meals',
  templateUrl: 'meals.html',
})
export class MealsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  meals=[
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
    console.log('ionViewDidLoad MealsPage');
  }


// Calendar Functions
  meal_name=["Breakfast","Lanch","Dinner"];
  n=0;
  // name=this.meal_name[this.n];
  click_Left(){
    if(this.n==0){
      this.n=2;
    }
    else{   
      this.n=this.n-1;
    }
    console.log(this.n);
  }
  click_Right(){
    if(this.n==2){
      this.n=0;
    }
    else{
      this.n=this.n+1;
    }
    console.log(this.n);
  }
// bookmark function
  bookmark_Click=false;
  bookmark(){
    this.bookmark_Click=(this.bookmark_Click == false)?true:false;
    console.log(this.bookmark_Click);
  }

}
