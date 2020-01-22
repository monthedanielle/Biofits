webpackJsonp([5],{

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in__ = __webpack_require__(867);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignInPageModule = /** @class */ (function () {
    function SignInPageModule() {
    }
    SignInPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */]),
            ],
        })
    ], SignInPageModule);
    return SignInPageModule;
}());

//# sourceMappingURL=sign-in.module.js.map

/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInPage = /** @class */ (function () {
    function SignInPage(navCtrl, modalCtrl, formBuilder, authProvider, alertProvider, loadingController) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.authProvider = authProvider;
        this.alertProvider = alertProvider;
        this.loadingController = loadingController;
        this.error = false;
        this.signInFormGroup = this.formBuilder.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
    }
    SignInPage.prototype.signIn = function (signInFormGroup) {
        var _this = this;
        this.loading = this.loadingController.create({ content: "Signing in, please wait..." });
        this.loading.present();
        this.authProvider.login(signInFormGroup.value.username, signInFormGroup.value.password).subscribe(function (result) {
            _this.error = false;
            _this.loading.dismissAll();
            _this.alertProvider.shortAlert('Sign in successful!', false);
            _this.openPage('LandPage');
        }, function (error) {
            _this.error = true;
            _this.errorMessage = 'Could not sign in!\nPlease, check your credentials!';
            _this.loading.dismissAll();
            _this.alertProvider.middleAlert('Sign in failed', false);
        });
    };
    SignInPage.prototype.passwordModal = function () {
        var modal = this.modalCtrl.create('PasswordPage');
        modal.present();
    };
    // go to another page
    SignInPage.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page);
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/sign-in/sign-in.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: rgb(2, 109, 158)" class="sign">\n  <div class="logo">\n    <div class="logo">\n      <h3>Biofits</h3>\n      <p>Fit bleiben!</p>\n      <img src="assets/img/logo.png" />\n    </div>\n  </div>\n  <ion-label *ngIf="error">{{ errorMessage }}</ion-label>\n  <form [formGroup]="signInFormGroup" (ngSubmit)="signIn(signInFormGroup)">\n    <div class="appForm" margin-bottom>\n      <ion-list>\n        <ion-item>\n          <ion-icon name="ios-mail-outline" item-left></ion-icon>\n          <ion-input formControlName="username" type="email" placeholder="Mail"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="ios-lock-outline" item-left></ion-icon>\n          <ion-input formControlName="password" type="password" placeholder="Password"></ion-input>\n        </ion-item>\n      </ion-list>\n    </div>\n    <button ion-button block color="color2" margin-top type="submit">Anmelden</button>\n  </form>\n  <p class="forgot" (click)="passwordModal()">Passwort vergessen?</p>\n\n</ion-content>'/*ion-inline-end:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/sign-in/sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ })

});
//# sourceMappingURL=5.js.map