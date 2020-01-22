import { Component } from '@angular/core';
import { IonicPage, NavController  } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-people-details',
  templateUrl: 'people-details.html',
})
export class PeopleDetailsPage {

  constructor(public navCtrl: NavController ) {
  }
  items=["Assistant Professor of Science 2011","Professor of Physics 2009","Assistant Professor of Science 2011","Professor of Physics 2009"]
  ionViewDidLoad() {
    console.log('ionViewDidLoad PeopleDetailsPage');
  }

  //click to select information
  type='email';
  select(type){
    this.type=type;
  }
  // bookmark function
  bookmark_Click=false;
  bookmark(){
    this.bookmark_Click=(this.bookmark_Click == false)?true:false;
    console.log(this.bookmark_Click);
  }
  // bookmark function
  addContact_Click=false;
  addContact(){
    this.addContact_Click=(this.addContact_Click == false)?true:false;
    console.log(this.addContact_Click);
  }
}  
