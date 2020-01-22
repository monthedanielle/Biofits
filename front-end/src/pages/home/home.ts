import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertProvider } from '../../providers/alert/alert';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public authProvider: AuthProvider,
    public alertProvider: AlertProvider,
    public navParams: NavParams) {
  }

  ionViewCanEnter() {
    return this.authProvider.authenticated();
  }
  
  items=[
    {img:'assets/img/home/003.png',title:'Dashboard',component:'CoursesPage'},
    {img:'assets/img/home/004.png',title:'Tipps',component:'EventsPage'},
    {img:'assets/img/home/008.png',title:'Aktivitäten',component:'NewsPage'},
    {img:'assets/img/home/010.png',title:'Profile',component:'ProfilePage'},
  ]

  // go to another Page
  openPage(page){
    this.navCtrl.setRoot(page);   
  }

  logout() {
    this.authProvider.logout();
  }

}
