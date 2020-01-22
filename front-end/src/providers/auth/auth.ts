import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvProvider } from '../env/env';
import { tap } from 'rxjs/operators';
import { App } from 'ionic-angular';
import { AlertProvider } from '../alert/alert';
import { BehaviorSubject } from 'rxjs';
import { BenutzerProvider } from '../benutzer/benutzer';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  static isLoggedIn = false;
  static token: any;
  static accessToken: string;
  static expiresIn: number;
  static loggedInAt: Date;
  actualUser: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    public http: HttpClient,
    public envProvider: EnvProvider,
    public alertProvider: AlertProvider,
    public app: App,
    public benutzerProvider: BenutzerProvider) {

  }



  login(username, password) {
    const body = new HttpParams().set('grant_type', 'password').set('username', username).set('password', password);

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(this.envProvider.SYSTEM_CLIENT + ':' + this.envProvider.SYSTEM_PASSWORD)
      })
    };

    return this.http.post<any>(this.envProvider.LOGIN_URL,
      body.toString(),
      options
    ).pipe(
      tap(token => {

        this.cleanup();

        const accessToken = (<string>token.access_token);
        const tokenType = (<string>token.token_type);
        AuthProvider.token = token;
        AuthProvider.accessToken = token['access_token'];
        AuthProvider.expiresIn = token['expires_in'];
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('token_type', tokenType);
        localStorage.setItem('isLoggedIn', 'true');
        AuthProvider.isLoggedIn = true;
        AuthProvider.loggedInAt = new Date();

        this.currentUser().subscribe(currentUser => {
          const email = currentUser.principal.username;
          this.benutzerProvider.getByEmail(email).subscribe(domainUser => {
            localStorage.setItem('userId', domainUser.id);
            localStorage.setItem('username', currentUser.principal.username);
          }, error => {

          });
          
        }, error => {
          console.log('Could not get current user.', error);
        });
        return token;
      }),
    );
  }

  logout() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('access_token')
    });

    return this.http.delete(this.envProvider.LOGOUT_URL, { headers }).pipe(
      tap(data => {
        this.cleanup();
        return data;
      })
    ).subscribe(result => {
      this.actualUser.next(null);
      this.alertProvider.shortAlert('Sign out successful', false);

      this.app.getRootNav().setRoot('LandPage');
    },
      error => {
        this.alertProvider.shortAlert('There was an error during the sign out: ' + error.message, true);
      });
  }

  currentUser() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('access_token')
    });

    return this.http.get<any>(this.envProvider.CURRENT_USER, { headers });
  }

  cleanup() {
    localStorage.clear();
    AuthProvider.isLoggedIn = false;
    delete AuthProvider.token;
    delete AuthProvider.accessToken;
    delete AuthProvider.expiresIn;
    delete AuthProvider.loggedInAt;
  }

  authenticated(): Boolean {
    try {
      return Boolean(JSON.parse(localStorage.getItem('isLoggedIn')));
    } catch (e) {
      return false;
    }
  }
}
