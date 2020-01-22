import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CheckOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-out',
  templateUrl: 'check-out.html',
})
export class CheckOutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cards=[
    {img:'assets/img/visa.png',name:'visa'},
    {img:'assets/img/paypal.png',name:'paypal'},
    {img:'assets/img/master.png',name:'master'},
    
  ]
  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckOutPage');
  }
  // click Complete Reservation
  color='color1';
  btn_text='Complete Reservation';
  complete_reserve(){
      this.color='color2';
      this.btn_text='Completed Reservation';
  }
}
