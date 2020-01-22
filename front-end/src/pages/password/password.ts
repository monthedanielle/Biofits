import { Component } from '@angular/core';
import { IonicPage, ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {

   constructor(public viewCtrl: ViewController) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }     
}
      