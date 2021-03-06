
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
declare var google;


@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

 @ViewChild('map') mapElement: ElementRef;        
  map: any;
  start = 'chicago, il';
  end = 'chicago, il';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeoplePage');
    this.initMap();
  }    


  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });

    this.directionsDisplay.setMap(this.map);
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
   
  // bookmark function
  bookmark_Click=false;
  bookmark(){
    this.bookmark_Click=(this.bookmark_Click == false)?true:false;
    console.log(this.bookmark_Click);
  }   
}
