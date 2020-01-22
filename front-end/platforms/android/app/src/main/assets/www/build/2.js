webpackJsonp([2],{

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonDetailsPageModule", function() { return LessonDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lesson_details__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(711);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LessonDetailsPageModule = /** @class */ (function () {
    function LessonDetailsPageModule() {
    }
    LessonDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lesson_details__["a" /* LessonDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lesson_details__["a" /* LessonDetailsPage */]), __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
        })
    ], LessonDetailsPageModule);
    return LessonDetailsPageModule;
}());

//# sourceMappingURL=lesson-details.module.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RATING_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2Rating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);


var noop = function () {
};
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* forwardRef */])(function () { return Ionic2Rating; }),
    multi: true
};
var Ionic2Rating = (function () {
    function Ionic2Rating() {
        this._max = 5;
        this._readOnly = false;
        this._emptyStarIconName = 'star-outline';
        this._halfStarIconName = 'star-half';
        this._starIconName = 'star';
        this._nullable = false;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(Ionic2Rating.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (val) {
            this._max = this.getNumberPropertyValue(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "readOnly", {
        get: function () {
            return this._readOnly;
        },
        set: function (val) {
            this._readOnly = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "emptyStarIconName", {
        get: function () {
            return this._emptyStarIconName;
        },
        set: function (val) {
            this._emptyStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "halfStarIconName", {
        get: function () {
            return this._halfStarIconName;
        },
        set: function (val) {
            this._halfStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "starIconName", {
        get: function () {
            return this._starIconName;
        },
        set: function (val) {
            this._starIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "nullable", {
        get: function () {
            return this._nullable;
        },
        set: function (val) {
            this._nullable = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.ngOnInit = function () {
        // ngFor needs an array
        this.starIndexes = Array(this.max).fill(1).map(function (x, i) { return i; });
    };
    Ionic2Rating.prototype.getStarIconName = function (starIndex) {
        if (this.value === undefined) {
            return this.emptyStarIconName;
        }
        if (this.value > starIndex) {
            if (this.value < starIndex + 1) {
                return this.halfStarIconName;
            }
            else {
                return this.starIconName;
            }
        }
        else {
            return this.emptyStarIconName;
        }
    };
    Object.defineProperty(Ionic2Rating.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            if (value !== this.innerValue) {
                this.innerValue = value;
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    Ionic2Rating.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    Ionic2Rating.prototype.registerOnTouched = function (fn) {
    };
    Ionic2Rating.prototype.onKeyDown = function (event) {
        if (/(37|38|39|40)/.test(event.which)) {
            event.preventDefault();
            event.stopPropagation();
            var newValue = this.value + ((event.which == 38 || event.which == 39) ? 1 : -1);
            return this.rate(newValue);
        }
    };
    Ionic2Rating.prototype.rate = function (value) {
        if (this.readOnly || value < 0 || value > this.max) {
            return;
        }
        if (value === this.value && this.nullable) {
            value = null;
        }
        this.value = value;
    };
    Ionic2Rating.prototype.isTrueProperty = function (val) {
        if (typeof val === 'string') {
            val = val.toLowerCase().trim();
            return (val === 'true' || val === 'on');
        }
        return !!val;
    };
    Ionic2Rating.prototype.getNumberPropertyValue = function (val) {
        if (typeof val === 'string') {
            return parseInt(val.trim());
        }
        return val;
    };
    Ionic2Rating.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'rating',
                    styles: ["\n    ul.rating li {\n      display: inline;\n      border: 0px;\n      background: none;\n      padding: 5px 10px;\n    }\n    ul.rating li i {\n      font-size: 30px;\n    }\n  "],
                    template: "\n    <ul class=\"rating\" (keydown)=\"onKeyDown($event)\">\n      <li *ngFor=\"let starIndex of starIndexes\" tappable (click)=\"rate(starIndex + 1)\">\n        <ion-icon [name]=\"getStarIconName(starIndex)\">\n        </ion-icon>\n      </li>\n    </ul>",
                    providers: [RATING_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    Ionic2Rating.ctorParameters = [];
    Ionic2Rating.propDecorators = {
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'readOnly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'emptyStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'halfStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'starIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'nullable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    };
    return Ionic2Rating;
}());
//# sourceMappingURL=ionic2-rating.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic2_rating_module__ = __webpack_require__(712);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ionic2_rating_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic2_rating__ = __webpack_require__(709);
/* unused harmony reexport Ionic2Rating */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2RatingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__ = __webpack_require__(709);




var Ionic2RatingModule = (function () {
    function Ionic2RatingModule() {
    }
    Ionic2RatingModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__["a" /* Ionic2Rating */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__["a" /* Ionic2Rating */]
                    ],
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */]
                    ],
                    schemas: [
                        __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]
                    ]
                },] },
    ];
    /** @nocollapse */
    Ionic2RatingModule.ctorParameters = [];
    return Ionic2RatingModule;
}());
//# sourceMappingURL=ionic2-rating.module.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonDetailsPage; });
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


var LessonDetailsPage = /** @class */ (function () {
    function LessonDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rate = '0';
        this.contains = ["Photoshop", "in Desgin", "HTML", "CSS", "Dreamwaver"];
        // bookmark function
        this.bookmark_Click = false;
        // click heart btn
        this.clicked_heart = false;
        this.heart_color = "color4";
    }
    LessonDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LessonDetailsPage');
    };
    LessonDetailsPage.prototype.bookmark = function () {
        this.bookmark_Click = (this.bookmark_Click == false) ? true : false;
        console.log(this.bookmark_Click);
    };
    LessonDetailsPage.prototype.click_like = function () {
        if (this.clicked_heart == false) {
            this.clicked_heart = true;
            this.heart_color = "danger";
        }
        else {
            this.clicked_heart = false;
            this.heart_color = "color4";
        }
    };
    LessonDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-lesson-details',template:/*ion-inline-start:"/home/nganya/Documents/Myanga/dev/software/biofits/src/pages/lesson-details/lesson-details.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Web Design</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="imgBg" style="background-image:url(assets/img/cources/003.png)"></div>\n  <!-- grid for rating, like,share and course time-->\n  <ion-grid>\n    <ion-row>\n      <ion-col col-5>\n        <rating [(ngModel)]="rate" class="ratingGroup"  \n          readOnly="false" \n          max="5" \n          emptyStarIconName="ios-star-outline" \n          starIconName="ios-star" \n          nullable="false" \n          ></rating>\n      </ion-col>\n        <ion-col col-2  >\n          <button ion-button icon-only class="like_btn" margin-auto (click)="click_like()">\n            <ion-icon name="md-heart" [color]="heart_color"></ion-icon>  \n          </button>\n        </ion-col>\n        <ion-col col-2 >\n          <ion-fab margin-auto>\n            <button ion-fab><ion-icon name="md-share" color="color4"></ion-icon></button>\n            <ion-fab-list side="top">\n              <button ion-fab color="faceColor"><ion-icon name="logo-facebook"></ion-icon></button>\n              <button ion-fab color="twitterColor"><ion-icon name="logo-twitter"></ion-icon></button>\n              <button ion-fab color="googleColor"><ion-icon name="logo-googleplus"></ion-icon></button>\n            </ion-fab-list>\n          </ion-fab>\n        </ion-col>\n        <ion-col col-3>\n          <ion-icon name="md-time" color="color2"></ion-icon>\n          <p>120h</p>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n    <!-- course Details -->\n  <div class="details">\n    <h5>Description</h5>\n    <p>\n      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n    </p>\n    <!-- list of cours contain -->\n    <ion-list class="course_list">\n      <ion-list-header>\n        Course Contain\n      </ion-list-header>\n      <ion-item *ngFor="let item of contains">\n        <p>{{item}}</p>\n      </ion-item>\n    </ion-list>\n    <!-- period time -->\n    <p class="period">\n      <span>Course Period</span>\n      From 1 Oct., to 30 NOV., 2017 .\n    </p>\n    <!-- course Cost -->\n    <p>\n      <span>Cost : </span>\n      5000$\n    </p>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button block color="color1" navPush=\'CheckOutPage\'>Reserve</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button block color="color1" (click)="bookmark()" class="mark_btn" >\n          <ion-icon name="ios-star" [ngClass]="{\'active\':bookmark_Click==true}" ></ion-icon>\n          Bookmark\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/home/nganya/Documents/Myanga/dev/software/biofits/src/pages/lesson-details/lesson-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], LessonDetailsPage);
    return LessonDetailsPage;
}());

//# sourceMappingURL=lesson-details.js.map

/***/ })

});
//# sourceMappingURL=2.js.map