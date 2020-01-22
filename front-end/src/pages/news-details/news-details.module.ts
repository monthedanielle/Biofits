import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsDetailsPage } from './news-details';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  declarations: [
    NewsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsDetailsPage),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    }),
    Geolocation
  ],
})
export class NewsDetailsPageModule {}
