import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  notifications=[
    {note:'New Event soon ... wait for the news',img:''},
    {note:'Adam Jone: posted new course',img:'assets/img/user1.png'},
  ]
  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }
  removeItem(item){
  let index = this.notifications.indexOf(item);
  if(index > -1){
    this.notifications.splice(index, 1);
      }
  }
}
   