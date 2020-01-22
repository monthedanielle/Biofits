import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  public animateVarible: boolean = false;
  rootPage: any = 'LandPage';

  pages: Array<{ title: string, component: any, img: any, icon: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public authProvider: AuthProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage', img: 'assets/img/menu/001.png', icon: '' },
      { title: 'Dashboard', component: 'CoursesPage', img: 'assets/img/home/003.png', icon: '' },
      { title: 'Tipps', component: 'EventsPage', img: 'assets/img/home/004.png', icon: '' },
      { title: 'Aktivitäten', component: 'NewsPage', img: 'assets/img/home/008.png', icon: '' },
      { title: 'Profile', component: 'ProfilePage' , img: 'assets/img/home/010.png', icon: ''},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page);
  }

  logout() {
    this.authProvider.logout();
  }

}
