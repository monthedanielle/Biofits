import { Injectable } from '@angular/core';
import { EnvProvider } from '../env/env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Strings } from '../../utils/strings';

/*
  Generated class for the BenutzerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BenutzerProvider {

  constructor(
    public http: HttpClient,
    public envProvider: EnvProvider) {
    
  }

  public save(benutzer: any) {

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.post<any>(this.envProvider.BENUTZER_PATH, benutzer, options);
  }

  public update(id: any, benutzer: any) {

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access_token')
      })
    };

    return this.http.put<any>(Strings.format(this.envProvider.BENUTZER_ITEM, id), benutzer, options);
  }

  public getByEmail(email: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('access_token')
    });

    return this.http.get<any>(Strings.format(this.envProvider.BENUTZER_BY_EMAIL, email), { headers });
  }

  public get(id: any) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('access_token')
    });

    return this.http.get<any>(Strings.format(this.envProvider.BENUTZER_ITEM, id), { headers });
  }

}
