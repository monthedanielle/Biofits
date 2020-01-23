import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
  } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { map, catchError } from 'rxjs/operators';
  import { Injectable, ViewChild } from '@angular/core';
import { AuthProvider } from '../providers/auth/auth';
import { AlertProvider } from '../providers/alert/alert';
import { Nav, App } from 'ionic-angular';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
  
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    loaderToShow: any;
    loadingSpinner: any;
    event: any;
    @ViewChild(Nav) nav: Nav;
    constructor(
        public app: App,
        public authProvider: AuthProvider,
        public alertProvider: AlertProvider
    ) { }
  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                this.event = event;
                if (event instanceof HttpResponse) {
                    
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if(error.error.error === 'invalid_token'){
                    this.authProvider.cleanup();
                    this.alertProvider.shortAlert('Sitzung abgelaufen!', true);
                    this.app.getRootNav().setRoot('LandPage');
                }
                return ErrorObservable.create(error);
            })
        );
    }
}
  