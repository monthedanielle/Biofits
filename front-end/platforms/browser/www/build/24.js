webpackJsonp([24],{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AthleticsPageModule", function() { return AthleticsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__athletics__ = __webpack_require__(841);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AthleticsPageModule = /** @class */ (function () {
    function AthleticsPageModule() {
    }
    AthleticsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__athletics__["a" /* AthleticsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__athletics__["a" /* AthleticsPage */]),
            ],
        })
    ], AthleticsPageModule);
    return AthleticsPageModule;
}());

//# sourceMappingURL=athletics.module.js.map

/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AthleticsPage; });
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


var AthleticsPage = /** @class */ (function () {
    function AthleticsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = 'men';
        this.sports = [];
        this.men_sports = [
            "Basket Ball",
            "Baseball",
            "Heavyweight Crew",
            "Lightweight Crew",
            "Cross Country",
            "Fancing",
            "Football",
            "Golf",
            "Ice Hockey",
            "Lacrosse",
            "Skiing",
            "Soccer",
            "Tennis"
        ];
        this.women_sports = [
            "Basket Ball Women",
            "Football Women",
            "Ice Hockey Women",
            "Tennis Women"
        ];
        this.select_sports(this.type);
    }
    AthleticsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AthleticsPage');
    };
    // select sports type
    AthleticsPage.prototype.select_sports = function (type) {
        this.sports = [];
        this.type = type;
        if (type == 'men') {
            for (var i = 0; i < this.men_sports.length; i++) {
                this.sports.push(this.men_sports[i]);
            }
        }
        else {
            for (var i = 0; i < this.women_sports.length; i++) {
                this.sports.push(this.women_sports[i]);
            }
        }
    };
    AthleticsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-athletics',template:/*ion-inline-start:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/athletics/athletics.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="ios-menu"></ion-icon>\n    </button>\n    <ion-title>Athletics</ion-title>\n    <ion-buttons end>\n      <button ion-button navPush="NotificationsPage" class="notification_Btn" >\n        <ion-icon name="ios-notifications"></ion-icon>\n        <ion-badge color="danger">2</ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class="two_btns">\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button block color="color1" (click)="select_sports(\'men\')" [ngClass]="{\'active\':type == \'men\'}">Men Sports</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button block color="color1" (click)="select_sports(\'women\')" [ngClass]="{\'active\':type == \'women\'}">Women Sports</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- list of Search name -->\n  <ion-list class="search_name_list">\n    <ion-item *ngFor="let item of sports" navPush=\'SchedulePage\'> \n      <p class="tit">{{item}}</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n   '/*ion-inline-end:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/athletics/athletics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AthleticsPage);
    return AthleticsPage;
}());

//# sourceMappingURL=athletics.js.map

/***/ })

});
//# sourceMappingURL=24.js.map