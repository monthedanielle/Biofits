import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera'; 
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BenutzerProvider } from '../providers/benutzer/benutzer';
import { EnvProvider } from '../providers/env/env';
import { AlertProvider } from '../providers/alert/alert';
import { AuthProvider } from '../providers/auth/auth';
import { StringUtilsProvider } from '../providers/string-utils/string-utils';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { SportArtProvider } from '../providers/sport-art/sport-art';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpConfigInterceptor } from '../interceptors/httpConfig.interceptor';

var config = {
      backButtonText: '',
      backButtonIcon: 'ios-arrow-back',
      iconMode: 'ios',
      mode:'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      pageTransition: 'ios',
    };
@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,config),
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BenutzerProvider,
    EnvProvider,
    AlertProvider,
    AuthProvider,
    StringUtilsProvider,
    SportArtProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    },
    Geolocation
  ]
})
export class AppModule {}
    