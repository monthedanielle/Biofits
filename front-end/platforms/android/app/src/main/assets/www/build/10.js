webpackJsonp([10],{

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPageModule", function() { return PasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password__ = __webpack_require__(859);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PasswordPageModule = /** @class */ (function () {
    function PasswordPageModule() {
    }
    PasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__password__["a" /* PasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__password__["a" /* PasswordPage */]),
            ],
        })
    ], PasswordPageModule);
    return PasswordPageModule;
}());

//# sourceMappingURL=password.module.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
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


var PasswordPage = /** @class */ (function () {
    function PasswordPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    PasswordPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-password',template:/*ion-inline-start:"/home/nganya/Documents/Myanga/dev/software/biofits/src/pages/password/password.html"*/'\n<ion-content padding>\n  <div class="appForm">\n    <ion-list>\n      <ion-list-header>\n        Reset Your Passowrd\n      </ion-list-header>\n        <ion-item>\n          <ion-icon name="ios-mail-outline" item-left></ion-icon>\n          <ion-input type="email" placeholder="Your E-mail"></ion-input>\n        </ion-item>\n    </ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button block color="color2" (click)="dismiss()">Cancel</button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button block color="color1" (click)="dismiss()">Ok</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/nganya/Documents/Myanga/dev/software/biofits/src/pages/password/password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ })

});
//# sourceMappingURL=10.js.map