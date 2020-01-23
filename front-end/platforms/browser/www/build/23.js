webpackJsonp([23],{

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarksPageModule", function() { return BookmarksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookmarks__ = __webpack_require__(855);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookmarksPageModule = /** @class */ (function () {
    function BookmarksPageModule() {
    }
    BookmarksPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bookmarks__["a" /* BookmarksPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bookmarks__["a" /* BookmarksPage */]),
            ],
        })
    ], BookmarksPageModule);
    return BookmarksPageModule;
}());

//# sourceMappingURL=bookmarks.module.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookmarksPage = /** @class */ (function () {
    function BookmarksPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item_stable = [
            {
                img: 'assets/img/home/001.png',
                title: 'people',
                item_accordinat: [
                    { name: 'Adam G Smith', Component: 'PeopleDetailsPage' },
                    { name: 'Veronica Sharon', Component: 'PeopleDetailsPage' },
                ]
            },
            {
                img: 'assets/img/home/002.png',
                title: 'Maps',
                item_accordinat: [
                    { name: 'Address 1', Component: 'MapPage' },
                    { name: 'Address 2', Component: 'MapPage' },
                ]
            },
            {
                img: 'assets/img/home/003.png',
                title: 'Courses',
                item_accordinat: [
                    { name: 'Web Design', Component: 'LessonDetailsPage' },
                    { name: 'Web Developer', Component: 'LessonDetailsPage' },
                ]
            },
            {
                img: 'assets/img/home/004.png',
                title: 'Dining',
                item_accordinat: [
                    { name: 'Restaurant Name 1', Component: 'DiningLocationPage' },
                    { name: 'Restaurant Name 2', Component: 'DiningLocationPage' },
                ]
            },
            {
                img: 'assets/img/home/005.png',
                title: 'Athletics',
                item_accordinat: [
                    { name: 'Athletic 1', Component: 'SchedulePage' },
                    { name: 'Athletic 2', Component: 'SchedulePage' },
                ]
            },
            {
                img: 'assets/img/home/006.png',
                title: 'News',
                item_accordinat: [
                    { name: 'Title 1', Component: 'NewsDetailsPage' },
                    { name: 'Title 2', Component: 'NewsDetailsPage' },
                    { name: 'Title 3', Component: 'NewsDetailsPage' },
                    { name: 'Title 4', Component: 'NewsDetailsPage' },
                ]
            },
            {
                img: 'assets/img/home/007.png',
                title: 'Events',
                item_accordinat: [
                    { name: 'Event 1', Component: 'EventDetailsPage' },
                    { name: 'Event 2', Component: 'EventDetailsPage' },
                ]
            },
        ];
        this.shownGroup = null;
    }
    BookmarksPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookmarksPage');
    };
    BookmarksPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    BookmarksPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    BookmarksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-bookmarks',template:/*ion-inline-start:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/bookmarks/bookmarks.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="ios-menu"></ion-icon>\n    </button>\n    <ion-title>Bookmark</ion-title>\n    <ion-buttons end>\n      <button ion-button navPush="NotificationsPage" class="notification_Btn" >\n        <ion-icon name="ios-notifications"></ion-icon>\n        <ion-badge color="danger">2</ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <div class="accordinat_item" *ngFor="let x of item_stable ; let i=index" (click)="toggleGroup(i)">\n      <div padding class="itemStable">\n        <ion-item  padding>\n          <img src="{{x.img}}" item-left>\n          <ion-icon name="ios-arrow-down" item-right color="color2"></ion-icon>\n          <p>{{x.title}}</p>\n        </ion-item>\n      </div>\n       <!-- list of Search name -->\n      <ion-list class="list_accordion" *ngIf="isGroupShown(i)">\n        <ion-item navPush=\'{{y.Component}}\' *ngFor="let y of x.item_accordinat"> \n          <p class="tit">{{y.name}}</p>\n        </ion-item>\n      </ion-list>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/bookmarks/bookmarks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], BookmarksPage);
    return BookmarksPage;
}());

//# sourceMappingURL=bookmarks.js.map

/***/ })

});
//# sourceMappingURL=23.js.map