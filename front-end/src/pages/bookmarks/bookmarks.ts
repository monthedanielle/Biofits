import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html',
})
export class BookmarksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookmarksPage');
  }

  item_stable=[
    {
      img:'assets/img/home/001.png',
      title:'people',
      item_accordinat:[
        {name:'Adam G Smith',Component:'PeopleDetailsPage'},
        {name:'Veronica Sharon',Component:'PeopleDetailsPage'},
      ]
    },
    {
      img:'assets/img/home/002.png',
      title:'Maps',
      item_accordinat:[
        {name:'Address 1',Component:'MapPage'},
        {name:'Address 2',Component:'MapPage'},
      ]
    },
    {
      img:'assets/img/home/003.png',
      title:'Courses',
      item_accordinat:[
        {name:'Web Design',Component:'LessonDetailsPage'},
        {name:'Web Developer',Component:'LessonDetailsPage'},
      ]
    },
    {
      img:'assets/img/home/004.png',
      title:'Dining',
      item_accordinat:[
        {name:'Restaurant Name 1',Component:'DiningLocationPage'},
        {name:'Restaurant Name 2',Component:'DiningLocationPage'},
      ]
    },
    {
      img:'assets/img/home/005.png',
      title:'Athletics',
      item_accordinat:[
        {name:'Athletic 1',Component:'SchedulePage'},
        {name:'Athletic 2',Component:'SchedulePage'},
      ]
    },
    {
      img:'assets/img/home/006.png',
      title:'News',
      item_accordinat:[
        {name:'Title 1',Component:'NewsDetailsPage'},
        {name:'Title 2',Component:'NewsDetailsPage'},
        {name:'Title 3',Component:'NewsDetailsPage'},
        {name:'Title 4',Component:'NewsDetailsPage'},
      ]
    },
    {
      img:'assets/img/home/007.png',
      title:'Events',
      item_accordinat:[
        {name:'Event 1',Component:'EventDetailsPage'},
        {name:'Event 2',Component:'EventDetailsPage'},
      ]
    },
  ]


  shownGroup = null;
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
        } else {
        this.shownGroup = group;
        }
    };
  isGroupShown(group) {
    return this.shownGroup === group;
    };
}
 