webpackJsonp([16],{

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandPageModule", function() { return LandPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__land__ = __webpack_require__(710);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LandPageModule = /** @class */ (function () {
    function LandPageModule() {
    }
    LandPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__land__["a" /* LandPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__land__["a" /* LandPage */]),
            ],
        })
    ], LandPageModule);
    return LandPageModule;
}());

//# sourceMappingURL=land.module.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandPage; });
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



var LandPage = /** @class */ (function () {
    function LandPage(navCtrl, authProvider, app) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.app = app;
        if (this.authProvider.authenticated()) {
            this.navCtrl.setRoot('HomePage');
        }
    }
    LandPage.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page);
    };
    LandPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-land',template:/*ion-inline-start:"/home/nganya/Documents/Myanga/dev/software/biofits/src/pages/land/land.html"*/'\n<ion-content padding style="background-color: rgb(2, 109, 158)" class="sign">\n \n  <div class="logo">\n    <h3>Biofits</h3>\n    <p>Fit bleiben!</p>\n    <img src="assets/img/logo.png"/>\n  </div>\n  <p class="note">Sport treiben und Gutscheine gewinnen</p>\n\n</ion-content>\n<ion-footer>\n  <button ion-button block color="color2" margin-bottom navPush=\'SignUpPage\'>Registrierung</button>\n  <button ion-button block color="light" navPush=\'SignInPage\'>Anmeldung</button>\n</ion-footer>\n'/*ion-inline-end:"/home/nganya/Documents/Myanga/dev/software/biofits/src/pages/land/land.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], LandPage);
    return LandPage;
}());

//# sourceMappingURL=land.js.map

/***/ })

});
//# sourceMappingURL=16.js.map