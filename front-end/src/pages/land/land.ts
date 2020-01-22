import { Component } from '@angular/core';
import { IonicPage, NavController, App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-land',
  templateUrl: 'land.html',
})
export class LandPage {

  constructor(
    public navCtrl: NavController,
    public authProvider: AuthProvider,
    public app: App) {

    if (this.authProvider.authenticated()) {
      this.navCtrl.setRoot('HomePage');
    }
  }

  openPage(page) {
    this.navCtrl.setRoot(page);
  }

}
