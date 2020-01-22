webpackJsonp([25],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__env_env__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert_alert__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__benutzer_benutzer__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http, envProvider, alertProvider, app, benutzerProvider) {
        this.http = http;
        this.envProvider = envProvider;
        this.alertProvider = alertProvider;
        this.app = app;
        this.benutzerProvider = benutzerProvider;
        this.actualUser = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["BehaviorSubject"](null);
    }
    AuthProvider_1 = AuthProvider;
    AuthProvider.prototype.login = function (username, password) {
        var _this = this;
        var body = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('grant_type', 'password').set('username', username).set('password', password);
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(this.envProvider.SYSTEM_CLIENT + ':' + this.envProvider.SYSTEM_PASSWORD)
            })
        };
        return this.http.post(this.envProvider.LOGIN_URL, body.toString(), options).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (token) {
            _this.cleanup();
            var accessToken = token.access_token;
            var tokenType = token.token_type;
            AuthProvider_1.token = token;
            AuthProvider_1.accessToken = token['access_token'];
            AuthProvider_1.expiresIn = token['expires_in'];
            localStorage.setItem('access_token', accessToken);
            localStorage.setItem('token_type', tokenType);
            localStorage.setItem('isLoggedIn', 'true');
            AuthProvider_1.isLoggedIn = true;
            AuthProvider_1.loggedInAt = new Date();
            _this.currentUser().subscribe(function (currentUser) {
                var email = currentUser.principal.username;
                _this.benutzerProvider.getByEmail(email).subscribe(function (domainUser) {
                    localStorage.setItem('userId', domainUser.id);
                    localStorage.setItem('username', currentUser.principal.username);
                }, function (error) {
                });
            }, function (error) {
                console.log('Could not get current user.', error);
            });
            return token;
        }));
    };
    AuthProvider.prototype.logout = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            Authorization: 'Bearer ' + localStorage.getItem('access_token')
        });
        return this.http.delete(this.envProvider.LOGOUT_URL, { headers: headers }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (data) {
            _this.cleanup();
            return data;
        })).subscribe(function (result) {
            _this.actualUser.next(null);
            _this.alertProvider.shortAlert('Sign out successful', false);
            _this.app.getRootNav().setRoot('LandPage');
        }, function (error) {
            _this.alertProvider.shortAlert('There was an error during the sign out: ' + error.message, true);
        });
    };
    AuthProvider.prototype.currentUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            Authorization: 'Bearer ' + localStorage.getItem('access_token')
        });
        return this.http.get(this.envProvider.CURRENT_USER, { headers: headers });
    };
    AuthProvider.prototype.cleanup = function () {
        localStorage.clear();
        AuthProvider_1.isLoggedIn = false;
        delete AuthProvider_1.token;
        delete AuthProvider_1.accessToken;
        delete AuthProvider_1.expiresIn;
        delete AuthProvider_1.loggedInAt;
    };
    AuthProvider.prototype.authenticated = function () {
        try {
            return Boolean(JSON.parse(localStorage.getItem('isLoggedIn')));
        }
        catch (e) {
            return false;
        }
    };
    AuthProvider.isLoggedIn = false;
    AuthProvider = AuthProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__env_env__["a" /* EnvProvider */],
            __WEBPACK_IMPORTED_MODULE_5__alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_7__benutzer_benutzer__["a" /* BenutzerProvider */]])
    ], AuthProvider);
    return AuthProvider;
    var AuthProvider_1;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
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


/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AlertProvider = /** @class */ (function () {
    function AlertProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    AlertProvider_1 = AlertProvider;
    AlertProvider.prototype.shortAlert = function (message, closable) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: AlertProvider_1.SHORT_ALERT_TIME,
            showCloseButton: closable,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    AlertProvider.prototype.middleAlert = function (message, closable) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: AlertProvider_1.MIDDLE_ALERT_TIME,
            showCloseButton: closable,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    AlertProvider.prototype.longAlert = function (message, closable) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: AlertProvider_1.LONG_ALERT_TIME,
            showCloseButton: closable,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    AlertProvider.SHORT_ALERT_TIME = 2000;
    AlertProvider.MIDDLE_ALERT_TIME = 4000;
    AlertProvider.LONG_ALERT_TIME = 8000;
    AlertProvider = AlertProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], AlertProvider);
    return AlertProvider;
    var AlertProvider_1;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BenutzerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__env_env__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_strings__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the BenutzerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BenutzerProvider = /** @class */ (function () {
    function BenutzerProvider(http, envProvider) {
        this.http = http;
        this.envProvider = envProvider;
    }
    BenutzerProvider.prototype.save = function (benutzer) {
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.envProvider.BENUTZER_PATH, benutzer, options);
    };
    BenutzerProvider.prototype.update = function (id, benutzer) {
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access_token')
            })
        };
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__utils_strings__["a" /* Strings */].format(this.envProvider.BENUTZER_ITEM, id), benutzer, options);
    };
    BenutzerProvider.prototype.getByEmail = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            Authorization: 'Bearer ' + localStorage.getItem('access_token')
        });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__utils_strings__["a" /* Strings */].format(this.envProvider.BENUTZER_BY_EMAIL, email), { headers: headers });
    };
    BenutzerProvider.prototype.get = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            Authorization: 'Bearer ' + localStorage.getItem('access_token')
        });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__utils_strings__["a" /* Strings */].format(this.envProvider.BENUTZER_ITEM, id), { headers: headers });
    };
    BenutzerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__env_env__["a" /* EnvProvider */]])
    ], BenutzerProvider);
    return BenutzerProvider;
}());

//# sourceMappingURL=benutzer.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/athletics/athletics.module": [
		683,
		24
	],
	"../pages/bookmarks/bookmarks.module": [
		684,
		23
	],
	"../pages/check-out/check-out.module": [
		685,
		22
	],
	"../pages/courses/courses.module": [
		686,
		0
	],
	"../pages/dining-halls/dining-halls.module": [
		687,
		21
	],
	"../pages/dining-location/dining-location.module": [
		688,
		20
	],
	"../pages/event-details/event-details.module": [
		689,
		19
	],
	"../pages/events/events.module": [
		690,
		18
	],
	"../pages/home/home.module": [
		691,
		17
	],
	"../pages/land/land.module": [
		692,
		16
	],
	"../pages/lesson-details/lesson-details.module": [
		693,
		2
	],
	"../pages/lessons/lessons.module": [
		696,
		1
	],
	"../pages/map/map.module": [
		694,
		15
	],
	"../pages/meals/meals.module": [
		695,
		14
	],
	"../pages/news-details/news-details.module": [
		697,
		3
	],
	"../pages/news/news.module": [
		698,
		13
	],
	"../pages/notifications/notifications.module": [
		699,
		12
	],
	"../pages/password/password.module": [
		700,
		11
	],
	"../pages/people-details/people-details.module": [
		701,
		10
	],
	"../pages/people/people.module": [
		702,
		9
	],
	"../pages/profile/profile.module": [
		703,
		8
	],
	"../pages/schedule/schedule.module": [
		704,
		7
	],
	"../pages/setting/setting.module": [
		705,
		6
	],
	"../pages/sign-in/sign-in.module": [
		706,
		5
	],
	"../pages/sign-up/sign-up.module": [
		707,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Strings; });
var Strings = /** @class */ (function () {
    function Strings() {
    }
    Strings.format = function (str) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        if (str === null) {
            return str;
        }
        else {
            var strCpy = str;
            var nbParam = parameters.length;
            for (var i = 0; i < nbParam; i++) {
                strCpy = strCpy.replace('{' + i + '}', parameters[i]);
            }
            return strCpy;
        }
    };
    return Strings;
}());

//# sourceMappingURL=strings.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SportArtProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__env_env__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_strings__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SportArtProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SportArtProvider = /** @class */ (function () {
    function SportArtProvider(http, envProvider) {
        this.http = http;
        this.envProvider = envProvider;
    }
    SportArtProvider.prototype.list = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            Authorization: 'Bearer ' + localStorage.getItem('access_token')
        });
        return this.http.get(this.envProvider.SPORT_ART_PATH, { headers: headers });
    };
    SportArtProvider.prototype.get = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            Authorization: 'Bearer ' + localStorage.getItem('access_token')
        });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__utils_strings__["a" /* Strings */].format(this.envProvider.SPORT_ART_ITEM, id), { headers: headers });
    };
    SportArtProvider.prototype.current = function (benutzerId, sportArtId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            Authorization: 'Bearer ' + localStorage.getItem('access_token')
        });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__utils_strings__["a" /* Strings */].format(this.envProvider.CURRENT_AKTIVITAET, benutzerId, sportArtId), {}, { headers: headers });
    };
    SportArtProvider.prototype.createSnapshot = function (benutzerId, sportArtId, snapshots) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            Authorization: 'Bearer ' + localStorage.getItem('access_token')
        });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__utils_strings__["a" /* Strings */].format(this.envProvider.SNAPSHOT_AKTIVITAET, benutzerId, sportArtId), snapshots, { headers: headers });
    };
    SportArtProvider.prototype.stop = function (benutzerId, sportArtId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            Authorization: 'Bearer ' + localStorage.getItem('access_token')
        });
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__utils_strings__["a" /* Strings */].format(this.envProvider.STOP_AKTIVITAET, benutzerId, sportArtId), {}, { headers: headers });
    };
    SportArtProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__env_env__["a" /* EnvProvider */]])
    ], SportArtProvider);
    return SportArtProvider;
}());

//# sourceMappingURL=sport-art.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringUtilsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the StringUtilsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StringUtilsProvider = /** @class */ (function () {
    function StringUtilsProvider(http) {
        this.http = http;
    }
    StringUtilsProvider.format = function (str) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        if (str === null) {
            return str;
        }
        else {
            var strCpy = str;
            var nbParam = parameters.length;
            for (var i = 0; i < nbParam; i++) {
                strCpy = strCpy.replace('{' + i + '}', parameters[i]);
            }
            return strCpy;
        }
    };
    StringUtilsProvider.prototype.capitalize = function (value, args) {
        if (value && value != null) {
            var valueArray = value.split(" ");
            for (var i = 0; i < valueArray.length; i++) {
                valueArray[i] = valueArray[i].charAt(0).toUpperCase() + valueArray[i].slice(1);
                ;
            }
            return valueArray.join(' ');
        }
        return value;
    };
    StringUtilsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], StringUtilsProvider);
    return StringUtilsProvider;
}());

//# sourceMappingURL=string-utils.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, authProvider) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.authProvider = authProvider;
        this.animateVarible = false;
        this.rootPage = 'LandPage';
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: 'HomePage', img: 'assets/img/menu/001.png', icon: '' },
            { title: 'Dashboard', component: 'CoursesPage', img: 'assets/img/home/003.png', icon: '' },
            { title: 'Tipps', component: 'EventsPage', img: 'assets/img/home/004.png', icon: '' },
            { title: 'Aktivitäten', component: 'NewsPage', img: 'assets/img/home/008.png', icon: '' },
            { title: 'Profile', component: 'ProfilePage', img: 'assets/img/home/010.png', icon: '' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page);
    };
    MyApp.prototype.logout = function () {
        this.authProvider.logout();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/app/app.html"*/'<ion-menu [content]="content" swipeEnabled="false" type="overlay">\n  <ion-content>\n    <ion-list>\n      <ion-item menuClose  *ngFor="let p of pages" (click)="openPage(p.component)">\n        <img src="{{p.img}}" item-left width="14px" *ngIf="p.img!=\'\'">\n        <ion-icon name="{{p.icon}}" color="color2" *ngIf="p.img==\'\'" item-left></ion-icon>\n        <p>{{p.title}}</p>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n  <ion-footer>\n    <button ion-button clear  menuClose  (click)="logout()">Log out</button>\n  </ion-footer>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" [class.animateApp]="animateVarible==true"></ion-nav>'/*ion-inline-end:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_benutzer_benutzer__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_env_env__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_string_utils_string_utils__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_sport_art_sport_art__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var config = {
    backButtonText: '',
    backButtonIcon: 'ios-arrow-back',
    iconMode: 'ios',
    mode: 'ios',
    modalEnter: 'modal-slide-in',
    modalLeave: 'modal-slide-out',
    pageTransition: 'ios',
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], config, {
                    links: [
                        { loadChildren: '../pages/athletics/athletics.module#AthleticsPageModule', name: 'AthleticsPage', segment: 'athletics', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bookmarks/bookmarks.module#BookmarksPageModule', name: 'BookmarksPage', segment: 'bookmarks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/check-out/check-out.module#CheckOutPageModule', name: 'CheckOutPage', segment: 'check-out', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/courses/courses.module#CoursesPageModule', name: 'CoursesPage', segment: 'courses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dining-halls/dining-halls.module#DiningHallsPageModule', name: 'DiningHallsPage', segment: 'dining-halls', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dining-location/dining-location.module#DiningLocationPageModule', name: 'DiningLocationPage', segment: 'dining-location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-details/event-details.module#EventDetailsPageModule', name: 'EventDetailsPage', segment: 'event-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/land/land.module#LandPageModule', name: 'LandPage', segment: 'land', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lesson-details/lesson-details.module#LessonDetailsPageModule', name: 'LessonDetailsPage', segment: 'lesson-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meals/meals.module#MealsPageModule', name: 'MealsPage', segment: 'meals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lessons/lessons.module#LessonsPageModule', name: 'LessonsPage', segment: 'lessons', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news-details/news-details.module#NewsDetailsPageModule', name: 'NewsDetailsPage', segment: 'news-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password/password.module#PasswordPageModule', name: 'PasswordPage', segment: 'password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/people-details/people-details.module#PeopleDetailsPageModule', name: 'PeopleDetailsPage', segment: 'people-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/people/people.module#PeoplePageModule', name: 'PeoplePage', segment: 'people', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedule/schedule.module#SchedulePageModule', name: 'SchedulePage', segment: 'schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_benutzer_benutzer__["a" /* BenutzerProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_env_env__["a" /* EnvProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__["a" /* AlertProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_string_utils_string_utils__["a" /* StringUtilsProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_sport_art_sport_art__["a" /* SportArtProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the EnvProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EnvProvider = /** @class */ (function () {
    function EnvProvider() {
        this.SYSTEM_CLIENT = 'biofits';
        this.SYSTEM_PASSWORD = 'biofits';
        this.HOST = 'http://81.169.225.224:8080';
        this.LOGIN_URL = this.HOST + '/oauth/token';
        this.LOGOUT_URL = this.HOST + '/tokens/revoke';
        this.BENUTZER_PATH = this.HOST + '/benutzer';
        this.BENUTZER_ITEM = this.BENUTZER_PATH + '/{0}';
        this.BENUTZER_BY_EMAIL = this.HOST + '/benutzer/by-email/{0}/';
        this.CURRENT_USER = this.HOST + '/current-benutzer';
        this.SPORT_ART_PATH = this.HOST + '/sport-arten';
        this.SPORT_ART_ITEM = this.SPORT_ART_PATH + '/{0}';
        this.SNAPSHOT_AKTIVITAET = this.BENUTZER_ITEM + '/aktivitaeten/sport-art/{1}/snapshots';
        this.STOP_AKTIVITAET = this.BENUTZER_ITEM + '/aktivitaeten/sport-art/{1}/stop';
        this.CURRENT_AKTIVITAET = this.BENUTZER_ITEM + '/aktivitaeten/sport-art/{1}/current';
        this.LANGUAGES = [
            {
                id: 'en',
                name: 'English'
            },
            {
                id: 'fr',
                name: 'Français'
            },
            {
                id: 'de',
                name: 'Deutsch'
            }
        ];
    }
    EnvProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EnvProvider);
    return EnvProvider;
}());

//# sourceMappingURL=env.js.map

/***/ })

},[354]);
//# sourceMappingURL=main.js.map