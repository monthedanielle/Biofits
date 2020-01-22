import { Injectable } from '@angular/core';

/*
  Generated class for the EnvProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnvProvider {

  public SYSTEM_CLIENT = 'biofits';
  public SYSTEM_PASSWORD = 'biofits';

  public HOST = 'http://81.169.225.224:8080';

  public LOGIN_URL = this.HOST + '/oauth/token';
  public LOGOUT_URL = this.HOST + '/tokens/revoke';
  public BENUTZER_PATH = this.HOST + '/benutzer';
  public BENUTZER_ITEM = this.BENUTZER_PATH + '/{0}';
  public BENUTZER_BY_EMAIL = this.HOST + '/benutzer/by-email/{0}/';
  public CURRENT_USER = this.HOST + '/current-benutzer';
  public SPORT_ART_PATH = this.HOST + '/sport-arten';

  public LANGUAGES = [
    {
      id: 'en',
      name: 'English'
    },
    {
      id: 'fr',
      name: 'Français'
    },
    {
      id: 'de',
      name: 'Deutsch'
    }
  ];

  constructor() {
    
  }

}
