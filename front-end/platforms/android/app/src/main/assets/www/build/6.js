webpackJsonp([6],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageModule", function() { return SchedulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule__ = __webpack_require__(862);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SchedulePageModule = /** @class */ (function () {
    function SchedulePageModule() {
    }
    SchedulePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__schedule__["a" /* SchedulePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__schedule__["a" /* SchedulePage */]),
            ],
        })
    ], SchedulePageModule);
    return SchedulePageModule;
}());

//# sourceMappingURL=schedule.module.js.map

/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
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


var SchedulePage = /** @class */ (function () {
    function SchedulePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
        ];
        // calender Function
        this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.month_name = 'Nov';
        this.year = 2017;
        this.month_index = this.months.indexOf(this.month_name);
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SchedulePage');
    };
    SchedulePage.prototype.calendar_function = function (type) {
        if (type == 'increase') {
            if (this.month_index == this.months.length - 1) {
                this.month_index = 0;
                this.year = this.year + 1;
            }
            else {
                this.month_index = this.month_index + 1;
            }
        }
        else if (type == 'decrease') {
            if (this.month_index == 0) {
                this.month_index = this.months.length - 1;
                this.year = this.year - 1;
            }
            else {
                this.month_index = this.month_index - 1;
            }
        }
        this.month_name = this.months[this.month_index];
        console.log(this.month_name);
        console.log(this.year);
    };
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"/home/nganya/Documents/Myanga/dev/software/biofits/src/pages/schedule/schedule.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Schedule</ion-title>\n    <ion-buttons end>\n      <button ion-button navPush="NotificationsPage" class="notification_Btn" >\n        <ion-icon name="ios-notifications"></ion-icon>\n        <ion-badge color="danger">2</ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- Calendar  -->\n  <ion-grid class="calendar">\n    <ion-row>\n      <ion-col col-auto>\n        <ion-icon name="ios-arrow-back" color="light" (click)="calendar_function(\'decrease\')"></ion-icon>\n      </ion-col>\n      <ion-col col>\n        <p>\n          <span>{{month_name}}</span>.,\n          <span>{{year}}</span>\n        </p>\n      </ion-col>\n      <ion-col col-auto>\n        <ion-icon name="ios-arrow-forward" color="light" (click)="calendar_function(\'increase\')"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- Sport Schedule -->\n  <ion-list>\n    <ion-item *ngFor="let item of items"> \n      <ion-grid>\n        <ion-row>\n          <ion-col col-auto>\n            <p>Tue,10 Oct.,2017</p>\n          </ion-col>\n          <ion-col col-auto>\n            <p padding-left>\n              <span>7:30</span> - <span>10:00</span>AM\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/nganya/Documents/Myanga/dev/software/biofits/src/pages/schedule/schedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ })

});
//# sourceMappingURL=6.js.map