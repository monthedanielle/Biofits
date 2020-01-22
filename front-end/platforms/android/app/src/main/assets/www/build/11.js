webpackJsonp([11],{

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications__ = __webpack_require__(858);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */]),
            ],
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());

//# sourceMappingURL=notifications.module.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notifications = [
            { note: 'New Event soon ... wait for the news', img: '' },
            { note: 'Adam Jone: posted new course', img: 'assets/img/user1.png' },
        ];
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationsPage');
    };
    NotificationsPage.prototype.removeItem = function (item) {
        var index = this.notifications.indexOf(item);
        if (index > -1) {
            this.notifications.splice(index, 1);
        }
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"/home/nganya/Documents/Myanga/dev/software/biofits/src/pages/notifications/notifications.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Notification</ion-title>\n    <ion-buttons end>\n      <button ion-button class="notification_Btn" >\n        <ion-icon name="ios-notifications"></ion-icon>\n        <ion-badge color="danger">2</ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of notifications">\n      <ion-avatar item-start *ngIf="item.img !=\'\'">\n        <img src="{{item.img}}">\n      </ion-avatar>\n      <ion-icon name="md-close-circle" item-right color="color1" (click)="removeItem(item)"></ion-icon>\n      <p>{{item.note}}</p>\n    </ion-item>\n  </ion-list>\n  <!-- when no item in Cart\'s array -->\n  <div class="noItems" *ngIf="notifications.length==0">\n    <ion-icon name="ios-notifications-off-outline"></ion-icon>\n    <p>Empty Notifications</p>\n  </div>\n</ion-content> \n'/*ion-inline-end:"/home/nganya/Documents/Myanga/dev/software/biofits/src/pages/notifications/notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ })

});
//# sourceMappingURL=11.js.map