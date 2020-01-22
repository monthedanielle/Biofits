import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SportArtProvider } from '../../providers/sport-art/sport-art';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  sportArten: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public sportArtProvider: SportArtProvider,
    public authProvider: AuthProvider) {

      this.sportArtProvider.list().subscribe(sportArten => {
        this.sportArten = sportArten;
      });
  }

  ionViewCanEnter() {
    return this.authProvider.authenticated();
  }

  ionViewDidLoad() {
  }
  
}
     