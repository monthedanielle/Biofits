webpackJsonp([18],{

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageModule", function() { return EventsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events__ = __webpack_require__(851);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventsPageModule = /** @class */ (function () {
    function EventsPageModule() {
    }
    EventsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__events__["a" /* EventsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__events__["a" /* EventsPage */]),
            ],
        })
    ], EventsPageModule);
    return EventsPageModule;
}());

//# sourceMappingURL=events.module.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsPage = /** @class */ (function () {
    function EventsPage(navCtrl, navParams, authProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.click_mark = false;
        this.events = [
            { img: 'assets/img/events/001.png', title: 'Event Title', date: '10 oct,2017' },
            { img: 'assets/img/events/001.png', title: 'Event Title', date: '10 oct,2017' },
            { img: 'assets/img/events/001.png', title: 'Event Title', date: '10 oct,2017' },
            { img: 'assets/img/events/001.png', title: 'Event Title', date: '10 oct,2017' },
        ];
        // =========================
        // calender Function
        this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.day_num = 1;
        this.day_name = 'Wednesday';
        this.month_name = 'Nov';
        this.year = 2017;
        this.day_index = this.days.indexOf(this.day_name);
        this.month_index = this.months.indexOf(this.month_name);
    }
    EventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsPage');
    };
    EventsPage.prototype.ionViewCanEnter = function () {
        return this.authProvider.authenticated();
    };
    // click mark book function
    EventsPage.prototype.marked = function (item, $event) {
        $event.stopPropagation();
        item.click_mark = (item.click_mark == true) ? false : true;
    };
    EventsPage.prototype.calendar_function = function (type) {
        this.detect_month_days();
        // when increase days
        if (type == 'increase') {
            if (this.day_num == this.max_days) {
                this.month_index = this.month_index + 1;
                this.detect_month_days();
                this.day_num = 0;
                if (this.month_index >= this.months.length) {
                    this.month_index = 0;
                    this.year = this.year + 1;
                }
            }
            if (this.day_index == this.days.length - 1) {
                this.day_index = -1;
            }
            this.day_index = this.day_index + 1;
            this.day_num = this.day_num + 1;
        }
        else if (type == 'decrease') {
            if (this.day_num == 1) {
                this.month_index = this.month_index - 1;
                this.detect_month_days();
                this.day_num = this.max_days;
                if (this.month_index <= 0) {
                    this.month_index = this.months.length - 1;
                    this.year = this.year - 1;
                }
            }
            else {
                this.day_num = this.day_num - 1;
            }
            if (this.day_index == 0) {
                this.day_index = this.days.length;
            }
            this.day_index = this.day_index - 1;
        }
        this.day_name = this.days[this.day_index];
        this.month_name = this.months[this.month_index];
        console.log(this.day_name);
        console.log(this.day_num);
        console.log(this.month_name);
        console.log(this.year);
    };
    //  how meny days in month
    EventsPage.prototype.detect_month_days = function () {
        if (this.month_index == 3 || this.month_index == 5 || this.month_index == 8 || this.month_index == 10) {
            this.max_days = 30;
        }
        else if (this.month_index == 0 ||
            this.month_index == 2 ||
            this.month_index == 4 ||
            this.month_index == 6 ||
            this.month_index == 7 ||
            this.month_index == 9 ||
            this.month_index == 11) {
            this.max_days = 31;
        }
        else if (this.month_index == 1) {
            if (this.year % 4 == 0) {
                this.max_days = 29;
            }
            else {
                this.max_days = 28;
            }
        }
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/events/events.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="ios-menu"></ion-icon>\n    </button>\n    <ion-title>Tipps</ion-title>\n    <ion-buttons end>\n      <button ion-button navPush="NotificationsPage" class="notification_Btn" >\n        <ion-icon name="ios-notifications"></ion-icon>\n        <ion-badge color="danger">2</ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- events grid -->\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-md-6 col-lg-4 col-xl-3 *ngFor="let item of events" navPush="EventDetailsPage">\n\n        <div class="container">\n          <!-- item image -->\n          <div class="imgBg" [ngStyle]="{\'background-image\':\'url(\' + item.img + \')\'}">\n            <button ion-button class="mark_btn" color="color1" (click)="marked(item, $event)">\n              <ion-icon name="ios-star"  [ngClass]="{\'active\':item.click_mark==true}"></ion-icon>\n            </button>\n            <ion-grid >\n              <ion-row>\n                <ion-col col-auto>\n                  <p>\n                    <ion-icon name="ios-eye" color="color2"></ion-icon>\n                    120\n                  </p>\n                </ion-col>\n                <ion-col col>\n                  <p>\n                    <ion-icon name="md-heart" color="light"></ion-icon>\n                    50\n                  </p>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n          <!-- item title and date -->\n          <ion-grid>\n            <ion-row>\n              <ion-col col>\n                <h5>{{item.title}}</h5>\n              </ion-col>\n              <ion-col col-auto>\n                <p>{{item.date}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <!-- item description -->\n          <p>\n            is simply dummy text of the printing and typesetting industry.is simply dummy text of the printing and typesetting industry.\n          </p>\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/events/events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ })

});
//# sourceMappingURL=18.js.map