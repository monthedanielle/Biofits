webpackJsonp([19],{

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailsPageModule", function() { return EventDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_details__ = __webpack_require__(851);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventDetailsPageModule = /** @class */ (function () {
    function EventDetailsPageModule() {
    }
    EventDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_details__["a" /* EventDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_details__["a" /* EventDetailsPage */]),
            ],
        })
    ], EventDetailsPageModule);
    return EventDetailsPageModule;
}());

//# sourceMappingURL=event-details.module.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailsPage; });
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


var EventDetailsPage = /** @class */ (function () {
    function EventDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.click_mark = false;
        this.show_comment = false;
        // click attend
        this.click_attend = false;
        this.color = 'color1';
        this.btn_text = 'attend';
        // click heart btn
        this.clicked_heart = false;
        this.num_clicked = 50;
        this.heart_color = "light";
    }
    EventDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsDetailsPage');
    };
    EventDetailsPage.prototype.add_comment = function () {
        this.show_comment = (this.show_comment == true) ? false : true;
    };
    // click mark book function
    EventDetailsPage.prototype.marked = function () {
        this.click_mark = (this.click_mark == true) ? false : true;
    };
    EventDetailsPage.prototype.attend = function () {
        if (this.click_attend == true) {
            this.color = 'color1';
            this.click_attend = false;
            this.btn_text = 'Cancelled Attend';
        }
        else {
            this.color = 'color2';
            this.click_attend = true;
            this.btn_text = 'Will Attend';
        }
    };
    EventDetailsPage.prototype.click_like = function () {
        if (this.clicked_heart == false) {
            this.clicked_heart = true;
            this.num_clicked = this.num_clicked + 1;
            this.heart_color = "danger";
        }
        else {
            this.clicked_heart = false;
            this.num_clicked = this.num_clicked - 1;
            this.heart_color = "light";
        }
    };
    EventDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-event-details',template:/*ion-inline-start:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/event-details/event-details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Details</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="details_img" style="background-image:url(assets/img/news/004.png)">\n    <ion-item>\n      <h4>Title one of 1st Article</h4>\n      <ion-grid >\n        <ion-row>\n          <ion-col col-auto>\n            <p>\n              <ion-icon name="ios-eye" color="color2"></ion-icon>\n              120\n            </p>\n          </ion-col>\n          <ion-col col>\n            <p (click)="click_like()">\n              <ion-icon name="md-heart" [color]="heart_color"></ion-icon>\n              {{num_clicked}}\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div item-right class="btns_div">\n        <button ion-button class="mark_btn" color="color1" (click)="marked()">\n          <ion-icon name="ios-star"  [ngClass]="{\'active\':click_mark==true}"></ion-icon>\n        </button>\n        <ion-fab>\n          <button ion-fab color="color1"><ion-icon name="md-share"></ion-icon></button>\n          <ion-fab-list side="left">\n            <button ion-fab color="faceColor"><ion-icon name="logo-facebook"></ion-icon></button>\n            <button ion-fab color="twitterColor"><ion-icon name="logo-twitter"></ion-icon></button>\n            <button ion-fab color="googleColor"><ion-icon name="logo-googleplus"></ion-icon></button>\n          </ion-fab-list>\n        </ion-fab>\n      </div>\n    </ion-item>\n  </div>\n  <div class="details">\n    <ion-list>\n\n      <ion-list-header>\n       <span>By: Martin Adam</span>\n      </ion-list-header>\n\n      <ion-item>\n        <span>Description</span>\n        <p>\n            is simply dummy text of the printing and typesetting industry.is simply dummy text of the printing and typesetting industry.\n        </p>\n      </ion-item>\n\n      <ion-item>\n        <span>Time of the event</span>\n        <p>\n          22 Oct.,2017 at 10Am to 8Pm.\n        </p>\n      </ion-item>\n\n      <ion-item>\n        <span>Location</span>\n        <p>\n          Building 4, Holl NO.2\n        </p>\n      </ion-item>\n      \n      <ion-item class="contact_item">\n        <span>Contact us for more information</span>\n        <ion-icon name="md-call" item-right color="color2"></ion-icon>\n        <p>HR</p>\n        <p>123-456-789</p>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n</ion-content>\n <ion-footer>\n  <button ion-button block [color]="color" (click)="attend()">{{btn_text}}</button>\n</ion-footer> '/*ion-inline-end:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/event-details/event-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EventDetailsPage);
    return EventDetailsPage;
}());

//# sourceMappingURL=event-details.js.map

/***/ })

});
//# sourceMappingURL=19.js.map