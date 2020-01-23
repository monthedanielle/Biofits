webpackJsonp([3],{

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailsPageModule", function() { return NewsDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_details__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(352);
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
                __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__["a" /* NgCircleProgressModule */].forRoot({
                    // set defaults here
                    radius: 100,
                    outerStrokeWidth: 16,
                    innerStrokeWidth: 8,
                    outerStrokeColor: "#78C000",
                    innerStrokeColor: "#C7E596",
                    animationDuration: 300
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], NewsDetailsPageModule);
    return NewsDetailsPageModule;
}());

//# sourceMappingURL=news-details.module.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sport_art_sport_art__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
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
    function NewsDetailsPage(navCtrl, navParams, sportArtProvider, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sportArtProvider = sportArtProvider;
        this.geolocation = geolocation;
        this.click_mark = false;
        this.show_comment = false;
        this.sportArt = {};
        this.started = false;
        this.currentActivity = {};
        this.execution = {};
        this.batchSize = 50;
        this.actualPosition = {
            latitude: 0.0,
            longitude: 0.0
        };
        this.positions = [];
        this.distanz = 0;
        this.ziel = -1;
        this.percentage = 0;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.actualPosition = {
                latitude: resp.coords.latitude,
                longitude: resp.coords.longitude
            };
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        this.sportArtId = this.navParams.get('id');
        this.sportArtProvider.get(this.sportArtId).subscribe(function (sportArt) {
            _this.sportArt = sportArt;
        });
        this.userId = localStorage.getItem('userId');
        this.sportArtProvider.current(this.userId, this.sportArtId).subscribe(function (currentActivity) {
            _this.currentActivity = currentActivity;
            _this.distanz = Math.round(currentActivity.distanz);
            _this.ziel = Math.round(currentActivity.ziel);
            _this.percentage = Math.round(100 * _this.distanz / _this.ziel);
        });
    }
    NewsDetailsPage.prototype.ionViewDidLoad = function () {
    };
    NewsDetailsPage.prototype.start = function () {
        var _this = this;
        this.started = !this.started;
        this.execution = __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].interval(1000).subscribe(function (val) {
            _this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (resp) {
                _this.positions.push({
                    lastLatitude: _this.actualPosition.latitude,
                    lastLongitude: _this.actualPosition.longitude,
                    latitude: resp.coords.latitude,
                    longitude: resp.coords.longitude,
                    datum: resp.timestamp
                });
                _this.actualPosition = {
                    latitude: resp.coords.latitude,
                    longitude: resp.coords.longitude
                };
            }).catch(function (error) {
                console.log('Error getting location', error);
            });
            console.log(_this.positions);
            if (_this.positions.length >= _this.batchSize) {
                _this.sportArtProvider.createSnapshot(_this.userId, _this.sportArtId, _this.positions).subscribe(function (response) {
                    console.log(response);
                }, function (error) {
                    console.log(error);
                });
                _this.positions = [];
            }
        });
        this.userId = localStorage.getItem('userId');
        this.sportArtProvider.current(this.userId, this.sportArtId).subscribe(function (currentActivity) {
            _this.currentActivity = currentActivity;
            _this.distanz = Math.round(currentActivity.distanz);
            _this.ziel = Math.round(currentActivity.ziel);
            _this.percentage = Math.round(100 * _this.distanz / _this.ziel);
        });
    };
    NewsDetailsPage.prototype.stop = function () {
        var _this = this;
        this.started = !this.started;
        this.execution.unsubscribe();
        if (this.positions.length > 0) {
            this.sportArtProvider.createSnapshot(this.userId, this.sportArtId, this.positions).subscribe(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });
            this.positions = [];
        }
        this.sportArtProvider.stop(this.userId, this.sportArtId).subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
        this.userId = localStorage.getItem('userId');
        this.sportArtProvider.current(this.userId, this.sportArtId).subscribe(function (currentActivity) {
            _this.distanz = Math.round(currentActivity.distanz);
            _this.ziel = Math.round(currentActivity.ziel);
            _this.percentage = Math.round(100 * _this.distanz / _this.ziel);
        });
    };
    NewsDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-news-details',template:/*ion-inline-start:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/news-details/news-details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Details</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="details_img" [ngStyle]="{\'background-image\': sportArt.picture}">\n    <ion-item>\n      <h4>{{ sportArt.name }}</h4>\n    </ion-item>\n  </div>\n\n  <!-- details -->\n  <div class="details">\n    <p class="description">\n      {{ sportArt.description }}\n    </p>\n    <div class="comments">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>Ziel: {{ distanz }} / {{ ziel }} Meters</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <circle-progress [percent]="percentage" [radius]="100" [outerStrokeWidth]="16" [innerStrokeWidth]="8"\n            [outerStrokeColor]="\'#78C000\'" [innerStrokeColor]="\'#C7E596\'" [animation]="true" [animationDuration]="300">\n          </circle-progress>\n        </ion-card-content>\n      </ion-card>\n      <button ion-button block *ngIf="!started " color="secondary" margin-top (click)="start()">Starten</button>\n      <button ion-button block *ngIf="started " color="color2" margin-top (click)="stop()">Stoppen</button>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/nganya/Documents/programming/biofits/github/Biofits/front-end/src/pages/news-details/news-details.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_sport_art_sport_art__["a" /* SportArtProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_sport_art_sport_art__["a" /* SportArtProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _d || Object])
    ], NewsDetailsPage);
    return NewsDetailsPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=news-details.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgCircleProgressModule; });
/* unused harmony export CircleProgressOptions */
/* unused harmony export CircleProgressComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);




var CircleProgressOptions = (function () {
    function CircleProgressOptions() {
        this.class = '';
        this.backgroundColor = 'transparent';
        this.backgroundOpacity = 1;
        this.backgroundStroke = 'transparent';
        this.backgroundStrokeWidth = 0;
        this.backgroundPadding = 5;
        this.percent = 0;
        this.radius = 90;
        this.space = 4;
        this.toFixed = 0;
        this.maxPercent = 1000;
        this.renderOnClick = true;
        this.units = '%';
        this.unitsFontSize = '10';
        this.unitsColor = '#444444';
        this.outerStrokeWidth = 8;
        this.outerStrokeColor = '#78C000';
        this.outerStrokeLinecap = 'round';
        this.innerStrokeColor = '#C7E596';
        this.innerStrokeWidth = 4;
        this.titleFormat = undefined;
        this.title = 'auto';
        this.titleColor = '#444444';
        this.titleFontSize = '20';
        this.subtitleFormat = undefined;
        this.subtitle = 'progress';
        this.subtitleColor = '#A9A9A9';
        this.subtitleFontSize = '10';
        this.animation = true;
        this.animateTitle = true;
        this.animateSubtitle = false;
        this.animationDuration = 500;
        this.showTitle = true;
        this.showSubtitle = true;
        this.showUnits = true;
        this.showBackground = true;
        this.showInnerStroke = true;
        this.clockwise = true;
        this.responsive = false;
    }
    return CircleProgressOptions;
}());
var CircleProgressComponent = (function () {
    /**
     * @param {?} defaultOptions
     */
    function CircleProgressComponent(defaultOptions) {
        var _this = this;
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.options = new CircleProgressOptions();
        this.defaultOptions = new CircleProgressOptions();
        this.applyOptions = function () {
            // the options of <circle-progress> may change already
            for (var _i = 0, _a = Object.keys(_this.options); _i < _a.length; _i++) {
                var name_1 = _a[_i];
                if (_this.hasOwnProperty(name_1) && _this[name_1] !== undefined) {
                    _this.options[name_1] = _this[name_1];
                }
                else if (_this.templateOptions && _this.templateOptions[name_1] !== undefined) {
                    _this.options[name_1] = _this.templateOptions[name_1];
                }
            }
            // make sure key options valid
            _this.options.radius = Math.abs(+_this.options.radius);
            _this.options.space = +_this.options.space;
            _this.options.percent = Math.abs(+_this.options.percent);
            _this.options.maxPercent = Math.abs(+_this.options.maxPercent);
            _this.options.animationDuration = Math.abs(_this.options.animationDuration);
            _this.options.outerStrokeWidth = Math.abs(+_this.options.outerStrokeWidth);
            _this.options.innerStrokeWidth = Math.abs(+_this.options.innerStrokeWidth);
            _this.options.backgroundPadding = +_this.options.backgroundPadding;
        };
        this.render = function () {
            _this.applyOptions();
            if (_this.options.animation && _this.options.animationDuration > 0) {
                _this.animate();
            }
            else {
                _this.draw(_this.options.percent);
            }
        };
        this.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
            var /** @type {?} */ angleInRadius = angleInDegrees * Math.PI / 180;
            var /** @type {?} */ x = centerX + Math.sin(angleInRadius) * radius;
            var /** @type {?} */ y = centerY - Math.cos(angleInRadius) * radius;
            return { x: x, y: y };
        };
        this.draw = function (percent) {
            // make percent reasonable
            percent = (percent === undefined) ? _this.options.percent : Math.abs(percent);
            // circle percent shouldn't be greater than 100%.
            var /** @type {?} */ circlePercent = (percent > 100) ? 100 : percent;
            // determine box size
            var /** @type {?} */ boxSize = _this.options.radius * 2 + _this.options.outerStrokeWidth * 2;
            if (_this.options.showBackground) {
                boxSize += (_this.options.backgroundStrokeWidth * 2 + _this.max(0, _this.options.backgroundPadding * 2));
            }
            // the centre of the circle
            var /** @type {?} */ centre = { x: boxSize / 2, y: boxSize / 2 };
            // the start point of the arc
            var /** @type {?} */ startPoint = { x: centre.x, y: centre.y - _this.options.radius };
            // get the end point of the arc
            var /** @type {?} */ endPoint = _this.polarToCartesian(centre.x, centre.y, _this.options.radius, 360 * (_this.options.clockwise ? circlePercent : (100 - circlePercent)) / 100); // ####################
            // We'll get an end point with the same [x, y] as the start point when percent is 100%, so move x a little bit.
            if (circlePercent === 100) {
                endPoint.x = endPoint.x + (_this.options.clockwise ? -0.01 : +0.01);
            }
            // largeArcFlag and sweepFlag
            var /** @type {?} */ largeArcFlag, /** @type {?} */ sweepFlag;
            if (circlePercent > 50) {
                _a = _this.options.clockwise ? [1, 1] : [1, 0], largeArcFlag = _a[0], sweepFlag = _a[1];
            }
            else {
                _b = _this.options.clockwise ? [0, 1] : [0, 0], largeArcFlag = _b[0], sweepFlag = _b[1];
            }
            // percent may not equal the actual percent
            var /** @type {?} */ titlePercent = _this.options.animateTitle ? percent : _this.options.percent;
            var /** @type {?} */ titleTextPercent = titlePercent > _this.options.maxPercent ?
                _this.options.maxPercent.toFixed(_this.options.toFixed) + "+" : titlePercent.toFixed(_this.options.toFixed);
            var /** @type {?} */ subtitlePercent = _this.options.animateSubtitle ? percent : _this.options.percent;
            // get title object
            var /** @type {?} */ title = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: _this.options.titleColor,
                fontSize: _this.options.titleFontSize,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both title and titleFormat(...) may be an array of string.
            if (_this.options.titleFormat !== undefined && _this.options.titleFormat.constructor.name === 'Function') {
                var /** @type {?} */ formatted = _this.options.titleFormat(titlePercent);
                if (formatted instanceof Array) {
                    title.texts = formatted.slice();
                }
                else {
                    title.texts.push(formatted.toString());
                }
            }
            else {
                if (_this.options.title === 'auto') {
                    title.texts.push(titleTextPercent);
                }
                else {
                    if (_this.options.title instanceof Array) {
                        title.texts = _this.options.title.slice();
                    }
                    else {
                        title.texts.push(_this.options.title.toString());
                    }
                }
            }
            // get subtitle object
            var /** @type {?} */ subtitle = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: _this.options.subtitleColor,
                fontSize: _this.options.subtitleFontSize,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both subtitle and subtitleFormat(...) may be an array of string.
            if (_this.options.subtitleFormat !== undefined && _this.options.subtitleFormat.constructor.name === 'Function') {
                var /** @type {?} */ formatted = _this.options.subtitleFormat(subtitlePercent);
                if (formatted instanceof Array) {
                    subtitle.texts = formatted.slice();
                }
                else {
                    subtitle.texts.push(formatted.toString());
                }
            }
            else {
                if (_this.options.subtitle instanceof Array) {
                    subtitle.texts = _this.options.subtitle.slice();
                }
                else {
                    subtitle.texts.push(_this.options.subtitle.toString());
                }
            }
            // get units object
            var /** @type {?} */ units = {
                text: "" + _this.options.units,
                fontSize: _this.options.unitsFontSize,
                color: _this.options.unitsColor
            };
            // get total count of text lines to be shown
            var /** @type {?} */ rowCount = 0, /** @type {?} */ rowNum = 1;
            _this.options.showTitle && (rowCount += title.texts.length);
            _this.options.showSubtitle && (rowCount += subtitle.texts.length);
            // calc dy for each tspan for title
            if (_this.options.showTitle) {
                for (var _i = 0, _c = title.texts; _i < _c.length; _i++) {
                    var span = _c[_i];
                    title.tspans.push({ span: span, dy: _this.getRelativeY(rowNum, rowCount) });
                    rowNum++;
                }
            }
            // calc dy for each tspan for subtitle
            if (_this.options.showSubtitle) {
                for (var _d = 0, _e = subtitle.texts; _d < _e.length; _d++) {
                    var span = _e[_d];
                    subtitle.tspans.push({ span: span, dy: _this.getRelativeY(rowNum, rowCount) });
                    rowNum++;
                }
            }
            // Bring it all together
            _this.svg = {
                viewBox: "0 0 " + boxSize + " " + boxSize,
                // Set both width and height to '100%' if it's responsive
                width: _this.options.responsive ? '100%' : boxSize,
                height: _this.options.responsive ? '100%' : boxSize,
                backgroundCircle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: _this.options.radius + _this.options.outerStrokeWidth / 2 + _this.options.backgroundPadding,
                    fill: _this.options.backgroundColor,
                    fillOpacity: _this.options.backgroundOpacity,
                    stroke: _this.options.backgroundStroke,
                    strokeWidth: _this.options.backgroundStrokeWidth,
                },
                path: {
                    // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
                    d: "M " + startPoint.x + " " + startPoint.y + " \n        A " + _this.options.radius + " " + _this.options.radius + " 0 " + largeArcFlag + " " + sweepFlag + " " + endPoint.x + " " + endPoint.y,
                    stroke: _this.options.outerStrokeColor,
                    strokeWidth: _this.options.outerStrokeWidth,
                    strokeLinecap: _this.options.outerStrokeLinecap,
                    fill: 'none'
                },
                circle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: _this.options.radius - _this.options.space - _this.options.outerStrokeWidth / 2 - _this.options.innerStrokeWidth / 2,
                    fill: 'none',
                    stroke: _this.options.innerStrokeColor,
                    strokeWidth: _this.options.innerStrokeWidth,
                },
                title: title,
                units: units,
                subtitle: subtitle,
            };
            var _a, _b;
        };
        this.getRelativeY = function (rowNum, rowCount) {
            // why '-0.18em'? It's a magic number when property 'alignment-baseline' equals 'baseline'. :)
            var /** @type {?} */ initialOffset = -0.18, /** @type {?} */ offset = 1;
            return (initialOffset + offset * (rowNum - rowCount / 2)).toFixed(2) + 'em';
        };
        this.min = function (a, b) {
            return a < b ? a : b;
        };
        this.max = function (a, b) {
            return a > b ? a : b;
        };
        this.getAnimationParameters = function () {
            var /** @type {?} */ MIN_INTERVAL = 10;
            var /** @type {?} */ times, /** @type {?} */ step, /** @type {?} */ interval;
            if (_this.options.percent >= 100) {
                // we will finish animation in 100 times
                times = 100;
                if (!_this.options.animateTitle && !_this.options.animateSubtitle) {
                    step = 1;
                }
                else {
                    // show title or subtitle animation even if the arc is full, we also need to finish it in 100 times.
                    step = Math.round(_this.min(_this.options.percent, _this.options.maxPercent) / times);
                }
            }
            else {
                // we will finish in as many times as the number of percent.
                times = _this.options.percent;
                step = 1;
            }
            // Get the interval of timer
            interval = Math.round(_this.options.animationDuration / times);
            // Readjust all values if the interval of timer is extremely small.
            if (interval < MIN_INTERVAL) {
                interval = MIN_INTERVAL;
                times = _this.options.animationDuration / interval;
                if (!_this.options.animateTitle && !_this.options.animateSubtitle && _this.options.percent > 100) {
                    step = Math.round(100 / times);
                }
                else {
                    step = Math.round(_this.min(_this.options.percent, _this.options.maxPercent) / times);
                }
            }
            // step must be greater than 0.
            if (step < 1) {
                step = 1;
            }
            return { times: times, step: step, interval: interval };
        };
        this.animate = function () {
            if (_this._timerSubscription && !_this._timerSubscription.closed) {
                _this._timerSubscription.unsubscribe();
            }
            var _a = _this.getAnimationParameters(), step = _a.step, interval = _a.interval;
            var /** @type {?} */ count = 0;
            _this._timerSubscription = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].timer(0, interval).subscribe(function () {
                count += step;
                if (count <= _this.options.percent) {
                    if (!_this.options.animateTitle && !_this.options.animateSubtitle && count >= 100) {
                        _this.draw(_this.options.percent);
                        _this._timerSubscription.unsubscribe();
                    }
                    else {
                        _this.draw(count);
                    }
                }
                else {
                    _this.draw(_this.options.percent);
                    _this._timerSubscription.unsubscribe();
                }
            });
        };
        this.emitClickEvent = function (event) {
            if (_this.options.renderOnClick) {
                _this.animate();
            }
            _this.onClick.emit(event);
        };
        Object.assign(this.options, defaultOptions);
        Object.assign(this.defaultOptions, defaultOptions);
    }
    /**
     * @return {?}
     */
    CircleProgressComponent.prototype.isDrawing = function () {
        return (this._timerSubscription && !this._timerSubscription.closed) ? true : false;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CircleProgressComponent.prototype.ngOnChanges = function (changes) {
        this.render();
    };
    return CircleProgressComponent;
}());
CircleProgressComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'circle-progress',
                template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"svg\" \n      [attr.viewBox]=\"svg.viewBox\" preserveAspectRatio=\"xMidYMid meet\"\n      [attr.height]=\"svg.height\" [attr.width]=\"svg.width\" (click)=\"emitClickEvent($event)\" [attr.class]=\"options.class\">\n      <circle *ngIf=\"options.showBackground\" \n        [attr.cx]=\"svg.backgroundCircle.cx\" \n        [attr.cy]=\"svg.backgroundCircle.cy\" \n        [attr.r]=\"svg.backgroundCircle.r\" \n        [attr.fill]=\"svg.backgroundCircle.fill\"\n        [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n        [attr.stroke]=\"svg.backgroundCircle.stroke\" \n        [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n      <circle *ngIf=\"options.showInnerStroke\" \n        [attr.cx]=\"svg.circle.cx\" \n        [attr.cy]=\"svg.circle.cy\" \n        [attr.r]=\"svg.circle.r\" \n        [attr.fill]=\"svg.circle.fill\"\n        [attr.stroke]=\"svg.circle.stroke\" \n        [attr.stroke-width]=\"svg.circle.strokeWidth\"/>\n      <path \n        [attr.d]=\"svg.path.d\" \n        [attr.stroke]=\"svg.path.stroke\"\n        [attr.stroke-width]=\"svg.path.strokeWidth\" \n        [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n        [attr.fill]=\"svg.path.fill\"/>\n      <text *ngIf=\"options.showTitle || options.showUnits || options.showSubtitle\" \n        alignment-baseline=\"baseline\"\n        [attr.x]=\"svg.circle.cx\"\n        [attr.y]=\"svg.circle.cy\"\n        [attr.text-anchor]=\"svg.title.textAnchor\">\n        <ng-container *ngIf=\"options.showTitle\">\n          <tspan *ngFor=\"let tspan of svg.title.tspans\"\n            [attr.x]=\"svg.title.x\"\n            [attr.y]=\"svg.title.y\"\n            [attr.dy]=\"tspan.dy\"\n            [attr.font-size]=\"svg.title.fontSize\" \n            [attr.fill]=\"svg.title.color\">{{tspan.span}}</tspan>\n        </ng-container>\n        <tspan *ngIf=\"options.showUnits\"\n          [attr.font-size]=\"svg.units.fontSize\"\n          [attr.fill]=\"svg.units.color\">{{svg.units.text}}</tspan>\n        <ng-container *ngIf=\"options.showSubtitle\">\n          <tspan *ngFor=\"let tspan of svg.subtitle.tspans\"\n            [attr.x]=\"svg.subtitle.x\"\n            [attr.y]=\"svg.subtitle.y\"\n            [attr.dy]=\"tspan.dy\"\n            [attr.font-size]=\"svg.subtitle.fontSize\"\n            [attr.fill]=\"svg.subtitle.color\">{{tspan.span}}</tspan>\n        </ng-container>\n      </text>\n    </svg>  \n  "
            },] },
];
/**
 * @nocollapse
 */
CircleProgressComponent.ctorParameters = function () { return [
    { type: CircleProgressOptions, },
]; };
CircleProgressComponent.propDecorators = {
    'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    'class': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'backgroundColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'backgroundOpacity': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'backgroundStroke': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'backgroundStrokeWidth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'backgroundPadding': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'radius': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'space': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'percent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'toFixed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'maxPercent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'renderOnClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'units': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'unitsFontSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'unitsColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'outerStrokeWidth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'outerStrokeColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'outerStrokeLinecap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'innerStrokeColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'innerStrokeWidth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'titleFormat': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'titleColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'titleFontSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'subtitleFormat': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'subtitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'subtitleColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'subtitleFontSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'animation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'animateTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'animateSubtitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'animationDuration': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'showTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'showSubtitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'showUnits': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'showBackground': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'showInnerStroke': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'clockwise': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'responsive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'templateOptions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['options',] },],
};

var NgCircleProgressModule = (function () {
    function NgCircleProgressModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    NgCircleProgressModule.forRoot = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: NgCircleProgressModule,
            providers: [
                { provide: CircleProgressOptions, useValue: options }
            ]
        };
    };
    return NgCircleProgressModule;
}());
NgCircleProgressModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
                ],
                declarations: [
                    CircleProgressComponent,
                ],
                exports: [
                    CircleProgressComponent,
                ]
            },] },
];
/**
 * @nocollapse
 */
NgCircleProgressModule.ctorParameters = function () { return []; };




/***/ })

});
//# sourceMappingURL=3.js.map