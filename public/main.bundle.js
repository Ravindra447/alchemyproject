webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n\n<div class=\"container\">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_prev_booking_pipe__ = __webpack_require__("./src/app/pipes/prev-booking.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__search_form_search_form_component__ = __webpack_require__("./src/app/search-form/search-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__previous_booking_previous_booking_component__ = __webpack_require__("./src/app/previous-booking/previous-booking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__gallery_gallery_component__ = __webpack_require__("./src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__download_app_download_app_component__ = __webpack_require__("./src/app/download-app/download-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__bangalore_bangalore_component__ = __webpack_require__("./src/app/bangalore/bangalore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__mumbai_mumbai_component__ = __webpack_require__("./src/app/mumbai/mumbai.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__hyderabad_hyderabad_component__ = __webpack_require__("./src/app/hyderabad/hyderabad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__chennai_chennai_component__ = __webpack_require__("./src/app/chennai/chennai.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ncr_ncr_component__ = __webpack_require__("./src/app/ncr/ncr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pune_pune_component__ = __webpack_require__("./src/app/pune/pune.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__available_rooms_available_rooms_component__ = __webpack_require__("./src/app/available-rooms/available-rooms.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__search_form_search_form_component__["a" /* SearchFormComponent */],
                __WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__previous_booking_previous_booking_component__["a" /* PreviousBookingComponent */],
                __WEBPACK_IMPORTED_MODULE_17__gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_18__download_app_download_app_component__["a" /* DownloadAppComponent */],
                __WEBPACK_IMPORTED_MODULE_19__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_20__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_21__bangalore_bangalore_component__["a" /* BangaloreComponent */],
                __WEBPACK_IMPORTED_MODULE_22__mumbai_mumbai_component__["a" /* MumbaiComponent */],
                __WEBPACK_IMPORTED_MODULE_23__hyderabad_hyderabad_component__["a" /* HyderabadComponent */],
                __WEBPACK_IMPORTED_MODULE_24__chennai_chennai_component__["a" /* ChennaiComponent */],
                __WEBPACK_IMPORTED_MODULE_25__ncr_ncr_component__["a" /* NcrComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pune_pune_component__["a" /* PuneComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_prev_booking_pipe__["a" /* PrevBookingPipe */],
                __WEBPACK_IMPORTED_MODULE_27__available_rooms_available_rooms_component__["a" /* AvailableRoomsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */] },
                    { path: 'availability', component: __WEBPACK_IMPORTED_MODULE_14__search_form_search_form_component__["a" /* SearchFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'previous-booking', component: __WEBPACK_IMPORTED_MODULE_16__previous_booking_previous_booking_component__["a" /* PreviousBookingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_17__gallery_gallery_component__["a" /* GalleryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'download-app', component: __WEBPACK_IMPORTED_MODULE_18__download_app_download_app_component__["a" /* DownloadAppComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_19__register_register_component__["a" /* RegisterComponent */] },
                    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_20__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'bangalore', component: __WEBPACK_IMPORTED_MODULE_21__bangalore_bangalore_component__["a" /* BangaloreComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'mumbai', component: __WEBPACK_IMPORTED_MODULE_22__mumbai_mumbai_component__["a" /* MumbaiComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'hyderabad', component: __WEBPACK_IMPORTED_MODULE_23__hyderabad_hyderabad_component__["a" /* HyderabadComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'chennai', component: __WEBPACK_IMPORTED_MODULE_24__chennai_chennai_component__["a" /* ChennaiComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'ncr', component: __WEBPACK_IMPORTED_MODULE_25__ncr_ncr_component__["a" /* NcrComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'pune', component: __WEBPACK_IMPORTED_MODULE_26__pune_pune_component__["a" /* PuneComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'available', component: __WEBPACK_IMPORTED_MODULE_27__available_rooms_available_rooms_component__["a" /* AvailableRoomsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/available-rooms/available-rooms.component.css":
/***/ (function(module, exports) {

module.exports = "#available{\n\tbackground: white;\n  \tborder: 0.5px solid lightgray;\n  \theight: 300px;\n  \twidth: 100%;\n  \tmargin:30px 0px 0px 0px;\n}"

/***/ }),

/***/ "./src/app/available-rooms/available-rooms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n\t<div class=\"row\">\n\t\t<div class=\"col-12\" id=\"available\">\n\t\t\t<div class=\"col-6\">\n\t\t\t\t<!-- <div>\n\t\t\t\t\t<img src=\"http://localhost:5000/static/DSC01606-1-300x169.jpg\" alt=\"\" width=\"70%\"  height=\"100%\">\n\t\t\t\t</div> -->\n\t\t\t</div>\n\t\t\t<div class=\"col-6\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/available-rooms/available-rooms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailableRoomsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AvailableRoomsComponent = /** @class */ (function () {
    function AvailableRoomsComponent() {
    }
    AvailableRoomsComponent.prototype.ngOnInit = function () {
    };
    AvailableRoomsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-available-rooms',
            template: __webpack_require__("./src/app/available-rooms/available-rooms.component.html"),
            styles: [__webpack_require__("./src/app/available-rooms/available-rooms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AvailableRoomsComponent);
    return AvailableRoomsComponent;
}());



/***/ }),

/***/ "./src/app/bangalore/bangalore.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bangalore/bangalore.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\" style=\" padding-bottom: 30px;\">Bangalore</h2>\n\n<div class=\"container\">\n  <div class=\"row margin_bottom\">\n    <div class=\"col-md-6\">\n      <img src=\"../../assets/images/map/Bangalore/Bangalore E.City.JPG\" alt=\"\" class=\"img-responsive\" style=\"max-width: 550px;\">\n    </div>\n    <div class=\"col-md-6 \">\n      <div class=\"margin_left\">\n        <h5>\n          ALCHEMY SOLUTIONS ELECTRONIC CITY\n        </h5>\n        <p>Alchemy Solutions\n          <br> No.9, Opposite Infosys Gate 3\n          <br>Konnappa Agrahara\n          <br>1st Phase Electronics City\n          <br>Bangalore – 560100</p>\n\n        <h5>Contact Person</h5>\n        <p>Saji - +919535074579\n          <br>Email panday.almazsolutions@gmail.com</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row margin_bottom\">\n    <div class=\"col-md-6\">\n      <div class=\"margin_left\">\n        <h5>\n          ALCHEMY SOLUTIONS KORAMANGALA - CROWN TOWERS\n        </h5>\n        <p>Alchemy Solutions (ALMAZ 3)\n\n          <br># 984, 80ft Main Road,\n          <br>ST Bed Area, 4th Block,\n          <br>Koramangala,\n          <br>Bangalore – 560034</p>\n\n        <h5>CONTACT PERSON</h5>\n        <p>Mr.Pandey – +91 9980369689\n          <br>Email panday.almazsolutions@gmail.com</p>\n      </div>\n    </div>\n    <div class=\"col-md-6 \">\n      <img src=\"../../assets/images/map/Bangalore/Bangalore Koramangala Crown Towers.JPG\" alt=\"\" class=\"img-responsive\" style=\"max-width: 550px;\">\n    </div>\n  </div>\n\n  <div class=\"row margin_bottom\">\n    <div class=\"col-md-6\">\n      <img src=\"../../assets/images/map/Bangalore/Bangalore Koramangala sony world.JPG\" alt=\"\" class=\"img-responsive\" style=\"max-width: 550px;\">\n    </div>\n    <div class=\"col-md-6 \">\n      <div class=\"margin_left\">\n        <h5>\n          ALCHEMY SOLUTIONS KORAMANGALA – NEAR SONY WORLD\n        </h5>\n        <p>Alchemy Solutions (ALMAZ 4)\n          <br>#564, 6TH F CROSS 17TH A MAIN\n          <br>KORMANGALA,\n          <br>BANGALORE-560034</p>\n\n        <h5>CONTACT PERSON</h5>\n        <p>Mr.Pandey – +91 9980369689\n          <br>Email panday.almazsolutions@gmail.com</p>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row margin_bottom\">\n    <div class=\"col-md-6\">\n      <div class=\"margin_left\">\n        <h5>\n          ALCHEMY SOLUTIONS DOMLUR KRISHNA REDDY LAYOUT\n        </h5>\n\n        <p>Alchemy Solutions (ALMAZ 2)\n          <br>No. 13, Gurukripa Mansion,\n          <br>Krishnareddy Layout,\n          <br>Next to Camo Software\n          <br>Domlur. Bangalore – 560071</p>\n\n        <h5>CONTACT PERSON</h5>\n        <p>Ms.Zita : Ph. No: 8073718766\n          <br>Ramdas Panday +919980369685\n          <br>Email zita.almazsolutions@gmail.com</p>\n\n      </div>\n    </div>\n    <div class=\"col-md-6 \">\n      <img src=\"../../assets/images/map/Bangalore/Bangalore Domlur.JPG\" alt=\"\" class=\"img-responsive\" style=\"max-width: 550px;\">\n    </div>\n  </div>\n  <div class=\"row margin_bottom\">\n    <div class=\"col-md-6\">\n      <img src=\"../../assets/images/map/Bangalore/Bangalore ITPL.JPG\" alt=\"\" class=\"img-responsive\" style=\"max-width: 550px;\">\n    </div>\n    <div class=\"col-md-6 \">\n      <div class=\"margin_left\">\n        <h5>\n          ALCHEMY SOLUTIONS, ITPL\n        </h5>\n\n        <p>Alchemy Solutions (Whitefield)\n          <br>Raj Pinnacle, Plot No.7F\n          <br>4th Floor, 6th Cross, Near Graphite India Signal\n          <br>Behind RXDX Hospital\n          <br>Bangalore – 560048</p>\n\n        <h5>CONTACT PERSON</h5>\n        <p>Rakesh Panday: 9916684454\n          <br>Naresh: 9060222233\n          <br>Email panday.almazsolutions@gmail.com</p>\n\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/bangalore/bangalore.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BangaloreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BangaloreComponent = /** @class */ (function () {
    function BangaloreComponent() {
    }
    BangaloreComponent.prototype.ngOnInit = function () {
    };
    BangaloreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bangalore',
            template: __webpack_require__("./src/app/bangalore/bangalore.component.html"),
            styles: [__webpack_require__("./src/app/bangalore/bangalore.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BangaloreComponent);
    return BangaloreComponent;
}());



/***/ }),

/***/ "./src/app/chennai/chennai.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chennai/chennai.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\" style=\" padding-bottom: 30px;\">Chennai</h2>\n\n<div class=\"container\">\n  <div class=\"row margin_bottom\">\n    <div class=\"col-md-6\">\n      <img src=\"../../assets/images/map/Chennai/Chennai.JPG\" alt=\"\" class=\"img-responsive\" style=\"max-width: 550px;\">\n    </div>\n    <div class=\"col-md-6 \">\n      <div class=\"margin_left\">\n        <h5>\n          ALCHEMY SOLUTIONS INFRASTRUCTURE – CHENNAI\n        </h5>\n\n        <p>Alchemy Solutions (3 Edge Solutions)\n          <br># 1, Whites Road, TANSI Building IInd.\n          <br>Floor, Royapettah, Chennai – 600014</p>\n\n        <h5>CONTACT PERSON</h5>\n        <p>Suresh: 9840517008\n          <br>System Divakar: 90947 97605</p>\n\n      </div>\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/chennai/chennai.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChennaiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChennaiComponent = /** @class */ (function () {
    function ChennaiComponent() {
    }
    ChennaiComponent.prototype.ngOnInit = function () {
    };
    ChennaiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chennai',
            template: __webpack_require__("./src/app/chennai/chennai.component.html"),
            styles: [__webpack_require__("./src/app/chennai/chennai.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChennaiComponent);
    return ChennaiComponent;
}());



/***/ }),

/***/ "./src/app/download-app/download-app.component.css":
/***/ (function(module, exports) {

module.exports = ".aligncenter{\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n}\n\n"

/***/ }),

/***/ "./src/app/download-app/download-app.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\" style=\"padding-bottom: 60px; padding-top: 40px;\">Download App</h2>\n\n<div class=\"container \">\n  <div class=\"row \">\n    <div class=\"col-md-6 \">\n      <a href=\"https://search.itunes.apple.com/WebObjects/MZContentLink.woa/wa/link?mt=8&amp;path=appstore\" target=\"_blank\" rel=\"noopener\">\n        <img class=\"aligncenter img-responsive\" src=\"../../assets/images/download-appstore-300x91.png\" alt=\"\" width=\"300\" height=\"91\"\n        />\n      </a>\n    </div>\n    <div class=\"col-md-6 \">\n      <a href=\"https://play.google.com/store?utm_source=apac_Med&utm_medium=hasem&utm_content=Nov0617&utm_campaign=Evergreen&pcampaignid=MKT-DR-apac-in-1003227-Med-hasem-py-Evergreen-Nov0617-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700012164778770_creativeid_113397194705_device_c&gclid=EAIaIQobChMI0r-Rt_7o2gIVWBmPCh154wJ7EAAYASAAEgL6avD_BwE&gclsrc=aw.ds&dclid=CIDym7n-6NoCFQ1mjgod51wBjA\"\n        target=\"_blank\" rel=\"noopener\">\n        <img class=\"aligncenter img-responsive\" src=\"../../assets/images/android-app-on-google-play-300x103.jpg\" alt=\"\" width=\"300\"\n          height=\"91\" />\n      </a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/download-app/download-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DownloadAppComponent = /** @class */ (function () {
    function DownloadAppComponent() {
    }
    DownloadAppComponent.prototype.ngOnInit = function () {
    };
    DownloadAppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-download-app',
            template: __webpack_require__("./src/app/download-app/download-app.component.html"),
            styles: [__webpack_require__("./src/app/download-app/download-app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DownloadAppComponent);
    return DownloadAppComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/***/ (function(module, exports) {

module.exports = ".margin_bottom {\n    margin-bottom: 50px;\n}\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\" style=\"padding-bottom: 60px; padding-top: 40px;\"> Gallery</h2>\n<div class=\"container \" style=\"padding-bottom: 30\">\n  <div class=\"row \">\n    <div class=\"col-md-4 margin_bottom\">\n      <img class=\"img-responsive\" src=\"../../assets/images/Alchemy-_-Training-room-_-Mumbai-300x225.jpg\" alt=\"\">\n    </div>\n    <div class=\"col-md-4 margin_bottom \">\n      <img class=\"img-responsive\" src=\"../../assets/images/Alchemy-Training-Room_-HYD-300x225.jpg\" alt=\"\">\n    </div>\n    <div class=\"col-md-4 margin_bottom\">\n      <img class=\"img-responsive\" src=\"../../assets/images/DSC02299-1-300x225.jpg\" alt=\"\">\n    </div>\n    <div class=\"col-md-4 margin_bottom\">\n      <img class=\"img-responsive\" src=\"../../assets/images/DSC02299-300x225.jpg\" alt=\"\">\n    </div>\n    <div class=\"col-md-4 margin_bottom\">\n      <img class=\"img-responsive\" src=\"../../assets/images/Lab2-300x225.jpg\" alt=\"\">\n    </div>\n    <div class=\"col-md-4 margin_bottom\">\n      <img class=\"img-responsive\" src=\"../../assets/images/Training-Room2-a-300x200.jpg\" alt=\"\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__("./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__("./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/hyderabad/hyderabad.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hyderabad/hyderabad.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\" style=\" padding-bottom: 30px;\">Hyderabad</h2>\n\n<div class=\"container\">\n  <div class=\"row margin_bottom\">\n    <div class=\"col-md-6\">\n      <img src=\"../../assets/images/map/Hyderabad/Hyderabad.JPG\" alt=\"\" class=\"img-responsive\" style=\"max-width: 550px;\">\n    </div>\n    <div class=\"col-md-6 \">\n      <div class=\"margin_left\">\n        <h5>\n          ALCHEMY SOLUTIONS INFRASTRUCTURE – HYDERABAD\n        </h5>\n\n        <p>Alchemy Solutions (ABRIDGE)\n          <br># 90-B-C-3-1, Near CHARMYS,\n          <br>Ganesh GHR & MSY Plaza,\n          <br>Vittal Rao Nagar, Madhapur,\n          <br>Hyderabad- 500081</p>\n\n        <h5>CONTACT PERSON</h5>\n        <p>Ranga: 9885034403\n          <br>Tirumal 8374787934</p>\n\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/hyderabad/hyderabad.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HyderabadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HyderabadComponent = /** @class */ (function () {
    function HyderabadComponent() {
    }
    HyderabadComponent.prototype.ngOnInit = function () {
    };
    HyderabadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hyderabad',
            template: __webpack_require__("./src/app/hyderabad/hyderabad.component.html"),
            styles: [__webpack_require__("./src/app/hyderabad/hyderabad.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HyderabadComponent);
    return HyderabadComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".form-signin {\n  width: 100%;\n  max-width: 330px;\n  margin: auto;\n  background-color: #f5f5f5;\n  padding-top: 25%;\n}\n\n\n.signin_logo{\n  margin-bottom: 35px;\n  margin-top: 20px;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\" padding-top: 50px\">\n  <div class=\"row sign_in_form\">\n    <div class=\"col-md-4\">\n\n    </div>\n    <div class=\"col-md-4\">\n      <form (submit)=\"onSubmitLogin()\" #f=\"ngForm\">\n        <img class=\"mx-auto d-block signin_logo\" src=\"../../assets/images/logo.png\" alt=\"logo\" style=\"padding-bottom: 40px;\">\n       \n        <div class=\"input-group mb-3\">\n          <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\" required email #emailref=\"ngModel\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" #passwordref=\"ngModel\" name=\"password\" placeholder=\"Password\"\n            required>\n        </div>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" >Login</button>\n\n      </form>\n    </div>\n    <div class=\"col-md-4\">\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessageService, validateService) {
        this.authService = authService;
        this.router = router;
        this.flashMessageService = flashMessageService;
        this.validateService = validateService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmitLogin = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        if (!this.validateService.validateLogin(user)) {
            //console.log('please fill all details');
            this.flashMessageService.show('please fill all details', { cssClass: 'alert-danger', timeOut: 10000 });
            return false;
        }
        this.authService.authenticateUser(user).subscribe(function (data) {
            _this.authService.storeUserData(data.token, data.user);
            _this.flashMessageService.show('You are now logged in', { cssClass: 'alert-success', timeout: 3000 });
            _this.router.navigate(['availability']);
        }, function () {
            _this.flashMessageService.show('Incorrect user id or password', { cssClass: 'alert-danger', timeout: 3000 });
            _this.router.navigate(['/']);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mumbai/mumbai.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mumbai/mumbai.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\" style=\" padding-bottom: 30px;\">Mumbai</h2>\n\n<div class=\"container\">\n  <div class=\"row margin_bottom\">\n    <div class=\"col-md-6\">\n      <img src=\"../../assets/images/map/Mumbai/Mumbai.JPG\" alt=\"\" class=\"img-responsive\" style=\"max-width: 550px;\">\n    </div>\n    <div class=\"col-md-6 \">\n      <div class=\"margin_left\">\n        <h5>\n          ALCHEMY SOLUTIONS INFRASTRUCTURE – MUMBAI\n        </h5>\n\n        <p>Alchemy Solutions (AURATECH)\n          <br>D-125, 126, 1st Floor, Kailash Vaibhav Complex,\n          <br>Opp Nagbaba Temple,\n          <br>Vikhroli ( West ),Mumbai – 400079</p>\n\n        <h5>CONTACT PERSON</h5>\n        <p>Arvind: 9833495119</p>\n\n      </div>\n    </div>\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/mumbai/mumbai.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MumbaiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MumbaiComponent = /** @class */ (function () {
    function MumbaiComponent() {
    }
    MumbaiComponent.prototype.ngOnInit = function () {
    };
    MumbaiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mumbai',
            template: __webpack_require__("./src/app/mumbai/mumbai.component.html"),
            styles: [__webpack_require__("./src/app/mumbai/mumbai.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MumbaiComponent);
    return MumbaiComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".custom_nav { \n  margin: 0 auto !important;\n}\n.navbar-light .navbar-nav .nav-link {\n    margin-left: 25px;\n    background-color: ;\n}\n.navbar-brand img {    \n    padding-left: 75px;\n}\n#dropdown01 {\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container1\" >\n  <div class=\"row\" >\n    <nav class=\"navbar navbar-expand-md  fixed-top\" style=\"background-color: #2F4F4F\">\n      <a class=\"navbar-brand\">\n        <img src=\"../../assets/images/logo.png\" alt=\"\">\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse \" id=\"navbarsExampleDefault\" >\n        <ul class=\"navbar-nav mr-auto custom_nav\">\n        \n\n        </ul>\n\n        <ul class=\"nav navbar-nav navbar-right\">\n       \n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item \">\n            <a class=\"nav-link  \" routerLink=\"/\">Login</a>\n          </li>\n          <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item \">\n            <a class=\"nav-link  \" routerLink=\"/register\">Register</a>\n          </li>\n            <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/availability\"> RoomAvailability\n            </a>\n          </li>\n          <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link\" *ngIf=\"authService.loggedIn()\" routerLink=\"previous-booking\"> PreviousBookings\n            </a>\n          </li>\n          <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/gallery\">Gallery</a>\n          </li>\n          <li *ngIf=\"authService.loggedIn()\" ngbDropdown class=\"nav-item dropdown \">\n            <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color: blue\">Locations</a>\n            <div ngbDropdownMenu class=\"dropdown-menu \" aria-labelledby=\"dropdown01\" style=\"background-color: lavender\">\n              <a class=\"dropdown-item\" routerLink=\"/bangalore\">Bangalore</a>\n              <a class=\"dropdown-item\" routerLink=\"/mumbai\">Mumbai</a>\n              <a class=\"dropdown-item\" routerLink=\"/hyderabad\">Hyderabad</a>\n              <a class=\"dropdown-item\" routerLink=\"/chennai\">Chennai</a>\n              <a class=\"dropdown-item\" routerLink=\"/ncr\">NCR</a>\n              <a class=\"dropdown-item\" routerLink=\"/pune\">Pune</a>\n            </div>\n          </li>\n          <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/download-app\">DownloadApp</a>\n          </li>\n          \n          \n      \n\n          <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link \" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n          </li>\n\n        </ul>\n      </div>\n    </nav>\n  </div>\n</div>\n\n\n<!-- /.container -->"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessageService) {
        this.authService = authService;
        this.router = router;
        this.flashMessageService = flashMessageService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessageService.show('You are now logged out', { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['/']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/ncr/ncr.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ncr/ncr.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\" style=\" padding-bottom: 30px;\">NCR</h2>\n\n<div class=\"container\">\n  <div class=\"row margin_bottom\">\n    <div class=\"col-md-6\">\n      <img src=\"../../assets/images/map/NCR/Gurgaon.JPG\" alt=\"\" class=\"img-responsive\" style=\"max-width: 550px;\">\n    </div>\n    <div class=\"col-md-6 \">\n      <div class=\"margin_left\">\n        <h5>\n          ALCHEMY SOLUTIONS INFRASTRUCTURE – GURGAON\n        </h5>\n\n        <p>TAI INFOTECH PVT. LTD. (Mockspaze)\n          <br>Unit 210, 2nd Floor, Tower- A,\n          <br>Spaze I-Tech Park, Sector -49, Sohna Road,\n          <br>Gurgaon, Haryana, India-122018</p>\n\n        <h5>CONTACT PERSON</h5>\n        <p>Dharmendra: 9266663114</p>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row margin_bottom\">\n    <div class=\"col-md-6\">\n      <div class=\"margin_left\">\n        <h5>\n          ALCHEMY SOLUTIONS INFRASTRUCTURE – NOIDA\n        </h5>\n\n        <p>Alchemy Solutions (TAI Noida)\n          <br>1st Floor, H-159, Sector-63,\n          <br>(Behind Haldiram), Noida-201301\n          <br>Nearest Metro Station- City Centre</p>\n\n        <h5>CONTACT PERSON</h5>\n        <p>Akshay: 9268820570</p>\n\n      </div>\n    </div>\n    <div class=\"col-md-6 \">\n      <img src=\"../../assets/images/map/NCR/Noida - sector 63.JPG\" alt=\"\" class=\"img-responsive\" style=\"max-width: 550px;\">\n    </div>\n  </div>\n\n  <div class=\"row margin_bottom\">\n    <div class=\"col-md-6\">\n      <img src=\"../../assets/images/map/NCR/Noida - sector 64.JPG\" alt=\"\" class=\"img-responsive\" style=\"max-width: 550px;\">\n    </div>\n    <div class=\"col-md-6 \">\n      <div class=\"margin_left\">\n        <h5>\n          ALCHEMY SOLUTIONS INFRASTRUCTURE – NOIDA\n        </h5>\n\n        <p>Innowin Info solution Pvt. Ltd.\n          <br>A-33, Sector 64,\n          <br>Noida – 201301</p>\n\n        <h5>CONTACT PERSON</h5>\n        <p>Sanjay: 9810100465</p>\n\n      </div>\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/ncr/ncr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NcrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NcrComponent = /** @class */ (function () {
    function NcrComponent() {
    }
    NcrComponent.prototype.ngOnInit = function () {
    };
    NcrComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ncr',
            template: __webpack_require__("./src/app/ncr/ncr.component.html"),
            styles: [__webpack_require__("./src/app/ncr/ncr.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NcrComponent);
    return NcrComponent;
}());



/***/ }),

/***/ "./src/app/pipes/prev-booking.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrevBookingPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PrevBookingPipe = /** @class */ (function () {
    function PrevBookingPipe() {
    }
    PrevBookingPipe.prototype.transform = function (items, userId, status) {
        if (items) {
            var data = items.filter(function (item) {
                if (userId && !status) {
                    return (item.userId == userId);
                }
                if (userId && status) {
                    return (item.userId == userId && item.status == status);
                }
            });
            // this.dataLength=data.length;
            // console.log(this.dataLength);
            if (data.length === 0) {
                return [-1];
            }
            return data;
        }
    };
    PrevBookingPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'prevBooking'
        })
    ], PrevBookingPipe);
    return PrevBookingPipe;
}());



/***/ }),

/***/ "./src/app/previous-booking/previous-booking.component.css":
/***/ (function(module, exports) {

module.exports = "#myBookings{\n  /*border-radius: 5px;\n  border: 0.5px solid gray;*/\n /* background: lavender;opacity: 0.7;*/\n}\n#myHedding{\n\t\n  /*background: lavender;opacity: 0.7; */\n  padding-top: 5px;\n}\n#myBookinItems{\n\t/*border-radius: 5px;*/\n  \tborder: 0.5px solid lightgray;\n}\n#myBookinItems1{\n\t/*border-radius: 5px;*/\n\tpadding: 20px;\n  \tborder: 0.5px solid lightgray;\n}\n#rmName{\n\tpadding: 10px;\n  \tbackground: lavender;opacity: 0.7; \n}\n#selectedItems:active{\n\tborder-bottom-style: solid;\n    border-bottom-color: coral;\n}\n#selectedItems{\n\tcursor: pointer;\n\tmargin-right: 15px;\n\tfloat: right;\n}\n@media \nonly screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px)  {\n\t#selectedItems{\n\t\tfloat: none;\n\t}\n}"

/***/ }),

/***/ "./src/app/previous-booking/previous-booking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"col-12\" id=\"myBookings\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12 col-md-6\" id=\"myHedding\">\n\t\t\t\t<h5 style=\"color:blue;\"><strong>My Bookings</strong></h5>\t\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"col-12 col-md-6\">\n\t\t\t\t<a id=\"selectedItems\" (click)=\"itemClick('Cancelled')\" style=\"color:red;\"> Cancelled</a>\n\t\t\t\t<a id=\"selectedItems\" (click)=\"itemClick('Tentative')\" style=\"color:orange;\"> Tentative</a>\n\t\t\t\t<a id=\"selectedItems\" style=\"color:green;\" (click)=\"itemClick('Confirmed')\" value=\"confirmed\">Confirmed</a>\n\t\t\t\t<a id=\"selectedItems\" style=\"color:blue;\" (click)=\"itemClick()\" value=\"confirmed\">Bookings</a>\t\n\t\t\t</div>\n\t\t\t<div class=\"col-12\" *ngFor=\"let item of BookingData | prevBooking:userId : status;\" style=\"margin-top:10px;\">\n\t\t\t\t<div class=\"col-12\" id=\"myBookinItems\" *ngIf=\"item !== -1\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-12\" id=\"rmName\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t\t\t\t<strong>{{item.roomName}}</strong>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div align=\"end\" class=\"col-6\" *ngIf=\"\t\titem.status=='Tentative'\" >\n\t\t\t\t\t\t\t\t\t<strong style=\"color:orange;\">{{item.status}}</strong>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div align=\"end\" class=\"col-6\" *ngIf=\"\t\titem.status=='Confirmed'\" >\n\t\t\t\t\t\t\t\t\t<strong style=\"color:green;\">{{item.status}}</strong>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div align=\"end\" class=\"col-6\" *ngIf=\"\t\titem.status=='Cancelled'\" >\n\t\t\t\t\t\t\t\t\t<strong style=\"color:red;\">{{item.status}}</strong>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-12 row\" style=\"padding: 20px;\">\n\t\t\t\t\t\t\t\t<strong *ngIf=\"item.fromDate\">Date of Booking - </strong>\n\t\t\t\t\t\t\t\t<div *ngIf=\"item.fromDate\"> {{item.fromDate}}</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"item.toDate\">- {{item.toDate}}</div>\n\t\t\t\t\t\t\t<div class=\"col-12\" align=\"end\" *ngIf=\"item.status=='Tentative'\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"confirmBooking(item._id)\">Confirm</button>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-danger\" (click)=\"cancelBooking(item._id)\">Cancel</button>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12\" id=\"myBookinItems1\"  *ngIf=\"item === -1\">\n\t\t\t\t\t<div align=\"center\">\n\t\t\t\t\t\t<h4>No Matches</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- <div class=\"col-12\">\n\t\t\t\t<div class=\"col-12\" id=\"myBookinItems\">\n\t\t\t\t\t<div align=\"center\" *ngIf=\"BookingDataLength\">\n\t\t\t\t\t\t<h3 style=\"padding: 20px;\">No Bookings Yet!</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t -->\n\t\t</div>\n\t\t\t\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/previous-booking/previous-booking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousBookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreviousBookingComponent = /** @class */ (function () {
    function PreviousBookingComponent(authService, router, flashMessageService) {
        this.authService = authService;
        this.router = router;
        this.flashMessageService = flashMessageService;
    }
    PreviousBookingComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('user') != undefined) {
            this.UserData = JSON.parse(localStorage.getItem('user'));
            //console.log(this.UserData);
            this.userId = this.UserData._id;
            // console.log(this.userId);
        }
        this.authService.getPrevBookingData().subscribe(function (booking) {
            // console.log(booking.data);
            _this.BookingData = booking.data;
        });
    };
    PreviousBookingComponent.prototype.itemClick = function (event) {
        // console.log(event);
        this.status = event;
    };
    PreviousBookingComponent.prototype.confirmBooking = function (item) {
        var _this = this;
        var status = {
            bookingId: item,
            status: 'Confirmed'
        };
        this.authService.updatePrevBookingData(status).subscribe(function (UpdateBooking) {
            if (UpdateBooking.success) {
                _this.flashMessageService.show('Your Booking has been Confirmed', { cssClass: 'alert-success', timeout: 3000 });
            }
            _this.BookingData = UpdateBooking.data;
        });
    };
    PreviousBookingComponent.prototype.cancelBooking = function (item) {
        var _this = this;
        var status = {
            bookingId: item,
            status: 'Cancelled'
        };
        this.authService.updatePrevBookingData(status).subscribe(function (UpdateBooking) {
            if (UpdateBooking.success) {
                _this.flashMessageService.show('Your Booking has been Cancelled', { cssClass: 'alert-success', timeout: 3000 });
            }
            _this.BookingData = UpdateBooking.data;
        });
    };
    PreviousBookingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-previous-booking',
            template: __webpack_require__("./src/app/previous-booking/previous-booking.component.html"),
            styles: [__webpack_require__("./src/app/previous-booking/previous-booking.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]])
    ], PreviousBookingComponent);
    return PreviousBookingComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">\n      Username: {{user.username}}\n    </li>\n    <li class=\"list-group-item\">\n      Username: {{user.email}}\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getCurrent().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pune/pune.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pune/pune.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\" style=\" padding-bottom: 30px;\">Pune</h2>\n\n<div class=\"container\">\n  <div class=\"row margin_bottom\">\n    <div class=\"col-md-6\">\n      <img src=\"../../assets/images/map/Pune/Pune - Triumph sys.JPG\" alt=\"\" class=\"img-responsive\" style=\"max-width: 550px;\">\n    </div>\n    <div class=\"col-md-6 \">\n      <div class=\"margin_left\">\n        <h5>\n          ALCHEMY SOLUTIONS INFRASTRUCTURE – PUNE\n        </h5>\n\n        <p>Alchemy Solutions (Triumph Sys)\n          <br>Triumph Systems and Solutions\n          <br>S.No 125, Prabhavee Tech Park,\n          <br>Second floor, Baner Road,\n          <br>Pune – 411045\n          <br>Opp: Kapil complex (Near – Orchid School)</p>\n\n        <h5>CONTACT PERSON</h5>\n        <p>Senthil 8888897722\n          <br>Email : senthilk@triumphsys.com</p>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row margin_bottom\">\n    <div class=\"col-md-6\">\n      <div class=\"margin_left\">\n        <h5>\n          ALCHEMY SOLUTIONS INFRASTRUCTURE – PUNE\n        </h5>\n\n        <p>Alchemy Solutions (Seed)\n          <br>IIIrd. Floor Manisha Blitz,\n          <br>Near Mega Center, Pune Sholapur Road,\n          <br>Resi Phase – 1, Hadsapar\n          <br>Pune – 400102</p>\n\n      </div>\n    </div>\n    <div class=\"col-md-6 \">\n      <img src=\"../../assets/images/map/Pune/Pune - Seed (Manisha Blitz).JPG\" alt=\"\" class=\"img-responsive\" style=\"max-width: 550px;\">\n    </div>\n  </div>\n\n  <div class=\"row margin_bottom\">\n    <div class=\"col-md-6\">\n      <img src=\"../../assets/images/map/Pune/Pune - Vyom.JPG\" alt=\"\" class=\"img-responsive\" style=\"max-width: 550px;\">\n    </div>\n    <div class=\"col-md-6 \">\n      <div class=\"margin_left\">\n        <h5>\n          ALCHEMY SOLUTIONS INFRASTRUCTURE – PUNE\n        </h5>\n\n        <p>Alchemy Solutions (Vyom)\n          <br>Aditi Samruddhi,\n          <br>S No. 173/4, Baner,\n          <br>Pune – 411045</p>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row margin_bottom\">\n    <div class=\"col-md-6\">\n      <div class=\"margin_left\">\n        <h5>\n          ALCHEMY SOLUTIONS INFRASTRUCTURE – PUNE\n        </h5>\n\n        <p>Alchemy Solutions (Seed)\n          <br>Nalanda – Yugay Mangal Complex,\n          <br>Opp Gandhi Lawns, Mahendale Garage Road\n          <br>Ganesh Nagar, Pune – 411038</p>\n\n        <h5>CONTACT PERSON</h5>\n        <p>Prashant: 98817 35848\n          <br>Sampada: 96577 25286</p>\n\n      </div>\n    </div>\n    <div class=\"col-md-6 \">\n      <img src=\"../../assets/images/map/Pune/Pune - Seed (Yugay Mangal Complex).JPG\" alt=\"\" class=\"img-responsive\" style=\"max-width: 550px;\">\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pune/pune.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PuneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PuneComponent = /** @class */ (function () {
    function PuneComponent() {
    }
    PuneComponent.prototype.ngOnInit = function () {
    };
    PuneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pune',
            template: __webpack_require__("./src/app/pune/pune.component.html"),
            styles: [__webpack_require__("./src/app/pune/pune.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PuneComponent);
    return PuneComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\" padding-top: 50px\">\n  <div class=\"row sign_in_form\">\n    <div class=\"col-md-4\">\n\n    </div>\n    <div class=\"col-md-4\">\n      <form (submit)=\"onRegisterSubmit()\" >\n        <img class=\"mx-auto d-block signin_logo\" src=\"../../assets/images/logo.png\" alt=\"logo\" style=\"margin-bottom: 30px;\">\n      \n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\"  name=\"name\" placeholder=\"Name\" required>\n        </div>\n        <div class=\"input-group mb-3\">\n          <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\" required  >\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\"  name=\"password\" placeholder=\"Password\"\n            required>\n        </div>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" >Register</button>\n      </form>\n    </div>\n    <div class=\"col-md-4\">\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, validateService, router, flashMessagesService) {
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            password: this.password
        };
        if (!this.validateService.validateRegister(user)) {
            console.log('please fill all details');
            this.flashMessagesService.show('please fill all details', { cssClass: 'alert-danger', timeOut: 10000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            //console.log('give Proper Email..');
            this.flashMessagesService.show('please provide properMail', { cssClass: 'alert-danger', timeOut: 1000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            _this.authService.logout();
            _this.router.navigate(['/']);
            _this.flashMessagesService.show('Registration Succesfull. Please login', { cssClass: 'alert-success', timeout: 3000 });
        }, function () {
            _this.router.navigate(['/register']);
            _this.flashMessagesService.show('User already Exist.', { cssClass: 'alert-danger', timeout: 3000 });
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/search-form/search-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search-form/search-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (submit)=\"checkAvailable()\">\n        <div class=\"form-group\">\n          <label for=\"from_date\">Start Date </label>\n          <input type=\"date\" class=\"form-control\" id=\"start-date\" placeholder=\"From Date\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"from_date\">End Date </label>\n          <input type=\"date\" class=\"form-control\" id=\"end-date\" placeholder=\"End Date\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleFormControlSelect1\">Location</label>\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>Bangalore</option>\n            <option>Chennai</option>\n            <option>Hyderabad</option>\n            <option>Kolkata</option>\n            <option>Mumbai</option>\n            <option>NCR</option>\n            <option>Pune</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleFormControlSelect1\">Seater</label>\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option>10</option>\n            <option>15</option>\n            <option>20</option>\n            <option>30</option>\n            <option>50</option>\n          </select>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Check Availability</button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/search-form/search-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent(authService, router, flashMessageService) {
        this.authService = authService;
        this.router = router;
        this.flashMessageService = flashMessageService;
    }
    SearchFormComponent.prototype.ngOnInit = function () {
    };
    SearchFormComponent.prototype.checkAvailable = function () {
        this.router.navigate(['available']);
    };
    SearchFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search-form',
            template: __webpack_require__("./src/app/search-form/search-form.component.html"),
            styles: [__webpack_require__("./src/app/search-form/search-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:5000/api/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:5000/api/users/login', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getCurrent = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:5000/api/users/current', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getPrevBookingData = function () {
        return this.http.get('http://localhost:5000/api/users/prevBookingData')
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updatePrevBookingData = function (status) {
        console.log(status);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:5000/api/users/updatePrevBooking', status, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(ibm)\.com$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map