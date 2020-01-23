webpackJsonp([20],{

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiningLocationPageModule", function() { return DiningLocationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dining_location__ = __webpack_require__(850);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DiningLocationPageModule = /** @class */ (function () {
    function DiningLocationPageModule() {
    }
    DiningLocationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dining_location__["a" /* DiningLocationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dining_location__["a" /* DiningLocationPage */]),
            ],
        })
    ], DiningLocationPageModule);
    return DiningLocationPageModule;
}());

//# sourceMappingURL=dining-location.module.js.map

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiningLocationPage; });
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


var DiningLocationPage = /** @class */ (function () {
    function DiningLocationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
        // ==============================
        // bookmark function
        this.bookmark_Click = false;
    }
    DiningLocationPage.prototype.calendar_function = function (type) {
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
    DiningLocationPage.prototype.detect_month_days = function () {
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
    DiningLocationPage.prototype.bookmark = function () {
        this.bookmark_Click = (this.bookmark_Click == false) ? true : false;
        console.log();
    };
    DiningLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-dining-location',template:/*ion-inline-start:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/dining-location/dining-location.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Location Details</ion-title>\n    <ion-buttons end>\n      <button ion-button navPush="NotificationsPage" class="notification_Btn" >\n        <ion-icon name="ios-notifications"></ion-icon>\n        <ion-badge color="danger">2</ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <ion-grid class="rest_info">\n    <ion-row>\n      <ion-col col-12>\n        <h4>Restaurant Name</h4>\n      </ion-col>\n      <ion-col col-6>\n        <p class="ser">Customer Service</p>\n      </ion-col>\n      <ion-col col-6>\n        <p float-right>\n          <ion-icon name="ios-call"></ion-icon>\n          123-456-789\n        </p>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button  navPush=\'MapPage\' block color="color1" class="map_btn">\n          <ion-icon name="ios-pin"  ></ion-icon>\n          Veiw on Map\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button block color="color1" (click)="bookmark()" class="mark_btn" >\n          <ion-icon name="ios-star" [ngClass]="{\'active\':bookmark_Click==true}" ></ion-icon>\n          Bookmark\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n    <!-- list of Dining Halls-->\n  <ion-list class="dining_List">\n    <!-- breakfast item -->\n    <ion-item  navPush=\'MealsPage\'> \n      <p class="tit">Breakfast</p>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-auto>\n            <p>Tue,10 Oct.,2017</p>\n          </ion-col>\n          <ion-col col-auto>\n            <p padding-left>\n              <span>7:30</span> - <span>10:00</span>AM\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <!-- lanch item -->\n    <ion-item  navPush=\'MealsPage\'> \n      <p class="tit">Lanch</p>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-auto>\n            <p>Tue,10 Oct.,2017</p>\n          </ion-col>\n          <ion-col col-auto>\n            <p padding-left>\n              <span>7:30</span> - <span>10:00</span>AM\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <!-- dinner item -->\n    <ion-item  navPush=\'MealsPage\'>  \n      <p class="tit">Dinner</p>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-auto>\n            <p  padding-right>Tue,10 Oct.,2017</p>\n          </ion-col>\n          <ion-col col-auto>\n            <p>\n              <span>7:30</span> - <span>10:00</span>AM\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n  </ion-list>\n  <!-- Calendar  -->\n  <ion-grid class="calendar">\n    <ion-row>\n      <ion-col col-auto>\n        <ion-icon name="ios-arrow-back" color="light"  (click)="calendar_function(\'decrease\')"></ion-icon>\n      </ion-col>\n      <ion-col col>\n        <p>\n          <span>{{day_name}}</span>,\n          <span>{{day_num}}</span>\n          <span>{{month_name}}</span>.,\n        </p>\n      </ion-col>\n      <ion-col col-auto>\n        <ion-icon name="ios-arrow-forward" color="light" (click)="calendar_function(\'increase\')"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/dining-location/dining-location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DiningLocationPage);
    return DiningLocationPage;
}());

//# sourceMappingURL=dining-location.js.map

/***/ })

});
//# sourceMappingURL=20.js.map