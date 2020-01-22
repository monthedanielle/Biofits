import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-athletics',
  templateUrl: 'athletics.html',
})
export class AthleticsPage {
  type='men';
  sports=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.select_sports(this.type)
  }
men_sports=[
    "Basket Ball",
    "Baseball",
    "Heavyweight Crew",
    "Lightweight Crew",
    "Cross Country",
    "Fancing",
    "Football",
    "Golf",   
    "Ice Hockey",
    "Lacrosse",
    "Skiing",
    "Soccer",
    "Tennis"
  ];
  women_sports=[
    "Basket Ball Women",
    "Football Women",
    "Ice Hockey Women",
    "Tennis Women"
  ];
  ionViewDidLoad() {
    console.log('ionViewDidLoad AthleticsPage');
  }

  // select sports type
  select_sports(type){
    this.sports=[];
    this.type=type;
    if(type == 'men'){
      for(let i = 0; i<this.men_sports.length; i++){
        this.sports.push(this.men_sports[i]);
      }
    }
    else{
      for(let i = 0; i<this.women_sports.length; i++){
        this.sports.push(this.women_sports[i]);
      }
    }
  }

}
