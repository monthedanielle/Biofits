import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  public action = false;
  constructor(public _myApp:MyApp,public navCtrl: NavController, public navParams: NavParams) {
    this.action = this._myApp.animateVarible;
  } 
  ionViewDidLoad() {
    console.log('ionViewDidLoad BookmarksPage');
  }

  item_stable=[
    {
      title:'App Language',
      item_accordinat:["English","Franch"]
    },
   
  ]

  social=[
    {icon_name:'logo-facebook',name:'facebook',color:"faceColor"},
    {icon_name:'logo-googleplus',name:'goohle_pluse',color:"googleColor"},
    {icon_name:'logo-twitter',name:'twitter',color:"twitterColor"},
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

  // select Language Function
  select_lang(x,y){
    x.title=y;
  }
  // animate Function variable animateVarible in app.component
  public checkbox;
  animateApp(e:any){ 
    this._myApp.animateVarible = e.checked;
    this.action = this._myApp.animateVarible;
  }


}
