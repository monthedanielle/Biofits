webpackJsonp([13],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailsPageModule", function() { return NewsDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_details__ = __webpack_require__(856);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewsDetailsPageModule = /** @class */ (function () {
    function NewsDetailsPageModule() {
    }
    NewsDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__news_details__["a" /* NewsDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__news_details__["a" /* NewsDetailsPage */]),
            ],
        })
    ], NewsDetailsPageModule);
    return NewsDetailsPageModule;
}());

//# sourceMappingURL=news-details.module.js.map

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailsPage; });
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


var NewsDetailsPage = /** @class */ (function () {
    function NewsDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.click_mark = false;
        this.show_comment = false;
        // click heart btn
        this.clicked_heart = false;
        this.num_clicked = 50;
        this.heart_color = "color3";
    }
    NewsDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsDetailsPage');
    };
    NewsDetailsPage.prototype.add_comment = function () {
        this.show_comment = (this.show_comment == true) ? false : true;
    };
    // click mark book function
    NewsDetailsPage.prototype.marked = function () {
        this.click_mark = (this.click_mark == true) ? false : true;
        console.log(this.click_mark);
    };
    NewsDetailsPage.prototype.click_like = function () {
        if (this.clicked_heart == false) {
            this.clicked_heart = true;
            this.num_clicked = this.num_clicked + 1;
            this.heart_color = "danger";
        }
        else {
            this.clicked_heart = false;
            this.num_clicked = this.num_clicked - 1;
            this.heart_color = "color3";
        }
    };
    NewsDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-news-details',template:/*ion-inline-start:"/home/nganya/Documents/Myanga/dev/software/biofits/src/pages/news-details/news-details.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Details</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="details_img" style="background-image:url(assets/img/news/004.png)">\n    <ion-item>\n      <h4>Title one of 1st Article</h4>\n      <ion-grid >\n        <ion-row>\n          <ion-col col-auto>\n            <p>\n              <ion-icon name="ios-eye" color="color2"></ion-icon>\n              120\n            </p>\n          </ion-col>\n          <ion-col col>\n            <p (click)="click_like()">\n              <ion-icon name="ios-heart" color="{{heart_color}}"></ion-icon>\n              {{num_clicked}}\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div item-right class="btns_div">\n        <button ion-button class="mark_btn" color="color1" (click)="marked()">\n          <ion-icon name="ios-star"  [ngClass]="{\'active\':click_mark==true}"></ion-icon>\n        </button>\n        <ion-fab>\n          <button ion-fab color="color1"><ion-icon name="md-share"></ion-icon></button>\n          <ion-fab-list side="left">\n            <button ion-fab color="faceColor"><ion-icon name="logo-facebook"></ion-icon></button>\n            <button ion-fab color="twitterColor"><ion-icon name="logo-twitter"></ion-icon></button>\n            <button ion-fab color="googleColor"><ion-icon name="logo-googleplus"></ion-icon></button>\n          </ion-fab-list>\n        </ion-fab>\n      </div>\n    </ion-item>\n  </div>\n\n  <!-- details -->\n  <div class="details">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <p>\n            <span float-left>Write : </span>\n            Martin Adam\n          </p>\n        </ion-col>\n        <ion-col col-6>\n          <p text-right>\n            <span>22 Oct,2017</span>\n            <span padding-left float-right>10AM</span>\n          </p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <p class="description">\n      is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n    </p>\n    <div class="comments">\n      <ion-list>\n        <ion-item>\n          <ion-avatar item-left>\n            <img src="assets/img/user1.png">\n          </ion-avatar>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6>\n                <p>\n                  Adam Jone\n                </p>\n              </ion-col>\n              <ion-col col-6>\n                <p text-right>\n                  <span>23 Oct,</span>\n                  <span padding-left float-right>10AM</span>\n                </p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <p>is simply dummy text of the printing and typesetting industry.</p>\n        </ion-item>\n        <ion-item *ngIf="show_comment==true">\n          <ion-textarea rows="2" placeholder="Write your Comment"></ion-textarea>\n        </ion-item>\n      </ion-list>\n      <button ion-button block color="color1" margin-top (click)="add_comment()">Comment</button>\n    </div>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/home/nganya/Documents/Myanga/dev/software/biofits/src/pages/news-details/news-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], NewsDetailsPage);
    return NewsDetailsPage;
}());

//# sourceMappingURL=news-details.js.map

/***/ })

});
//# sourceMappingURL=13.js.map