import { Injectable } from '@angular/core';
import { EnvProvider } from '../env/env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Strings } from '../../utils/strings';

/*
  Generated class for the SportArtProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SportArtProvider {

  constructor(
    public http: HttpClient,
    public envProvider: EnvProvider) {
    
  }


  public list() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('access_token')
    });

    return this.http.get<any>(this.envProvider.SPORT_ART_PATH, { headers });
  }
}
