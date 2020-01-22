import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiningHallsPage } from './dining-halls';

@NgModule({
  declarations: [
    DiningHallsPage,
  ],
  imports: [
    IonicPageModule.forChild(DiningHallsPage),
  ],
})
export class DiningHallsPageModule {}
