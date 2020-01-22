import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SportArtProvider } from '../../providers/sport-art/sport-art';
import { Geolocation } from '@ionic-native/geolocation/ngx';



@IonicPage()
@Component({
  selector: 'page-news-details',
  templateUrl: 'news-details.html',
})
export class NewsDetailsPage {
  click_mark = false;
  show_comment = false;
  sportArt = {};
  sportArtId;
  started = false;
  userId;
  currentActivity = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public sportArtProvider: SportArtProvider,
    private geolocation: Geolocation) {

    this.sportArtId = this.navParams.get('id');
    this.sportArtProvider.get(this.sportArtId).subscribe(sportArt => {
      this.sportArt = sportArt;
    });

    this.userId = localStorage.getItem('userId');
    this.sportArtProvider.current(this.userId, this.sportArtId).subscribe(currentActivity => {
      this.currentActivity = currentActivity;
    });
  }

  ionViewDidLoad() {

  }

  start() {
    this.started = !this.started;

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      console.log(data);
    });

    this.sportArtProvider.createSnapshot(this.userId, this.sportArtId, []).subscribe(response => {
      console.log(response);
    },
      error => {
        console.log(error);
      });
  }

  stop() {
    this.started = !this.started;
    this.sportArtProvider.stop(this.userId, this.sportArtId).subscribe(response => {
      console.log(response);
    },
      error => {
        console.log(error);
      });
  }
}
