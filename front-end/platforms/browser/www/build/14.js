webpackJsonp([14],{

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealsPageModule", function() { return MealsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meals__ = __webpack_require__(855);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MealsPageModule = /** @class */ (function () {
    function MealsPageModule() {
    }
    MealsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__meals__["a" /* MealsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__meals__["a" /* MealsPage */]),
            ],
        })
    ], MealsPageModule);
    return MealsPageModule;
}());

//# sourceMappingURL=meals.module.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MealsPage; });
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


var MealsPage = /** @class */ (function () {
    function MealsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.meals = [
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
        // Calendar Functions
        this.meal_name = ["Breakfast", "Lanch", "Dinner"];
        this.n = 0;
        // bookmark function
        this.bookmark_Click = false;
    }
    MealsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MealsPage');
    };
    // name=this.meal_name[this.n];
    MealsPage.prototype.click_Left = function () {
        if (this.n == 0) {
            this.n = 2;
        }
        else {
            this.n = this.n - 1;
        }
        console.log(this.n);
    };
    MealsPage.prototype.click_Right = function () {
        if (this.n == 2) {
            this.n = 0;
        }
        else {
            this.n = this.n + 1;
        }
        console.log(this.n);
    };
    MealsPage.prototype.bookmark = function () {
        this.bookmark_Click = (this.bookmark_Click == false) ? true : false;
        console.log(this.bookmark_Click);
    };
    MealsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-meals',template:/*ion-inline-start:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/meals/meals.html"*/'\n<ion-header>\n  <ion-navbar >\n    <ion-title>Meals</ion-title>\n    <ion-buttons end>\n      <button ion-button navPush="NotificationsPage" class="notification_Btn" >\n        <ion-icon name="ios-notifications"></ion-icon>\n        <ion-badge color="danger">2</ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- Resturant Information -->\n  <ion-grid class="rest_info">\n    <ion-row>\n      <ion-col col-12>\n        <h4>Restaurant Name</h4>\n      </ion-col>\n      <ion-col col-6>\n        <p class="ser">Customer Service</p>\n      </ion-col>\n      <ion-col col-6>\n        <p float-right>\n          <ion-icon name="ios-call"></ion-icon>\n          123-456-789\n        </p>\n      </ion-col>\n      <ion-col col-5>\n        <button ion-button block color="color1" navPush=\'MapPage\' class="map_btn">\n          <ion-icon name="ios-pin"></ion-icon>\n          Veiw on Map\n        </button>\n      </ion-col>\n      <ion-col col-5>\n        <button ion-button block color="color1" (click)="bookmark()" class="mark_btn" >\n          <ion-icon name="ios-star" [ngClass]="{\'active\':bookmark_Click==true}" ></ion-icon>\n          Bookmark\n        </button>\n      </ion-col>\n      <ion-col col-2>\n\n        <ion-fab>\n          <button ion-fab color="color1" class="share_btn"><ion-icon color="color2" name="md-share"></ion-icon></button>\n          <ion-fab-list side="left">\n            <button ion-fab color="faceColor"><ion-icon name="logo-facebook"></ion-icon></button>\n            <button ion-fab color="twitterColor"><ion-icon name="logo-twitter"></ion-icon></button>\n            <button ion-fab color="googleColor"><ion-icon name="logo-googleplus"></ion-icon></button>\n          </ion-fab-list>\n        </ion-fab>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- Calendar  -->\n  <ion-grid class="calendar">\n    <ion-row>\n      <ion-col col-auto>\n        <ion-icon name="ios-arrow-back" color="light" (click)="click_Left()"></ion-icon>\n      </ion-col>\n      <ion-col col>\n        <p>\n          {{meal_name[n]}}\n        </p>\n      </ion-col>\n      <ion-col col-auto>\n        <ion-icon name="ios-arrow-forward" color="light" (click)="click_Right()"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- meals grid -->\n  <ion-grid class="meals">\n    <ion-row>\n      <ion-col col-12 col-md-6 col-lg-4 col-xl-3 *ngFor="let item of meals">\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="assets/img/eat/001.png">\n          </ion-thumbnail>\n          <h4>BBQ</h4>\n          <p>3 Peices of Fried Chicken</p>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/meals/meals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MealsPage);
    return MealsPage;
}());

//# sourceMappingURL=meals.js.map

/***/ })

});
//# sourceMappingURL=14.js.map