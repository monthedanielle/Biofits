webpackJsonp([4],{

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(869);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignUpPageModule = /** @class */ (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]),
            ],
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());

//# sourceMappingURL=sign-up.module.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(88);
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
            selector: 'page-land',template:/*ion-inline-start:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/land/land.html"*/'\n<ion-content padding style="background-color: rgb(2, 109, 158)" class="sign">\n \n  <div class="logo">\n    <h3>Biofits</h3>\n    <p>Fit bleiben!</p>\n    <img src="assets/img/logo.png"/>\n  </div>\n  <p class="note">Sport treiben und Gutscheine gewinnen</p>\n\n</ion-content>\n<ion-footer>\n  <button ion-button block color="color2" margin-bottom navPush=\'SignUpPage\'>Registrierung</button>\n  <button ion-button block color="light" navPush=\'SignInPage\'>Anmeldung</button>\n</ion-footer>\n'/*ion-inline-end:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/land/land.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], LandPage);
    return LandPage;
}());

//# sourceMappingURL=land.js.map

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__land_land__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_env_env__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_benutzer_benutzer__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, navParams, formBuilder, loadingController, alertProvider, envProvider, benutzerProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.alertProvider = alertProvider;
        this.envProvider = envProvider;
        this.benutzerProvider = benutzerProvider;
        this.usernameMinLength = 6;
        this.passwordMinLength = 8;
        this.passwordMaxLength = 20;
        this.firstnameMinLength = 2;
        this.lastnameMinLength = 2;
        this.error = false;
        this.signUpFormGroup = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            vorname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(this.firstnameMinLength)]],
            nachname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(this.lastnameMinLength)]],
            geburtsDatum: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            gewicht: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            geschlecht: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            groesse: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(this.passwordMinLength), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(this.passwordMaxLength)]],
            rePassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        }, {
            validator: this.checkPassword('password', 'rePassword')
        });
        this.email = this.signUpFormGroup.controls['email'];
        this.vorname = this.signUpFormGroup.controls['vorname'];
        this.nachname = this.signUpFormGroup.controls['nachname'];
        this.email = this.signUpFormGroup.controls['email'];
        this.password = this.signUpFormGroup.controls['password'];
        this.rePassword = this.signUpFormGroup.controls['rePassword'];
    }
    // go to another page
    SignUpPage.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page);
    };
    SignUpPage.prototype.signUp = function (signUpFormGroup) {
        var _this = this;
        this.loading = this.loadingController.create({ content: "Signing up, please wait..." });
        this.loading.present();
        var benutzerData = {
            email: signUpFormGroup.value.email,
            vorname: signUpFormGroup.value.vorname,
            nachname: signUpFormGroup.value.nachname,
            password: signUpFormGroup.value.password,
            geburtsDatum: signUpFormGroup.value.geburtsDatum,
            groesse: signUpFormGroup.value.groesse,
            gewicht: signUpFormGroup.value.gewicht,
            geschlecht: signUpFormGroup.value.geschlecht
        };
        this.benutzerProvider.save(benutzerData).subscribe(function (data) {
            _this.error = false;
            _this.loading.dismissAll();
            _this.alertProvider.longAlert('Sign up successful!\nCheck your email to activate your account!', true);
            _this.openPage(__WEBPACK_IMPORTED_MODULE_4__land_land__["a" /* LandPage */]);
        }, function (error) {
            _this.error = true;
            _this.errorMessage = _this.getErrorMessage(error);
            _this.loading.dismissAll();
            _this.alertProvider.middleAlert('Sign up failed', false);
        });
    };
    SignUpPage.prototype.checkPassword = function (password, rePassword) {
        return function (frm) {
            var passwordValue = frm.get(password).value;
            var rePasswordValue = frm.get(rePassword).value;
            if (passwordValue !== '' && passwordValue !== rePasswordValue) {
                return { 'notMatch': "value " + passwordValue + " is not equal to " + rePasswordValue };
            }
            return null;
        };
    };
    SignUpPage.prototype.getErrorMessage = function (error) {
        var messageParts = error.message.split(':');
        if (messageParts.length <= 0) {
            return '';
        }
        if (messageParts.length == 3) {
            return messageParts[2].trim();
        }
        if (messageParts.length == 1) {
            return messageParts[0].trim();
        }
        return error.message.trim();
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/sign-up/sign-up.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: rgb(2, 109, 158)" class="sign">\n  <div class="logo">\n    <h3>Biofits</h3>\n    <p>Fit bleiben!</p>\n  </div>\n  <ion-label *ngIf="error">{{ errorMessage }}</ion-label>\n  <form [formGroup]="signUpFormGroup" (ngSubmit)="signUp(signUpFormGroup)">\n    <div class="appForm" margin-bottom>\n      <ion-list>\n        <ion-label *ngIf="(vorname.hasError(\'minlength\') || vorname.hasError(\'maxlength\')) && vorname.touched"> Der\n          Vorname muss mindestens {{ firstnameMinLength }} lang sein.</ion-label>\n        <ion-item\n          [style.border-left]="(vorname.hasError(\'required\') || vorname.hasError(\'minlength\')) && vorname.touched ? \'3px solid brown\' : \'3px solid #122a10\'">\n          <ion-icon name="md-person" item-left></ion-icon>\n          <ion-input formControlName="vorname"  type="text" placeholder="Vorname"></ion-input>\n        </ion-item>\n\n        <ion-item\n          [style.border-left]="(nachname.hasError(\'required\') || nachname.hasError(\'minlength\')) && nachname.touched ? \'3px solid brown\' : \'3px solid #122a10\'">\n          <ion-label *ngIf="(nachname.hasError(\'minlength\') || nachname.hasError(\'maxlength\')) && nachname.touched"> Der\n            Nachname muss mindestens {{ lastnameMinLength }} Zeichen lang sein.</ion-label>\n          <ion-icon name="md-person" item-left></ion-icon>\n          <ion-input formControlName="nachname"  type="text" placeholder="Nachname"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="calendar" item-left></ion-icon>\n          <ion-input formControlName="geburtsDatum"  type="date" placeholder="Geburtsdatum"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-select formControlName="geschlecht"  name="transgender" okText="Zustimmen" placeholder="Geschlecht" cancelText="Abbrechen" item-left>\n            <ion-option value="m">Männlich</ion-option>\n            <ion-option value="f">Weiblich</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="resize" item-left></ion-icon>\n          <ion-input formControlName="groesse" type="number" placeholder="Größe in Centimeter"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="body" item-left></ion-icon>\n          <ion-input formControlName="gewicht"  type="number" placeholder="Gewicht in Kilogram"></ion-input>\n        </ion-item>\n\n        <ion-item\n          [style.border-left]="email.hasError(\'required\') && email.touched ? \'3px solid brown\' : \'3px solid #122a10\'">\n          <ion-icon name="ios-mail-outline" item-left></ion-icon>\n          <ion-input formControlName="email"  type="email" placeholder="Mail"></ion-input>\n        </ion-item>\n\n        <ion-label *ngIf="(password.hasError(\'minlength\') || password.hasError(\'maxlength\')) && password.touched">Das\n          Passwort muss mindestens {{ passwordMinLength }} und höchstens {{ passwordMaxLength }} sein.</ion-label>\n        <ion-item\n          [style.border-left]="(password.hasError(\'required\') || password.hasError(\'minlength\') || password.hasError(\'maxlength\')) && password.touched ? \'3px solid brown\' : \'3px solid #122a10\'">\n          <ion-icon name="ios-lock-outline" item-left></ion-icon>\n          <ion-input formControlName="password" type="password" placeholder="Passwort"></ion-input>\n        </ion-item>\n\n        <ion-item\n          [style.border-left]="rePassword.hasError(\'required\') && rePassword.touched ? \'3px solid brown\' : \'3px solid #122a10\'">\n          <ion-icon name="ios-lock-outline" item-left></ion-icon>\n          <ion-input formControlName="rePassword" type="password" placeholder="Passwort bestätigen"></ion-input>\n        </ion-item>\n      </ion-list>\n    </div>\n    <button ion-button block color="color2" type="submit" [disabled]="!signUpFormGroup.valid" margin-top>Registrierung</button>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/sign-up/sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_env_env__["a" /* EnvProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_benutzer_benutzer__["a" /* BenutzerProvider */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ })

});
//# sourceMappingURL=4.js.map