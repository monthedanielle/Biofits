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

  public get(id: any) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('access_token')
    });

    return this.http.get<any>(Strings.format(this.envProvider.SPORT_ART_ITEM, id), { headers });
  }

  public current(benutzerId: any, sportArtId: any) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('access_token')
    });

    return this.http.post<any>(Strings.format(this.envProvider.CURRENT_AKTIVITAET, benutzerId, sportArtId), {}, { headers });
  }

  public createSnapshot(benutzerId: any, sportArtId: any, snapshots: any[]) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('access_token')
    });

    return this.http.post<any>(Strings.format(this.envProvider.SNAPSHOT_AKTIVITAET, benutzerId, sportArtId), snapshots, { headers });
  }

  public stop(benutzerId: any, sportArtId: any) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('access_token')
    });

    return this.http.put<any>(Strings.format(this.envProvider.STOP_AKTIVITAET, benutzerId, sportArtId), {}, { headers });
  }
  
}
