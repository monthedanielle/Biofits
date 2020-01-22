import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiningLocationPage } from './dining-location';

@NgModule({
  declarations: [
    DiningLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(DiningLocationPage),
  ],
})
export class DiningLocationPageModule {}
