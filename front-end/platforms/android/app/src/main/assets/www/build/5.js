webpackJsonp([5],{

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting__ = __webpack_require__(864);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingPageModule = /** @class */ (function () {
    function SettingPageModule() {
    }
    SettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */]),
            ],
        })
    ], SettingPageModule);
    return SettingPageModule;
}());

//# sourceMappingURL=setting.module.js.map

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingPage = /** @class */ (function () {
    function SettingPage(_myApp, navCtrl, navParams) {
        this._myApp = _myApp;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.action = false;
        this.item_stable = [
            {
                title: 'App Language',
                item_accordinat: ["English", "Franch"]
            },
        ];
        this.social = [
            { icon_name: 'logo-facebook', name: 'facebook', color: "faceColor" },
            { icon_name: 'logo-googleplus', name: 'goohle_pluse', color: "googleColor" },
            { icon_name: 'logo-twitter', name: 'twitter', color: "twitterColor" },
        ];
        this.shownGroup = null;
        this.action = this._myApp.animateVarible;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookmarksPage');
    };
    SettingPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    SettingPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    // select Language Function
    SettingPage.prototype.select_lang = function (x, y) {
        x.title = y;
    };
    SettingPage.prototype.animateApp = function (e) {
        this._myApp.animateVarible = e.checked;
        this.action = this._myApp.animateVarible;
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"/home/nganya/Documents/Myanga/dev/software/biofits/src/pages/setting/setting.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="ios-menu"></ion-icon>\n    </button>\n    <ion-title>Setting</ion-title>\n    <ion-buttons end>\n      <button ion-button navPush="NotificationsPage" class="notification_Btn" >\n        <ion-icon name="ios-notifications"></ion-icon>\n        <ion-badge color="danger">2</ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content >\n  <ion-list>\n    <div class="accordinat_item" *ngFor="let x of item_stable ; let i=index" (click)="toggleGroup(i)">\n      <div padding class="itemStable">\n        <ion-item  padding>\n          <ion-icon name="ios-arrow-down" item-right color="color2"></ion-icon>\n          <p>{{x.title}}</p>\n        </ion-item>\n      </div>\n       <!-- list of Search name -->\n      <ion-list class="list_accordion" *ngIf="isGroupShown(i)">\n        <ion-item *ngFor="let y of x.item_accordinat" (click)="select_lang(x,y)"> \n          <p class="tit">{{y}}</p>\n        </ion-item>\n      </ion-list>\n    </div>\n  </ion-list>\n  <div class="connect_with">\n    <p>Connect With</p>\n    <!-- Social media radio buttons list -->\n    <ion-list radio-group class="social_media">\n      <ion-item *ngFor="let item of social">\n        <ion-label>\n          <button ion-button color="{{item.color}}">\n            <ion-icon name="{{item.icon_name}}"></ion-icon>\n          </button>\n        </ion-label>\n        <ion-radio  value="{{item.name}}"></ion-radio>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div class="notify_me">\n    <p>Notify me with updates in :</p>\n    <!-- notify checkbox buttons list -->\n    <ion-list>\n      <ion-item>\n        <ion-label>Courses</ion-label>\n        <ion-checkbox [(ngModel)]="courses"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Events</ion-label>\n        <ion-checkbox [(ngModel)]="events"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>News</ion-label>\n        <ion-checkbox [(ngModel)]="news"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div class="animate">\n    <ion-item>\n      <ion-label>Animation avilability</ion-label>\n      <ion-checkbox (ionChange)="animateApp($event)"  checked="{{action}}" [(ngModel)]="animate"></ion-checkbox>\n    </ion-item>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/nganya/Documents/Myanga/dev/software/biofits/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ })

});
//# sourceMappingURL=5.js.map