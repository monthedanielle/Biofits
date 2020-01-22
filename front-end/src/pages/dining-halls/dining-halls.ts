import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-dining-halls',
  templateUrl: 'dining-halls.html',
})
export class DiningHallsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiningHallsPage');
  }
  
  halls_list=[
    {name:"Restaurant one",type:'Breakfast',time_from:'7:30',time_to:'10:00'},
    {name:"Restaurant two",type:'Breakfast',time_from:'7:30',time_to:'10:00'},
    {name:"Restaurant three",type:'Breakfast',time_from:'7:30',time_to:'10:00'},
    {name:"Restaurant four",type:'Breakfast',time_from:'7:30',time_to:'10:00'},
    {name:"Restaurant one",type:'Breakfast',time_from:'7:30',time_to:'10:00'},
    {name:"Restaurant two",type:'Breakfast',time_from:'7:30',time_to:'10:00'},
    {name:"Restaurant three",type:'Breakfast',time_from:'7:30',time_to:'10:00'},
    {name:"Restaurant four",type:'Breakfast',time_from:'7:30',time_to:'10:00'},
    {name:"Restaurant one",type:'Breakfast',time_from:'7:30',time_to:'10:00'},
    {name:"Restaurant two",type:'Breakfast',time_from:'7:30',time_to:'10:00'},
    {name:"Restaurant three",type:'Breakfast',time_from:'7:30',time_to:'10:00'},
    {name:"Restaurant four",type:'Breakfast',time_from:'7:30',time_to:'10:00'},
    {name:"Restaurant one",type:'Breakfast',time_from:'7:30',time_to:'10:00'},
    {name:"Restaurant two",type:'Breakfast',time_from:'7:30',time_to:'10:00'},
    {name:"Restaurant three",type:'Breakfast',time_from:'7:30',time_to:'10:00'},
    {name:"Restaurant four",type:'Breakfast',time_from:'7:30',time_to:'10:00'},
  ]
}
