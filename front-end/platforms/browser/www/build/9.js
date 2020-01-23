webpackJsonp([9],{

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePageModule", function() { return PeoplePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__people__ = __webpack_require__(864);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PeoplePageModule = /** @class */ (function () {
    function PeoplePageModule() {
    }
    PeoplePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__people__["a" /* PeoplePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__people__["a" /* PeoplePage */]),
            ],
        })
    ], PeoplePageModule);
    return PeoplePageModule;
}());

//# sourceMappingURL=people.module.js.map

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeoplePage; });
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


var PeoplePage = /** @class */ (function () {
    function PeoplePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.names = ["Adam G Smith", "Veronica Sharon", "Taylor Jony", "Jony H Sam"];
    }
    PeoplePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
    };
    PeoplePage.prototype.ionInput = function () {
        console.log('ionViewDidLoad MapPage');
    };
    PeoplePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-people',template:/*ion-inline-start:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/people/people.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="ios-menu"></ion-icon>\n    </button>\n    <ion-title>people</ion-title>\n    <ion-buttons end>\n      <button ion-button navPush="NotificationsPage" class="notification_Btn" >\n        <ion-icon name="ios-notifications"></ion-icon>\n        <ion-badge color="danger">2</ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content >\n  <div padding>\n    <ion-searchbar [(ngModel)]="search"></ion-searchbar>\n    <p class="tip" *ngIf="search == undefined || search ==\'\'">\n      Search tip : You can Search by part or all of a person`s name, email address or Phone number.\n    </p>\n  </div>\n  <!-- list of main contacts -->\n  <ion-list class="contact_List" *ngIf="search == undefined || search ==\'\'">\n    <ion-list-header>\n      Main Contacts\n    </ion-list-header>\n    <!-- Genral Direction Item -->\n    <ion-item> \n      <ion-icon name="ios-call" color="color2" item-right></ion-icon>\n      <p class="tit">General Directory</p>\n      <p>123-456-789</p>\n    </ion-item>\n      <!-- Student Direction Item -->\n    <ion-item> \n      <ion-icon name="ios-call" color="color2" item-right></ion-icon>\n      <p class="tit">Student Directory</p>\n      <p>123-456-789</p>\n    </ion-item>\n      <!-- Faculty Direction Item -->\n    <ion-item> \n      <ion-icon name="ios-call" color="color2" item-right></ion-icon>\n      <p class="tit">Faculty/Staff Directory</p>\n      <p>123-456-789</p>\n    </ion-item>\n  </ion-list>\n\n    <!-- list of Search name -->\n  <ion-list class="search_name_list" *ngIf=" search != undefined && search != \'\' ">\n    <ion-item *ngFor="let item of names" navPush=\'PeopleDetailsPage\'> \n      <p class="tit">{{item}}</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/people/people.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PeoplePage);
    return PeoplePage;
}());

//# sourceMappingURL=people.js.map

/***/ })

});
//# sourceMappingURL=9.js.map