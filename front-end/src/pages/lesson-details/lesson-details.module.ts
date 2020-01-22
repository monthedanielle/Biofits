import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LessonDetailsPage } from './lesson-details';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    LessonDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(LessonDetailsPage),Ionic2RatingModule
  ],
})
export class LessonDetailsPageModule {}
