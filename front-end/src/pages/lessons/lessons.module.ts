import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LessonsPage } from './lessons';
import { Ionic2RatingModule } from 'ionic2-rating';
@NgModule({
  declarations: [
    LessonsPage,
  ],
  imports: [
    IonicPageModule.forChild(LessonsPage),Ionic2RatingModule
  ],
})
export class LessonsPageModule {}
