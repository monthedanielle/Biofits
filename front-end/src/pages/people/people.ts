import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {
  search;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }
  
  names=["Adam G Smith","Veronica Sharon","Taylor Jony","Jony H Sam"];
  ionInput(){
    console.log('ionViewDidLoad MapPage');
  }
}
