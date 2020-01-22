webpackJsonp([21],{

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiningHallsPageModule", function() { return DiningHallsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dining_halls__ = __webpack_require__(847);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DiningHallsPageModule = /** @class */ (function () {
    function DiningHallsPageModule() {
    }
    DiningHallsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dining_halls__["a" /* DiningHallsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dining_halls__["a" /* DiningHallsPage */]),
            ],
        })
    ], DiningHallsPageModule);
    return DiningHallsPageModule;
}());

//# sourceMappingURL=dining-halls.module.js.map

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiningHallsPage; });
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


var DiningHallsPage = /** @class */ (function () {
    function DiningHallsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.halls_list = [
            { name: "Restaurant one", type: 'Breakfast', time_from: '7:30', time_to: '10:00' },
            { name: "Restaurant two", type: 'Breakfast', time_from: '7:30', time_to: '10:00' },
            { name: "Restaurant three", type: 'Breakfast', time_from: '7:30', time_to: '10:00' },
            { name: "Restaurant four", type: 'Breakfast', time_from: '7:30', time_to: '10:00' },
            { name: "Restaurant one", type: 'Breakfast', time_from: '7:30', time_to: '10:00' },
            { name: "Restaurant two", type: 'Breakfast', time_from: '7:30', time_to: '10:00' },
            { name: "Restaurant three", type: 'Breakfast', time_from: '7:30', time_to: '10:00' },
            { name: "Restaurant four", type: 'Breakfast', time_from: '7:30', time_to: '10:00' },
            { name: "Restaurant one", type: 'Breakfast', time_from: '7:30', time_to: '10:00' },
            { name: "Restaurant two", type: 'Breakfast', time_from: '7:30', time_to: '10:00' },
            { name: "Restaurant three", type: 'Breakfast', time_from: '7:30', time_to: '10:00' },
            { name: "Restaurant four", type: 'Breakfast', time_from: '7:30', time_to: '10:00' },
            { name: "Restaurant one", type: 'Breakfast', time_from: '7:30', time_to: '10:00' },
            { name: "Restaurant two", type: 'Breakfast', time_from: '7:30', time_to: '10:00' },
            { name: "Restaurant three", type: 'Breakfast', time_from: '7:30', time_to: '10:00' },
            { name: "Restaurant four", type: 'Breakfast', time_from: '7:30', time_to: '10:00' },
        ];
    }
    DiningHallsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DiningHallsPage');
    };
    DiningHallsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-dining-halls',template:/*ion-inline-start:"/home/nganya/Documents/Myanga/dev/software/biofits/src/pages/dining-halls/dining-halls.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="ios-menu"></ion-icon>\n    </button>\n    <ion-title>Dining Halls</ion-title>\n    <ion-buttons end>\n      <button ion-button navPush="NotificationsPage" class="notification_Btn" >\n        <ion-icon name="ios-notifications"></ion-icon>\n        <ion-badge color="danger">2</ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div padding>\n    <ion-searchbar [(ngModel)]="search" placeholder="Search Place"></ion-searchbar>\n  </div>\n    <!-- list of Dining Halls-->\n  <ion-list class="dining_List">\n\n    <ion-item *ngFor="let item of halls_list" navPush="DiningLocationPage"> \n      <p class="tit">{{item.name}}</p>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-auto>\n            <p>Next :</p>\n          </ion-col>\n          <ion-col col-auto>\n            <p>{{item.type}} :</p>\n          </ion-col>\n          <ion-col col-auto>\n            <p>\n              <span>{{item.time_from}}</span> - <span>{{item.time_to}}</span>AM\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/nganya/Documents/Myanga/dev/software/biofits/src/pages/dining-halls/dining-halls.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DiningHallsPage);
    return DiningHallsPage;
}());

//# sourceMappingURL=dining-halls.js.map

/***/ })

});
//# sourceMappingURL=21.js.map