webpackJsonp([10],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleDetailsPageModule", function() { return PeopleDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__people_details__ = __webpack_require__(863);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PeopleDetailsPageModule = /** @class */ (function () {
    function PeopleDetailsPageModule() {
    }
    PeopleDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__people_details__["a" /* PeopleDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__people_details__["a" /* PeopleDetailsPage */]),
            ],
        })
    ], PeopleDetailsPageModule);
    return PeopleDetailsPageModule;
}());

//# sourceMappingURL=people-details.module.js.map

/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleDetailsPage; });
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


var PeopleDetailsPage = /** @class */ (function () {
    function PeopleDetailsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = ["Assistant Professor of Science 2011", "Professor of Physics 2009", "Assistant Professor of Science 2011", "Professor of Physics 2009"];
        //click to select information
        this.type = 'email';
        // bookmark function
        this.bookmark_Click = false;
        // bookmark function
        this.addContact_Click = false;
    }
    PeopleDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PeopleDetailsPage');
    };
    PeopleDetailsPage.prototype.select = function (type) {
        this.type = type;
    };
    PeopleDetailsPage.prototype.bookmark = function () {
        this.bookmark_Click = (this.bookmark_Click == false) ? true : false;
        console.log(this.bookmark_Click);
    };
    PeopleDetailsPage.prototype.addContact = function () {
        this.addContact_Click = (this.addContact_Click == false) ? true : false;
        console.log(this.addContact_Click);
    };
    PeopleDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-people-details',template:/*ion-inline-start:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/people-details/people-details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Details</ion-title>\n    <ion-buttons end>\n      <button ion-button navPush="NotificationsPage" class="notification_Btn" >\n        <ion-icon name="ios-notifications"></ion-icon>\n        <ion-badge color="danger">2</ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <div class="profile_info">\n    <div class="profile_img" style="background-image:url(assets/img/profile.png)"></div>\n    <h5>Dr : Adam G Smith</h5>\n    <p>Assistant Professor of Science</p>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n          <ion-icon name="ios-mail" color="color2" (click)="select(\'email\')" [ngClass]="{\'active\':type==\'email\'}"></ion-icon>\n        </ion-col>\n        <ion-col col-4>\n          <ion-icon name="ios-call" color="color2" (click)="select(\'phone\')" [ngClass]="{\'active\':type==\'phone\'}"></ion-icon>\n        </ion-col>\n        <ion-col col-4>\n          <ion-icon name="ios-pin" color="color2" (click)="select(\'location\')" [ngClass]="{\'active\':type==\'location\'}"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class="appForm"  margin-bottom>\n    <ion-list [ngSwitch]="type">\n\n      <ion-item *ngSwitchCase="\'email\'" >\n        <ion-icon name="ios-mail" item-left></ion-icon>\n        <p>Adam@college.com</p>\n      </ion-item>\n\n      <ion-item class="phone" *ngSwitchCase="\'phone\'">\n        <ion-icon name="ios-call" item-left></ion-icon>\n        <p>+1</p>\n        <p>9123548725</p>\n      </ion-item>\n\n      <ion-item *ngSwitchCase="\'location\'">\n        <ion-icon name="ios-pin" item-left></ion-icon>\n        <p>New York,United State</p>\n      </ion-item>\n\n    </ion-list>\n  </div>\n  <ion-list class="info_list">\n    <ion-list-header>\n      Dr : Adam G Smith\n    </ion-list-header>\n    <ion-item *ngFor="let item of items">\n      <p>{{item}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button block color="color1" (click)="bookmark()" class="mark_btn" >\n          <ion-icon name="ios-star" [ngClass]="{\'active\':bookmark_Click==true}" ></ion-icon>\n          Bookmark\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button block color="color1" (click)="addContact()" class="mark_btn" >\n          <ion-icon name="md-person-add" [ngClass]="{\'active\':addContact_Click==true}" ></ion-icon>\n          Add to Contact\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/people-details/people-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], PeopleDetailsPage);
    return PeopleDetailsPage;
}());

//# sourceMappingURL=people-details.js.map

/***/ })

});
//# sourceMappingURL=10.js.map