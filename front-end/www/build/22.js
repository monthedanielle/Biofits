webpackJsonp([22],{

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutPageModule", function() { return CheckOutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__check_out__ = __webpack_require__(844);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckOutPageModule = /** @class */ (function () {
    function CheckOutPageModule() {
    }
    CheckOutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__check_out__["a" /* CheckOutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__check_out__["a" /* CheckOutPage */]),
            ],
        })
    ], CheckOutPageModule);
    return CheckOutPageModule;
}());

//# sourceMappingURL=check-out.module.js.map

/***/ }),

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOutPage; });
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


/**
 * Generated class for the CheckOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckOutPage = /** @class */ (function () {
    function CheckOutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cards = [
            { img: 'assets/img/visa.png', name: 'visa' },
            { img: 'assets/img/paypal.png', name: 'paypal' },
            { img: 'assets/img/master.png', name: 'master' },
        ];
        // click Complete Reservation
        this.color = 'color1';
        this.btn_text = 'Complete Reservation';
    }
    CheckOutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckOutPage');
    };
    CheckOutPage.prototype.complete_reserve = function () {
        this.color = 'color2';
        this.btn_text = 'Completed Reservation';
    };
    CheckOutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-check-out',template:/*ion-inline-start:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/check-out/check-out.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>CheckOut</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h5>Name of Reserved Courses</h5>\n  <p>Web Design Course</p>\n  <ion-grid class="cost">\n    <ion-row>\n      <ion-col col-6>\n        <p>COST</p>\n      </ion-col>\n      <ion-col col-6>\n        <p text-right>5000$</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class="appForm">\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" placeholder="Full Name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="tel" placeholder="Mobile No"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="Address"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-textarea rows="4" placeholder="Notes"></ion-textarea>\n      </ion-item>\n    </ion-list>\n    <!-- visa radio buttons list -->\n    <ion-list radio-group class="cards">\n      <ion-item *ngFor="let item of cards">\n        <ion-label>\n          <img src="{{item.img}}">\n        </ion-label>\n        <ion-radio  value="{{item.name}}"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-item>\n        <ion-input type="num" placeholder="Card Number"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="password" placeholder="Password"></ion-input>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer>\n  <button ion-button block [color]="color" (click)="complete_reserve()">{{btn_text}}</button>\n</ion-footer>'/*ion-inline-end:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/check-out/check-out.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CheckOutPage);
    return CheckOutPage;
}());

//# sourceMappingURL=check-out.js.map

/***/ })

});
//# sourceMappingURL=22.js.map