import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-lessons',
  templateUrl: 'lessons.html',
})
export class LessonsPage {
  rate='0';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessonsPage');
  }

  lessons=[
    {name:'Web design',img:'assets/img/cources/001.png',rate:'4',cost:5000},
    {name:'Graphic design',img:'assets/img/cources/002.png',rate:'4',cost:5000},
    {name:'Web design',img:'assets/img/cources/001.png',rate:'4',cost:5000},
    {name:'Graphic design',img:'assets/img/cources/002.png',rate:'4',cost:5000},
    {name:'Web design',img:'assets/img/cources/001.png',rate:'4',cost:5000},
  ]

}
