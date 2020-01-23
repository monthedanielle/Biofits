webpackJsonp([8],{

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(865);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_benutzer_benutzer__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_env_env__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_string_utils_string_utils__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, actionSheetCtrl, camera, benutzerProvider, alertProvider, formBuilder, envProvider, loadingController, stringUtilsProvider, authProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.benutzerProvider = benutzerProvider;
        this.alertProvider = alertProvider;
        this.formBuilder = formBuilder;
        this.envProvider = envProvider;
        this.loadingController = loadingController;
        this.stringUtilsProvider = stringUtilsProvider;
        this.authProvider = authProvider;
        this.name = "Adam G Smith";
        this.current_job = "Assistant Professor of Science";
        this.email = "Adam.g@gmail.com";
        this.address = "2 Floor,Building 4";
        this.phone = "91234 56789";
        this.code = '1';
        this.password = "123456789";
        this.jobs = "Assistant Professor of Science 2011 \n,Professor of Physics 2009 \n,Assistant Professor of Science 2011 \n,Professor of Physics 2009";
        this.flag = true;
        this.btn_text = 'Update';
        this.btn_color = "color1";
        this.img = 'assets/img/profile.png';
        this.firstnameMinLength = 2;
        this.lastnameMinLength = 2;
        this.benutzer = {};
        this.loading = this.loadingController.create({ content: "Loading, please wait..." });
        this.loading.present();
        this.benutzerFormGroup = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            vorname: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(this.firstnameMinLength)]],
            nachname: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(this.lastnameMinLength)]],
            geburtsDatum: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            gewicht: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            geschlecht: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            groesse: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]]
        });
        // get benutzer
        this.benutzerProvider.get(localStorage.getItem('userId')).subscribe(function (benutzer) {
            _this.benutzer = benutzer;
            _this.benutzerId = benutzer.id;
            _this.benutzerFormGroup = _this.formBuilder.group({
                email: [_this.stringUtilsProvider.capitalize(benutzer.email), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
                vorname: [_this.stringUtilsProvider.capitalize(benutzer.vorname), [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(_this.firstnameMinLength)]],
                nachname: [_this.stringUtilsProvider.capitalize(benutzer.nachname), [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(_this.lastnameMinLength)]],
                gewicht: [benutzer.gewicht, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
                geschlecht: [benutzer.geschlecht, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
                groesse: [benutzer.groesse, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
                geburtsDatum: [_this.convertDate(benutzer.geburtsDatum, 0)]
            });
            _this.loading.dismissAll();
        }, function (error) {
            _this.alertProvider.middleAlert(error.message, true);
            _this.loading.dismissAll();
        });
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
    };
    ProfilePage.prototype.update = function () {
        var _this = this;
        if (this.flag == false) {
            this.flag = true;
            this.btn_text = "Update";
            this.btn_color = "color1";
            this.loading = this.loadingController.create({ content: "Please wait..." });
            this.loading.present();
            var benutzerData = {
                email: this.benutzerFormGroup.value.email,
                vorname: this.benutzerFormGroup.value.vorname,
                nachname: this.benutzerFormGroup.value.nachname,
                password: this.benutzerFormGroup.value.password,
                groesse: this.benutzerFormGroup.value.groesse,
                gewicht: this.benutzerFormGroup.value.gewicht,
                geschlecht: this.benutzerFormGroup.value.geschlecht,
                geburtsDatum: new Date()
            };
            this.benutzerProvider.update(localStorage.getItem('userId'), benutzerData).subscribe(function (data) {
                _this.loading.dismissAll();
                _this.alertProvider.longAlert('Daten aktualisiert!', true);
            }, function (error) {
                _this.loading.dismissAll();
                _this.alertProvider.middleAlert('Aktualisierung ist fehlgeschlagen.', false);
            });
        }
        else {
            this.flag = false;
            this.btn_text = "Save";
            this.btn_color = "color2";
        }
    };
    ProfilePage.prototype.ionViewCanEnter = function () {
        return this.authProvider.authenticated();
    };
    // gallery 
    // ActionSheet for change user picture
    ProfilePage.prototype.selectImage = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your Picture',
            buttons: [
                {
                    text: 'Gallery',
                    handler: function () { _this.get_camera(1); }
                }, {
                    text: 'Camera',
                    handler: function () { _this.get_camera(2); }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        actionSheet.present();
    };
    ProfilePage.prototype.get_camera = function (source) {
        var _this = this;
        var options = {
            quality: 100, destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG, mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true, targetWidth: 512, targetHeight: 512, correctOrientation: true
        };
        if (source == 1) {
            options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
        }
        else {
            options.sourceType = this.camera.PictureSourceType.CAMERA;
        }
        this.camera.getPicture(options).then(function (imageData) {
            _this.img = 'data:image/jpeg;base64,' + imageData;
        }, function (err) { });
    };
    ProfilePage.prototype.convertDate = function (date, addDays) {
        var convertedDate = new Date(date);
        convertedDate.setDate(convertedDate.getDate() + addDays);
        return convertedDate.toISOString().substring(0, 10);
    };
    ProfilePage.prototype.compare = function (o1, o2) {
        return o1 === o2;
    };
    // go to another page
    ProfilePage.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page);
    };
    ProfilePage.prototype.getErrorMessage = function (error) {
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
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name="ios-menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n    <ion-buttons end>\n      <button ion-button navPush="NotificationsPage" class="notification_Btn">\n        <ion-icon name="ios-notifications"></ion-icon>\n        <ion-badge color="danger">2</ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="benutzerFormGroup">\n    <div class="profile_info">\n      <div class="profile_img" [ngStyle]="{\'background-image\':\'url(\' + img + \')\'}">\n        <ion-icon name="ios-camera" color="light" *ngIf="flag == false" (click)="selectImage()"></ion-icon>\n      </div>\n      <h5>{{ benutzer.vorname }} {{ benutzer.nachname }}</h5>\n      <h5>{{ benutzer.email }}</h5>\n    </div>\n    <div class="appForm" [ngClass]="{\'animate\':flag == false}">\n      <ion-list>\n        <ion-item>\n          <ion-icon name="md-person" item-left></ion-icon>\n          <ion-input formControlName="vorname" disabled="{{flag}}" type="text" placeholder="Vorname"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="md-person" item-left></ion-icon>\n          <ion-input formControlName="nachname" disabled="{{flag}}" type="text" placeholder="Nachname"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="ios-mail" item-left></ion-icon>\n          <ion-input formControlName="email" disabled="{{flag}}" type="email" placeholder="Your E-mail"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-item>\n            <ion-select formControlName="geschlecht" name="transgender" okText="Zustimmen" placeholder="Geschlecht" cancelText="Abbrechen" item-left>\n              <ion-option value="m" selected>Männlich</ion-option>\n              <ion-option value="f">Weiblich</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="resize" item-left></ion-icon>\n          <ion-input formControlName="groesse" placeholder="Größe in Centimeter" value="173 Cm"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="body" item-left></ion-icon>\n          <ion-input formControlName="gewicht" placeholder="Gewicht in Kilogram" value="75 Kg"></ion-input>\n        </ion-item>\n\n      </ion-list>\n    </div>\n  </form>\n</ion-content>\n<ion-footer>\n  <button ion-button block [color]="btn_color" (click)="update()">{{btn_text}}</button>\n</ion-footer>'/*ion-inline-end:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__providers_benutzer_benutzer__["a" /* BenutzerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__providers_env_env__["a" /* EnvProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_string_utils_string_utils__["a" /* StringUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__["a" /* AuthProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=8.js.map