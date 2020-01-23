import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SportArtProvider } from '../../providers/sport-art/sport-art';
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs';



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
  execution: any = {};
  batchSize = 50;
  actualPosition = {
    latitude: 0.0,
    longitude: 0.0
  };
  positions = [];
  distanz = 0;
  ziel = -1;
  percentage = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public sportArtProvider: SportArtProvider,
    private geolocation: Geolocation) {

    this.geolocation.getCurrentPosition().then((resp) => {
      this.actualPosition = {
        latitude: resp.coords.latitude,
        longitude: resp.coords.longitude
      }
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    this.sportArtId = this.navParams.get('id');
    this.sportArtProvider.get(this.sportArtId).subscribe(sportArt => {
      this.sportArt = sportArt;
    });

    this.userId = localStorage.getItem('userId');
    this.sportArtProvider.current(this.userId, this.sportArtId).subscribe(currentActivity => {
      this.currentActivity = currentActivity;
      this.distanz = Math.round(currentActivity.distanz);
      this.ziel = Math.round(currentActivity.ziel);
      this.percentage = Math.round(100 * this.distanz / this.ziel);
    });

  }

  ionViewDidLoad() {

  }

  start() {
    this.started = !this.started;

    this.execution = Observable.interval(1000).subscribe((val) => {

      this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((resp) => {
        this.positions.push({
          lastLatitude: this.actualPosition.latitude,
          lastLongitude: this.actualPosition.longitude,
          latitude: resp.coords.latitude,
          longitude: resp.coords.longitude,
          datum: resp.timestamp
        });
        this.actualPosition = {
          latitude: resp.coords.latitude,
          longitude: resp.coords.longitude
        };
      }).catch((error) => {
        console.log('Error getting location', error);
      });

      console.log(this.positions);

      if (this.positions.length >= this.batchSize) {

        this.sportArtProvider.createSnapshot(this.userId, this.sportArtId, this.positions).subscribe(response => {
          console.log(response);
        },
          error => {
            console.log(error);
          });
        this.positions = [];

        this.userId = localStorage.getItem('userId');
        this.sportArtProvider.current(this.userId, this.sportArtId).subscribe(currentActivity => {
          this.currentActivity = currentActivity;
          this.distanz = Math.round(currentActivity.distanz);
          this.ziel = Math.round(currentActivity.ziel);
          this.percentage = Math.round(100 * this.distanz / this.ziel);
        });
      }
    });

  }

  stop() {
    this.started = !this.started;
    this.execution.unsubscribe();

    if (this.positions.length > 0) {
      this.sportArtProvider.createSnapshot(this.userId, this.sportArtId, this.positions).subscribe(response => {
        console.log(response);
      },
        error => {
          console.log(error);
        });
      this.positions = [];
    }
    this.sportArtProvider.stop(this.userId, this.sportArtId).subscribe(response => {
      console.log(response);
    },
      error => {
        console.log(error);
      });

    this.userId = localStorage.getItem('userId');
    this.sportArtProvider.current(this.userId, this.sportArtId).subscribe(currentActivity => {
      this.distanz = Math.round(currentActivity.distanz);
      this.ziel = Math.round(currentActivity.ziel);
      this.percentage = Math.round(100 * this.distanz / this.ziel);
    });
  }
}
