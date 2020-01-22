import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertProvider {

  public static SHORT_ALERT_TIME = 2000;
  public static MIDDLE_ALERT_TIME = 4000;
  public static LONG_ALERT_TIME = 8000;

  constructor(
    private toastCtrl: ToastController
  ) {
    
  }

  public shortAlert(message: string, closable: boolean) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: AlertProvider.SHORT_ALERT_TIME,
      showCloseButton: closable,
      closeButtonText: 'Ok'
    });

    toast.present();
  }

  public middleAlert(message: string, closable: boolean) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: AlertProvider.MIDDLE_ALERT_TIME,
      showCloseButton: closable,
      closeButtonText: 'Ok'
    });

    toast.present();
  }

  public longAlert(message: string, closable: boolean) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: AlertProvider.LONG_ALERT_TIME,
      showCloseButton: closable,
      closeButtonText: 'Ok'
    });

    toast.present();
  }

}
