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

/***/ "./src/app/admin/admin.component.css":
/***/ (function(module, exports) {

module.exports = "#sticky{\n\tposition: -webkit-sticky;\n  \tposition: sticky;\n  \ttop: 100px;\n  \tz-index:1;\n}\n#rmResource{\n\tbackground-color:white;\n\tpadding-bottom: 30px;\n}\n@media \nonly screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px)  {\n\t\n\t#sticky{\n\t\tposition: -webkit-sticky;\n\t  \tposition: sticky;\n\t  \ttop: 60px;\n\t  \tz-index:1;\n\t}\n\t#rmResource{\n\t\tmargin-top: 70px;\n\t\tbackground-color:white;\n\t\tpadding-bottom: 30px;\n\t}\n}"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding-bottom:30px; margin: 0; padding-left: 0px;\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-4 col-12\" id=\"cardView\">\n\t\t\t<div class=\"card\"  id=\"sticky\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<a href=\"\" [routerLink]=\"['roomResource']\">Room Resource</a>\n\t\t\t\t\t</div><hr>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<a href=\"\" [routerLink]=\"['configResource']\">Configuration Resource</a>\n\t\t\t\t\t</div><hr>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-8 col-12\" id=\"rmResource\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\n\t<!--Scroll to top-->\n\t<div class=\"scroll-to-top\" [ngClass]=\"{'show-scroll': navIsFixed}\">\n\t   \t<i class=\"fa fa-arrow-circle-up\" style=\"font-size:48px;color:red; cursor: pointer;\" (click)=\"scrollToTop()\"></i>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
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

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n\n<div class=\"container-fluid\">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipes_available_room_pipe__ = __webpack_require__("./src/app/pipes/available-room.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__room_resource_room_resource_component__ = __webpack_require__("./src/app/room-resource/room-resource.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__configuration_resource_configuration_resource_component__ = __webpack_require__("./src/app/configuration-resource/configuration-resource.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pipes_configuration_pipe__ = __webpack_require__("./src/app/pipes/configuration.pipe.ts");
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
                __WEBPACK_IMPORTED_MODULE_27__available_rooms_available_rooms_component__["a" /* AvailableRoomsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pipes_available_room_pipe__["a" /* AvailableRoomPipe */],
                __WEBPACK_IMPORTED_MODULE_31__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_32__room_resource_room_resource_component__["a" /* RoomResourceComponent */],
                __WEBPACK_IMPORTED_MODULE_33__configuration_resource_configuration_resource_component__["a" /* ConfigurationResourceComponent */],
                __WEBPACK_IMPORTED_MODULE_34__pipes_configuration_pipe__["a" /* ConfigurationPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_29_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot([
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
                    {
                        path: 'admin',
                        component: __WEBPACK_IMPORTED_MODULE_31__admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]],
                        children: [
                            {
                                path: 'roomResource',
                                component: __WEBPACK_IMPORTED_MODULE_32__room_resource_room_resource_component__["a" /* RoomResourceComponent */]
                            },
                            {
                                path: 'configResource',
                                component: __WEBPACK_IMPORTED_MODULE_33__configuration_resource_configuration_resource_component__["a" /* ConfigurationResourceComponent */]
                            }
                        ]
                    }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_30__angular_common__["DatePipe"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/available-rooms/available-rooms.component.css":
/***/ (function(module, exports) {

module.exports = "\n#companyName{\n  word-wrap: break-word; \n  padding: 2px;\n  cursor: pointer;\n  color:#A569BD;\n}\n#companyName:hover{\n  text-decoration: underline;\n}\n.list{\n  border-radius: 5px;\n  border: 0.5px solid lightgray;\n  height: 450px;\n  width: 100%;\n  margin:30px 0px 0px 0px;\n  text-align: center;\n  background: white;\n}\n.filters{\n\tz-index:1;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 100px;\n  padding: 0px;\n  margin:0px;\n  padding-bottom: 20px;\n}\n#noRmAvailable{\n\t/*border-radius: 5px;*/\n\tpadding: 50px;\n  \tborder: 0.5px solid lightgray;\n}\n#noImg{\n  width: 100vw; \n  background:lavender;opacity: 0.7;\n  height:200px;\n}\n#staticImg{\n\theight:300px;\n\twidth: 100vw; \n\tcursor: pointer;\t\n}\n.bottomright {\n\t/*position:absolute; \n\tbottom:0;  \n\tright: 0;*/\n\tpadding: 40px;\n}\n@media \nonly screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px)  {\n\t#roomDetails{\n\t\tpadding-left: 40px;\n\t}\n\t\n}"

/***/ }),

/***/ "./src/app/available-rooms/available-rooms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n\t<div class=\"row\">\n\t\t<div class=\"col-12 col-md-3\" style=\"background-color: white;\">\n\t\t\t<div class=\"filters\">\n\t\t\t\t<div align=\"end\">\n\t\t\t\t\t<h6 style=\"color:red; cursor: pointer; font-size: 14px; text-decoration: underline; padding-top: 20px;\" (click)=\"clear()\">clear</h6>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t          <label for=\"from_date\">Start Date </label>\n\t\t          <div class=\"input-group\">\n\t\t            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"startD\" [(ngModel)]=\"startD\" ngbDatepicker #d=\"ngbDatepicker\" (ngModelChange)=\"valuechange($event)\" [minDate]=\"minDate\" (click)=\"d.toggle()\" readonly>\n\t\t            <div class=\"input-group-append\">\n\t\t              <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\"> <img src=\"../../assets/images/ngb.png\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/> </button>\n\t\t            </div>\n\t\t          </div>\n\t\t        </div>  \n\t\t        <div class=\"form-group\">\n\t\t          <label for=\"from_date\">End Date </label>\n\t\t          <div class=\"input-group\">\n\t\t            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"endD\" [(ngModel)]=\"endD\" ngbDatepicker #da=\"ngbDatepicker\" (ngModelChange)=\"valuechange1($event)\" [minDate]=\"minDate\" (click)=\"da.toggle()\" readonly>\n\t\t            <div class=\"input-group-append\">\n\t\t              <button class=\"input-group-addon\" (click)=\"da.toggle()\" type=\"button\"> <img src=\"../../assets/images/ngb.png\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/> </button>\n\t\t            </div>\n\t\t          </div>\n\t\t        </div>  \n\t\t        <div class=\"form-group\">\n\t            \t<label for=\"exampleFormControlSelect1\">Seater</label>\n\t\t            <select  class=\"form-control\" id=\"exampleFormControlSelect1\" [(ngModel)]=\"capacity\" name=\"capacity\" readonly>\n\t\t\t\t\t <option [ngValue]=\"null\" >Select Category</option>\n\t\t              <option *ngFor=\"let item of capacityList\">{{item}}</option>\n\t\t            </select>\n\t        \t</div>\n\t\t        <div class=\"form-group\">\n\t\t            <label for=\"exampleFormControlSelect1\">Location</label>\n\t\t            <select class=\"form-control\" id=\"exampleFormControlSelect1\" [(ngModel)]=\"location\" name=\"location\" readonly>\n\t\t            \t<option [ngValue]=\"null\" hidden >select location</option>\n\t\t            \t<option *ngFor=\"let item of locationsList\">{{item}}</option>\n\t\t            </select>  \n\t\t        </div>\n\t\t        <div class=\"form-group\">\n\t\t            <label for=\"configurations\">Configuration</label>\n\t\t            <select class=\"form-control\" id=\"configurations\" [(ngModel)]=\"configuration\" name=\"configuration\" readonly>\n\t\t              <option [ngValue]=\"null\">Select Configuration</option>\n\t\t              <option *ngFor=\"let item of configurations | configuration:location;\">{{item.configuration}}</option>\n\t\t            </select>\n\t\t        </div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-12 col-md-9\" style=\"padding-bottom: 30px;\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4 col-12\" *ngFor=\"let item of availableRooms | availableRoom:location:startDate:endDate:capacity:configuration; let i=index\">\n\t\t\t\t\t<div class=\"list row\" *ngIf=\"item !== -1\">\n            \t\t\t<div align=\"start\" *ngFor=\"let subItem of item.image | slice:0:1;\" style=\"width: 100vw; cursor: pointer;\">\n              \t\t\t\t<!-- <img src=\"http://localhost:5000/static/{{subItem.uploadname}}\" class=\"rounded\" width=\"100%\"  height=\"160\"> -->\n              \t\t\t\t<img src=\"static/{{subItem.uploadname}}\" class=\"rounded\" width=\"100%\"  height=\"200\">            \n              \t\t\t</div>\n            \t\t\t<div align=\"start\" *ngIf=\"!item.image.length>0\" id=\"noImg\">\n\t\t\t              <div align=\"center\" style=\"padding-top:90px; \">--No Preview--</div>\n\t\t\t            </div>\n\t\t\t            <div class=\"col-12\">\n              \t\t\t\t<h5 id=\"companyName\">\n                \t\t\t\t<strong>{{item.roomId}}</strong>\n              \t\t\t\t</h5>\n            \t\t\t</div>\n            \t\t\t<div align=\"left\" class=\"col-12\" style=\"font-size: 12px;\">\n\t\t\t\t\t\t\t<strong>Location :</strong> {{item.location}}\n\t\t\t\t\t\t</div>\n            \t\t\t<div align=\"left\" class=\"col-12\" style=\"font-size: 12px;\">\n\t\t\t\t\t\t\t<strong>Capacity :</strong> {{item.capacity}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div align=\"left\" class=\"col-12\" style=\"word-wrap: break-word;\" style=\"font-size: 12px;\">\n\t\t\t\t\t\t\t<strong>Contact Address : </strong>{{item.contactAddress}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div align=\"left\" class=\"col-12\">\n\t\t\t\t\t\t\t<a href=\"#demo{{i}}\" data-toggle=\"collapse\" style=\"font-size: 10px; text-decoration: underline; color: green;\">View more Information</a>\n\t\t\t\t\t\t\t<div id=\"demo{{i}}\" class=\"collapse\">\n\t    \t\t\t\t\t\t<div style=\"font-size: 12px;\">\n\t\t\t\t\t\t\t\t\t<strong>Configuration : </strong>{{item.configuration}}\n\t    \t\t\t\t\t\t</div>\n\t    \t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-12\" align=\"end\" >\n\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-primary\" (click)=\"bookRoom(item)\">Book Room</button>\n\t\t\t\t\t\t\t<button class=\"btn btn-sm \" style=\"background-color:orange;\" (click)=\"tentativeRoom(item)\">Tentative</button>\n\t\t\t\t\t\t</div>\n            \t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-12\" *ngFor=\"let item of availableRooms | availableRoom:location:startDate:endDate:capacity:configuration;\">\n\t          \t<div *ngIf=\"item === -1\">\n\t          \t\t<div id=\"noRmAvailable\">\n\t          \t\t\t<div align=\"center\">\n\t\t\t\t\t\t\t<h4>No Rooms Available Yet ! {{location}} With this Specifications</h4>\n\t\t\t\t\t\t</div>\n\t          \t\t</div>\n\t\t            \t\n\t          \t</div>\n        \t</div>\n\t\t</div>\t\n\t</div>\t\t\n</div>\n"

/***/ }),

/***/ "./src/app/available-rooms/available-rooms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailableRoomsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
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
    function AvailableRoomsComponent(authService, router, flashMessageService, activatedRoute, datepipe) {
        this.authService = authService;
        this.router = router;
        this.flashMessageService = flashMessageService;
        this.activatedRoute = activatedRoute;
        this.datepipe = datepipe;
        this.capacity = null;
        this.location = "Bangalore";
        this.configuration = null;
        this.minDate = { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() };
    }
    AvailableRoomsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.capacityList = [10, 15, 20, 25, 30, 40, 50];
        this.locationsList = ["Bangalore", "Chennai", "Hyderabad", "Kolkata", "Mumbai", "NCR", "Pune"];
        this.authService.getConfigurations().subscribe(function (configuration) {
            _this.configurations = configuration.data;
            // console.log(this.configurations);
        });
        // this.activatedRoute.paramMap.subscribe(params => {
        //    this.location = params.get('location');
        //  });
        if (localStorage.getItem('user') != undefined) {
            this.UserData = JSON.parse(localStorage.getItem('user'));
            //console.log(this.UserData);
            this.userId = this.UserData._id;
            // console.log(this.userId);
        }
        // if(localStorage.getItem('checkData')!=undefined){
        // 	this.checkData=localStorage.getItem('checkData');
        // 	this.startDate=JSON.parse(this.checkData).startDate;
        // 	this.endDate=JSON.parse(this.checkData).endDate;
        // 	this.location=JSON.parse(this.checkData).location;
        // 	// console.log(JSON.parse(this.checkData).startDate); 
        // }
        this.authService.getAvailableRooms().subscribe(function (availableRooms) {
            _this.availableRooms = availableRooms.data;
            // console.log(this.availableRooms);
        });
    };
    // locationChange(location){
    // 	this.location=location;
    // }
    // configurationChange(configuration){
    // 	if(configuration!=="Select Configuration"){
    // 		this.configuration=configuration;
    //  console.log(configuration);
    // 	}
    // }
    AvailableRoomsComponent.prototype.valuechange = function (newValue) {
        this.startDate1 = this.datepipe.transform(newValue.year + "-" + newValue.month + "-" + newValue.day, 'yyyy-MM-dd');
        this.endD = null;
    };
    AvailableRoomsComponent.prototype.valuechange1 = function (newValue) {
        var _this = this;
        var enddate = this.datepipe.transform(newValue.year + "-" + newValue.month + "-" + newValue.day, 'yyyy-MM-dd');
        if (this.startDate1 == undefined || this.startDate1 > enddate) {
            this.flashMessageService.show('End date should be higher', { cssClass: 'alert-danger', timeout: 3000 });
            setTimeout(function () {
                _this.clear();
            }, 1000);
        }
        else {
            this.startDate = this.startDate1;
            this.endDate = enddate;
        }
    };
    AvailableRoomsComponent.prototype.bookRoom = function (item) {
        var _this = this;
        //console.log(item);
        var bookDetails = {
            rmResourceId: item._id,
            userId: this.userId,
            roomId: item.roomId,
            capacity: item.capacity,
            configuration: item.configuration,
            location: item.location,
            city: item.city,
            image: item.image,
            status: "Confirmed",
            startDate: this.startDate,
            endDate: this.endDate
        };
        if (this.startDate == undefined || this.endDate == undefined) {
            this.flashMessageService.show('please select start and end date', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            this.authService.bookingRooms(bookDetails).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessageService.show('Your Booking has Success', { cssClass: 'alert-success', timeout: 3000 });
                    localStorage.setItem('checkData', null);
                    _this.clear();
                }
            });
            this.authService.updateBooking(bookDetails).subscribe(function (available) {
                _this.availableRooms = available.data;
                // localStorage.setItem('checkData',null);
            });
        }
    };
    AvailableRoomsComponent.prototype.tentativeRoom = function (item) {
        var _this = this;
        var bookDetails = {
            bookingId: item._id,
            userId: this.userId,
            roomId: item.roomId,
            capacity: item.capacity,
            configuration: item.configuration,
            city: item.city,
            location: item.location,
            image: item.image,
            status: "Tentative",
            startDate: this.startDate,
            endDate: this.endDate
        };
        if (this.startDate == undefined || this.endDate == undefined) {
            this.flashMessageService.show('please select start and end date', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            this.authService.bookingRooms(bookDetails).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessageService.show('Your Booking has been Pending', { cssClass: 'alert-success', timeout: 3000 });
                    _this.clear();
                }
            });
            this.authService.updateBooking(bookDetails).subscribe(function (available) {
                _this.availableRooms = available.data;
                // console.log(available);
            });
        }
    };
    AvailableRoomsComponent.prototype.clear = function () {
        this.startD = null;
        this.endD = null;
        this.endDate = null;
        this.startDate = null;
        this.capacity = null;
        this.configuration = null;
    };
    AvailableRoomsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-available-rooms',
            template: __webpack_require__("./src/app/available-rooms/available-rooms.component.html"),
            styles: [__webpack_require__("./src/app/available-rooms/available-rooms.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["DatePipe"]])
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

/***/ "./src/app/configuration-resource/configuration-resource.component.css":
/***/ (function(module, exports) {

module.exports = "#textHeadding{\n\ttext-align: center; \n\tcolor: blue; \n\tpadding: 40px;\n}"

/***/ }),

/***/ "./src/app/configuration-resource/configuration-resource.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"col-12\">\n\t\t<h2 id=\"textHeadding\"><strong>Configuration Resource</strong></h2>\n\t</div>\n\t<div class=\"offset-md-3 col-md-6 col-12\">\n\t\t<form name=\"myForm\" (submit)=\"configurationInsert()\">\n\t\t\t<div class=\"form-group\">\n\t          <label for=\"exampleFormControlSelect1\">Location</label>\n\t          <select class=\"form-control\" id=\"exampleFormControlSelect1\" (change)=\"locationChange($event.target.value)\">\n\t            <option value=\"Bangalore\">Bangalore</option>\n\t            <option value=\"Chennai\">Chennai</option>\n\t            <option value=\"Hyderabad\">Hyderabad</option>\n\t            <option value=\"Kolkata\">Kolkata</option>\n\t            <option value=\"Mumbai\">Mumbai</option>\n\t            <option value=\"NCR\">NCR</option>\n\t            <option value=\"Pune\">Pune</option>\n\t          </select>\n\t        </div>\n\t\t\t<div class=\"form-group\">\n\t\t    \t<label for=\"userId\" style=\"color: #000\">Configuration </label>\n\t\t    \t<input type=\"text\" class=\"form-control\" name=\"configuration\" [(ngModel)]=\"configuration\" placeholder=\"Enter Configuration\" required>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div style=\"margin-top: 35px;\" align=\"center\">\n\t\t\t\t<button class=\"btn btn-primary\">Submit</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/configuration-resource/configuration-resource.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationResourceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigurationResourceComponent = /** @class */ (function () {
    function ConfigurationResourceComponent(authService, flashMessageService) {
        this.authService = authService;
        this.flashMessageService = flashMessageService;
        this.locations = "Bangalore";
    }
    ConfigurationResourceComponent.prototype.ngOnInit = function () {
    };
    ConfigurationResourceComponent.prototype.locationChange = function (location) {
        this.locations = location;
    };
    ConfigurationResourceComponent.prototype.configurationInsert = function () {
        var _this = this;
        var config = {
            location: this.locations,
            configuration: this.configuration
        };
        if (this.configuration == undefined) {
            this.flashMessageService.show('please provide configuration', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            this.authService.InsertConfigurations(config).subscribe(function (result) {
                if (result.success) {
                    _this.flashMessageService.show('Configuration Inserted', { cssClass: 'alert-success', timeout: 3000 });
                    //this.configuration="";
                }
                else {
                    _this.flashMessageService.show(result.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
    };
    ConfigurationResourceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-configuration-resource',
            template: __webpack_require__("./src/app/configuration-resource/configuration-resource.component.html"),
            styles: [__webpack_require__("./src/app/configuration-resource/configuration-resource.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]])
    ], ConfigurationResourceComponent);
    return ConfigurationResourceComponent;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
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
            _this.router.navigate(['available']);
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
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
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

module.exports = ".custom_nav { \n  margin: 0 auto !important;\n}\n.navbar-light .navbar-nav .nav-link {\n    margin-left: 25px;\n}\n.navbar-brand img {    \n    padding-left: 75px;\n}\n#dropdown01 {\n    cursor: pointer;\n}\n.navbar-nav li,#btn1{\n\tmargin-top: 10px;\n\ttext-align: center;\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row\">\n    <nav class=\"navbar navbar-expand-md  fixed-top navbar-dark\" style=\"background-color: orange;\">\n      <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"../../assets/images/logo.png\" alt=\"\">\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\" >\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n        <ul class=\"nav navbar-nav  mr-auto\">\n            \n        </ul>\n        <ul class=\"nav navbar-nav\">\n            <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item \">\n            <a class=\"nav-link  \" routerLink=\"/\" style=\"color: #2F4F4F\">Login</a>\n          </li>\n          <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item \">\n            <a class=\"nav-link  \" routerLink=\"/register\" style=\"color: #2F4F4F\">Register</a>\n          </li>\n          <li *ngIf=\"authService.loggedIn()\" class=\"nav-item \">\n            <a class=\"nav-link  \" routerLink=\"/admin/roomResource\" style=\"color: #2F4F4F\">Admin</a>\n          </li>\n          <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/available\" style=\"color: #2F4F4F\"> RoomAvailability\n            </a>\n          </li>\n          <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link\" *ngIf=\"authService.loggedIn()\" routerLink=\"previous-booking\" style=\"color: #2F4F4F\"> PreviousBookings\n            </a>\n          </li>\n          <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/gallery\" style=\"color: #2F4F4F\">Gallery</a>\n          </li>\n          <li *ngIf=\"authService.loggedIn()\" ngbDropdown class=\"nav-item dropdown \">\n            <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color: #2F4F4F\">Locations</a>\n            <div ngbDropdownMenu class=\"dropdown-menu \" aria-labelledby=\"dropdown01\" >\n              <a class=\"dropdown-item\" routerLink=\"/bangalore\" style=\"color: #2F4F4F\">Bangalore</a>\n              <a class=\"dropdown-item\" routerLink=\"/mumbai\" style=\"color: #2F4F4F\">Mumbai</a>\n              <a class=\"dropdown-item\" routerLink=\"/hyderabad\" style=\"color: #2F4F4F\">Hyderabad</a>\n              <a class=\"dropdown-item\" routerLink=\"/chennai\" style=\"color: #2F4F4F\">Chennai</a>\n              <a class=\"dropdown-item\" routerLink=\"/ncr\" style=\"color: #2F4F4F\">NCR</a>\n              <a class=\"dropdown-item\" routerLink=\"/pune\" style=\"color: #2F4F4F\">Pune</a>\n            </div>\n          </li>\n          <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/download-app\" style=\"color: #2F4F4F\">DownloadApp</a>\n          </li>\n          \n          \n      \n\n          <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link \" (click)=\"onLogoutClick()\" href=\"#\" style=\"color: #2F4F4F\">Logout</a>\n          </li>\n        </ul>\n      </div>  \n    </nav>\n</div>\n\n<!-- /.container -->"

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
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
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

/***/ "./src/app/pipes/available-room.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailableRoomPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AvailableRoomPipe = /** @class */ (function () {
    function AvailableRoomPipe() {
    }
    //GETTING ERROR IN D.TS
    // constructor(private datePipe:DatePipe){
    // }
    AvailableRoomPipe.prototype.transform = function (items, location, startDate, endDate, capacity, configuration) {
        var datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]("en-US");
        if (items) {
            var data = items.filter(function (item) {
                // return item;
                if (location && !startDate && !endDate && !capacity && !configuration) {
                    //return item.location==location;
                    return ((datePipe.transform(new Date(), item.endDate) < datePipe.transform(new Date(), 'yyyy-MM-dd') || datePipe.transform(new Date(), item.startDate) > datePipe.transform(new Date(), 'yyyy-MM-dd')) && item.location == location);
                }
                if (location && !startDate && !endDate && capacity && !configuration) {
                    //return item.location==location;
                    return ((datePipe.transform(new Date(), item.endDate) < datePipe.transform(new Date(), 'yyyy-MM-dd') || datePipe.transform(new Date(), item.startDate) > datePipe.transform(new Date(), 'yyyy-MM-dd')) && item.location == location && item.capacity == capacity);
                }
                if (location && !startDate && !endDate && !capacity && configuration) {
                    //return item.location==location;
                    return ((datePipe.transform(new Date(), item.endDate) < datePipe.transform(new Date(), 'yyyy-MM-dd') || datePipe.transform(new Date(), item.startDate) > datePipe.transform(new Date(), 'yyyy-MM-dd')) && item.location == location && item.configuration == configuration);
                }
                if (location && !startDate && !endDate && capacity && configuration) {
                    //return item.location==location;
                    return ((datePipe.transform(new Date(), item.endDate) < datePipe.transform(new Date(), 'yyyy-MM-dd') || datePipe.transform(new Date(), item.startDate) > datePipe.transform(new Date(), 'yyyy-MM-dd')) && item.location == location && item.configuration == configuration && item.capacity == capacity);
                }
                if (location && startDate && endDate && !capacity && !configuration) {
                    return ((datePipe.transform(startDate, 'yyyy-MM-dd') > datePipe.transform(new Date(), item.endDate) ||
                        datePipe.transform(endDate, 'yyyy-MM-dd') < datePipe.transform(new Date(), item.startDate)) && item.location == location);
                }
                if (location && startDate && endDate && capacity && !configuration) {
                    return ((datePipe.transform(startDate, 'yyyy-MM-dd') > datePipe.transform(new Date(), item.endDate) ||
                        datePipe.transform(endDate, 'yyyy-MM-dd') < datePipe.transform(new Date(), item.startDate)) && item.location == location && item.capacity == capacity);
                }
                if (location && startDate && endDate && !capacity && configuration) {
                    return ((datePipe.transform(startDate, 'yyyy-MM-dd') > datePipe.transform(new Date(), item.endDate) ||
                        datePipe.transform(endDate, 'yyyy-MM-dd') < datePipe.transform(new Date(), item.startDate)) && item.location == location && item.configuration == configuration);
                }
                if (location && startDate && endDate && capacity && configuration) {
                    return ((datePipe.transform(startDate, 'yyyy-MM-dd') > datePipe.transform(new Date(), item.endDate) ||
                        datePipe.transform(endDate, 'yyyy-MM-dd') < datePipe.transform(new Date(), item.startDate)) && item.location == location && item.capacity == capacity && item.configuration == configuration);
                }
            });
            if (data.length === 0) {
                return [-1];
            }
            return data;
        }
    };
    AvailableRoomPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'availableRoom'
        })
    ], AvailableRoomPipe);
    return AvailableRoomPipe;
}());



/***/ }),

/***/ "./src/app/pipes/configuration.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConfigurationPipe = /** @class */ (function () {
    function ConfigurationPipe() {
    }
    ConfigurationPipe.prototype.transform = function (items, location) {
        if (items) {
            var data = items.filter(function (item) {
                if (location) {
                    return item.location == location;
                }
            });
            if (data.length === 0) {
                return [-1];
            }
            return data;
        }
    };
    ConfigurationPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'configuration'
        })
    ], ConfigurationPipe);
    return ConfigurationPipe;
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

module.exports = "#myBookings{\n  /*border-radius: 5px;\n  border: 0.5px solid gray;*/\n /* background: lavender;opacity: 0.7;*/\n padding-bottom: 40px;\n}\n#myHedding{\n\t\n  /*background: lavender;opacity: 0.7; */\n  padding-top: 5px;\n}\n#myBookinItems{\n\t/*border-radius: 5px;*/\n\tbackground: white;\n  \tborder: 0.5px solid lightgray;\n}\n#myBookinItems1{\n\t/*border-radius: 5px;*/\n\tpadding: 20px;\n  \tborder: 0.5px solid lightgray;\n}\n#rmName{\n\tpadding: 10px;\n  \tbackground: lavender;opacity: 0.7; \n}\n#selectedItems:active{\n\tborder-bottom-style: solid;\n    border-bottom-color: coral;\n}\n#selectedItems{\n\tcursor: pointer;\n\tmargin-right: 15px;\n\tfloat: right;\n}\n@media \nonly screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px)  {\n\t#selectedItems{\n\t\tfloat: none;\n\t}\n\t#detailsList{\n\t\tmargin-top: 20px;\n\t\tpadding:0px;\n\t}\n}"

/***/ }),

/***/ "./src/app/previous-booking/previous-booking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"col-12\" id=\"myBookings\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12 col-md-6\" id=\"myHedding\">\n\t\t\t\t<h5 style=\"color:blue;\"><strong>My Bookings</strong></h5>\t\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"col-12 col-md-6\">\n\t\t\t\t<a id=\"selectedItems\" (click)=\"itemClick('Cancelled')\"> Cancelled</a>\n\t\t\t\t<a id=\"selectedItems\" (click)=\"itemClick('Tentative')\"> Tentative</a>\n\t\t\t\t<a id=\"selectedItems\" (click)=\"itemClick('Confirmed')\" value=\"confirmed\">Confirmed</a>\n\t\t\t\t<a id=\"selectedItems\" (click)=\"itemClick()\" value=\"confirmed\">Bookings</a>\t\n\t\t\t</div>\n\t\t\t<div class=\"col-12\" *ngFor=\"let item of BookingData | prevBooking:userId : status;\" style=\"margin-top:10px;\">\n\t\t\t\t<div class=\"col-12\" id=\"myBookinItems\" *ngIf=\"item !== -1\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-12\" id=\"rmName\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t\t\t\t<strong style=\"color:#A569BD;\">Room Id : {{item.roomId}}</strong>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div align=\"end\" class=\"col-6\" *ngIf=\"\t\titem.status=='Tentative'\" >\n\t\t\t\t\t\t\t\t\t<strong style=\"color:orange;\">{{item.status}}</strong>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div align=\"end\" class=\"col-6\" *ngIf=\"\t\titem.status=='Confirmed'\" >\n\t\t\t\t\t\t\t\t\t<strong style=\"color:green;\">{{item.status}}</strong>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div align=\"end\" class=\"col-6\" *ngIf=\"\t\titem.status=='Cancelled'\" >\n\t\t\t\t\t\t\t\t\t<strong style=\"color:red;\">{{item.status}}</strong>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-12 row\" style=\"padding: 20px;\">\n\t\t\t\t\t\t\t<div class=\"col-12 col-md-4\" *ngFor=\"let subItem of item.image\">\n\t\t\t\t\t\t\t\t<!-- <img src=\"http://localhost:5000/static/{{subItem.uploadname}}\" alt=\"\" width=\"100%\"  height=\"160\"> -->\n\t\t\t\t\t\t\t\t<img src=\"static/{{subItem.uploadname}}\" alt=\"\" width=\"100%\" height=\"160\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-12 col-md-8\" id=\"detailsList\">\n\t\t\t\t\t\t\t\t<div class=\"col-12\" style=\"font-size: 14px;\">\n\t\t\t\t\t\t\t\t\t<strong>Configuration :</strong>{{item.configuration}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-12\" style=\"font-size: 14px;\">\n\t\t\t\t\t\t\t\t\t<strong>Capacity :</strong>{{item.capacity}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-12\" style=\"font-size: 14px;\">\n\t\t\t\t\t\t\t\t\t<strong>Location :</strong>{{item.location}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-12\" *ngIf=\"item.startDate\" style=\"font-size: 14px;\">\n\t\t\t\t\t\t\t\t\t<strong>Date Of Booking :</strong>{{item.startDate}} - {{item.endDate}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-12\" align=\"end\" *ngIf=\"item.status=='Tentative'\" style=\"padding-top: 40px;\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"confirmBooking(item._id)\">Confirm</button>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger\" (click)=\"cancelBooking(item)\">Cancel</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-12\" align=\"end\" *ngIf=\"item.status=='Confirmed' && item.startDate>toDay\" style=\"padding-top: 40px;\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger\" (click)=\"cancelBooking(item)\">Cancel</button>\n\t\t\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12\" id=\"myBookinItems1\"  *ngIf=\"item === -1\">\n\t\t\t\t\t<div align=\"center\">\n\t\t\t\t\t\t<h4>No Booking Yet ! {{status}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- <div class=\"col-12\">\n\t\t\t\t<div class=\"col-12\" id=\"myBookinItems\">\n\t\t\t\t\t<div align=\"center\" *ngIf=\"BookingDataLength\">\n\t\t\t\t\t\t<h3 style=\"padding: 20px;\">No Bookings Yet!</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t -->\n\t\t</div>\n\t\t\t\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/previous-booking/previous-booking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousBookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
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





var PreviousBookingComponent = /** @class */ (function () {
    function PreviousBookingComponent(authService, router, flashMessageService, datePipe) {
        this.authService = authService;
        this.router = router;
        this.flashMessageService = flashMessageService;
        this.datePipe = datePipe;
    }
    PreviousBookingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toDay = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        console.log(this.toDay);
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
        console.log(item);
        var status = {
            bookingId: item._id,
            rmResourceId: item.rmResourceId,
            status: 'Cancelled',
            startDate: '',
            endDate: ''
        };
        this.authService.updatePrevBookingData(status).subscribe(function (UpdateBooking) {
            if (UpdateBooking.success) {
                _this.flashMessageService.show('Your Booking has been Cancelled', { cssClass: 'alert-danger', timeout: 3000 });
            }
            _this.BookingData = UpdateBooking.data;
        });
        this.authService.updateBooking(status).subscribe(function (available) {
            // localStorage.setItem('checkData',null);
        });
    };
    PreviousBookingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-previous-booking',
            template: __webpack_require__("./src/app/previous-booking/previous-booking.component.html"),
            styles: [__webpack_require__("./src/app/previous-booking/previous-booking.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"]])
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
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
            this.flashMessagesService.show('please fill all details', { cssClass: 'alert-danger', timeOut: 1000 });
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/room-resource/room-resource.component.css":
/***/ (function(module, exports) {

module.exports = "#textHeadding{\n\ttext-align: center; \n\tcolor: blue; \n\tpadding: 40px;\n}\n\n"

/***/ }),

/***/ "./src/app/room-resource/room-resource.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"col-12\">\n\t\t<h2 id=\"textHeadding\"><strong>Room Resource</strong></h2>\n\t</div>\n\t<div class=\"offset-md-3 col-md-6 col-12\">\n\t\t<form name=\"myForm\">\n\t\t\t<div class=\"form-group\">\n\t\t    \t<label for=\"userId\" style=\"color: #000\">Room Id </label>\n\t\t    \t<input type=\"text\" class=\"form-control\" name=\"roomId\" [(ngModel)]=\"roomId\" placeholder=\"Enter Room Id\" required>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t            <label for=\"exampleFormControlSelect1\">Seater</label>\n\t\t        <select  class=\"form-control\" id=\"exampleFormControlSelect1\" [(ngModel)]=\"capacity\" name=\"capacity\" readonly>\n\t\t\t\t\t<option [ngValue]=\"null\" >Select Category</option>\n\t\t            <option *ngFor=\"let item of capacityList\">{{item}}</option>\n\t\t        </select>\n\t        </div>\n\t\t    <div class=\"form-group\">\n\t\t        <label for=\"exampleFormControlSelect1\">Location</label>\n\t\t        <select class=\"form-control\" id=\"exampleFormControlSelect1\" [(ngModel)]=\"location\" name=\"location\" readonly>\n\t\t          \t<option [ngValue]=\"null\" hidden >select location</option>\n\t\t           \t<option *ngFor=\"let item of locationsList\">{{item}}</option>\n\t\t        </select>  \n\t\t    </div>\n\t\t    <div class=\"form-group\">\n\t\t        <label for=\"configurations\">Configuration</label>\n\t\t       \t<select class=\"form-control\" id=\"configurations\" [(ngModel)]=\"configuration\" name=\"configuration\" readonly>\n\t\t            <option [ngValue]=\"null\">Select Configuration</option>\n\t\t            <option *ngFor=\"let item of configurations | configuration:location;\">{{item.configuration}}</option>\n\t\t        </select>\n\t\t    </div>\n\t\t\t<div class=\"form-group\">\n\t\t    \t<label style=\"color: #000\">Contact Address </label>\n\t\t    \t<textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"contactAddress\" name=\"contactAddress\"></textarea>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n            \t<input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n\t\t\t</div>\n\t\t\t<div class=\"col-12 row\">\n\t\t\t\t<div class=\"col-md-6 col-12\" *ngIf=\"uploader.queue.length>0\">\n\t\t\t\t\t<!-- <div>\n\t\t\t\t\t\t<strong>Name: </strong>{{ uploader.queue.name }}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<strong>Size : </strong>{{ uploader.queue?.file?.size/1024/1024 | number:'.2' }} MB\n\t\t\t\t\t</div> -->\n\t\t\t\t\t<button class=\"btn btn-info\" style=\"margin-top: 20px;\" (click)=\"uploader.uploadAll()\">\n\t\t\t\t\t\tupload\n\t\t\t\t\t</button>\n\t\t\t\t\t<h6 style=\"font-size: 14px; color:green; margin-top: 10px;\">{{imgUploaded}}</h6>\n\t\t\t\t</div>\t\n\t\t\t\t<div class=\"col-md-6 col-12\">\n\t            \t<img [src]=\"filePreviewPath\" width=\"200\" height=\"200\" *ngIf=\"filePreviewPath\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div style=\"margin-top: 35px;\" align=\"center\">\n\t\t\t\t<button class=\"btn  btn-primary\" (click)=\"roomInsert()\">Submit</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/room-resource/room-resource.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomResourceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//const uri='http://localhost:5000/api/users/upload';
var uri = '/api/users/upload';
var RoomResourceComponent = /** @class */ (function () {
    function RoomResourceComponent(sanitizer, authService, router, flashMessageService) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.authService = authService;
        this.router = router;
        this.flashMessageService = flashMessageService;
        this.location = "Bangalore";
        this.capacity = 10;
        this.configuration = null;
        this.attachmentList = [];
        this.List = [];
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploader"]({
            url: uri,
            maxFileSize: 2 * 1024 * 1024
        });
        this.uploader.onAfterAddingFile = function (fileItem) {
            _this.filePreviewPath = _this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file)));
        };
        this.uploader.onBeforeUploadItem = function (item) {
            item.withCredentials = false;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            //console.log(JSON.parse(response));
            _this.List = [];
            _this.attachmentList.push(JSON.parse(response));
            _this.List = _this.attachmentList;
            _this.imgUploaded = "Image Uploaded";
        };
    }
    RoomResourceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.capacityList = [10, 15, 20, 25, 30, 40, 50];
        this.locationsList = ["Bangalore", "Chennai", "Hyderabad", "Kolkata", "Mumbai", "NCR", "Pune"];
        this.authService.getConfigurations().subscribe(function (configuration) {
            _this.configurations = configuration.data;
            // console.log(this.configurations);
        });
    };
    // capacityChange(capacity){
    // 	this.capacity=capacity;
    // }
    // locationChange(location){
    // 	this.location=location;
    // }
    // configurationChange(configuration){
    // 	if(configuration!=="Select Configuration"){
    // 		this.configuration=configuration;
    // // console.log(configuration);
    // 	}
    // }
    RoomResourceComponent.prototype.roomInsert = function () {
        // this.authService.getConfigurations().subscribe(configuration=>{
        //   this.configurations=configuration.data;
        //   for(var i=0; i<this.configurations.length;i++){
        //     if(this.configurations[i].location==this.location){
        //       this.configuration=this.configurations[i].configuration;
        //       const roomDetails={
        //         roomId:this.roomId,
        //         capacity:this.capacity,
        //         location:this.location,
        //         configuration:this.configuration,
        //         contactAddress:this.contactAddress,
        //         image:this.List
        //       }
        //       if(this.roomId==undefined || this.configuration==undefined || this.contactAddress ==undefined || this.List.length==0){
        //         this.flashMessageService.show('please fill all details',{cssClass:'alert-danger', timeOut: 2000});
        //       }
        //       else{
        //         this.authService.roomResource(roomDetails).subscribe(result=>{
        //           if(result.success){
        //             this.flashMessageService.show('Room successfully inserted',{cssClass:'alert-success', timeOut: 2000});
        //             //this.clear();
        //           }
        //           else{
        //           this.flashMessageService.show('Insertion failed',{cssClass:'alert-danger', timeOut: 2000});
        //           }
        //         })
        //       }
        //     }
        var _this = this;
        //   }
        //   this.clear();
        // });
        var roomDetails = {
            roomId: this.roomId,
            capacity: this.capacity,
            location: this.location,
            configuration: this.configuration,
            contactAddress: this.contactAddress,
            image: this.List
        };
        console.log(roomDetails);
        if (this.roomId == undefined || this.configuration == undefined || this.contactAddress == undefined || this.List.length == 0) {
            this.flashMessageService.show('please fill all details', { cssClass: 'alert-danger', timeOut: 2000 });
        }
        else {
            this.authService.roomResource(roomDetails).subscribe(function (result) {
                if (result.success) {
                    _this.flashMessageService.show('Room successfully inserted', { cssClass: 'alert-success', timeOut: 2000 });
                    //this.clear();
                }
                else {
                    _this.flashMessageService.show('Insertion failed', { cssClass: 'alert-danger', timeOut: 2000 });
                }
            });
        }
    };
    RoomResourceComponent.prototype.clear = function () {
        this.filePreviewPath = "";
        this.roomId = "";
        this.contactAddress = "";
        this.List = null;
        this.imgUploaded = "";
    };
    RoomResourceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-room-resource',
            template: __webpack_require__("./src/app/room-resource/room-resource.component.html"),
            styles: [__webpack_require__("./src/app/room-resource/room-resource.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]])
    ], RoomResourceComponent);
    return RoomResourceComponent;
}());



/***/ }),

/***/ "./src/app/search-form/search-form.component.css":
/***/ (function(module, exports) {

module.exports = ":host /deep/ ng2-datepicker {\n\n.datetpicker-container .datepicker-calendar .datepicker-calendar-container {\nbackground-color: black !important;\n}\n\n}"

/***/ }),

/***/ "./src/app/search-form/search-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (submit)=\"checkAvailable()\">\n        <div class=\"form-group\">\n          <label for=\"from_date\">Start Date </label>\n          <div class=\"input-group\">\n            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"start\" [(ngModel)]=\"start\" ngbDatepicker #d=\"ngbDatepicker\" (ngModelChange)=\"valuechange($event)\" [minDate]=\"minDate\" (click)=\"d.toggle()\" readonly>\n            <div class=\"input-group-append\">\n              <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\"> <img src=\"../../assets/images/ngb.png\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/> </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"from_date\">End Date </label>\n          <div class=\"input-group\">\n            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"end\" [(ngModel)]=\"end\" ngbDatepicker #da=\"ngbDatepicker\" [minDate]=\"minDate\" (click)=\"da.toggle()\" (ngModelChange)=\"valuechange1($event)\" readonly>\n            <div class=\"input-group-append\">\n              <button class=\"input-group-addon\" (click)=\"da.toggle()\" type=\"button\"> <img src=\"../../assets/images/ngb.png\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/> </button>\n            </div>\n          </div>\n        </div>\n        \n        <div class=\"form-group\">\n            <label for=\"exampleFormControlSelect1\">Seater</label>\n            <select  class=\"form-control\" id=\"exampleFormControlSelect1\" [(ngModel)]=\"capacity\" name=\"capacity\" readonly>\n              <option [ngValue]=\"null\" >Select Category</option>\n              <option *ngFor=\"let item of capacityList\">{{item}}</option>\n            </select>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleFormControlSelect1\">Location</label>\n            <select class=\"form-control\" id=\"exampleFormControlSelect1\" [(ngModel)]=\"location\" name=\"location\" readonly>\n              <option [ngValue]=\"null\" hidden >select location</option>\n              <option *ngFor=\"let item of locationsList\">{{item}}</option>\n            </select>  \n        </div>\n        <div class=\"form-group\">\n            <label for=\"configurations\">Configuration</label>\n            <select class=\"form-control\" id=\"configurations\" [(ngModel)]=\"configuration\" name=\"configuration\" readonly>\n              <option [ngValue]=\"null\">Select Configuration</option>\n              <option *ngFor=\"let item of configurations | configuration:location;\">{{item.configuration}}</option>\n            </select>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Check Availability</button>\n      </form>\n    </div>\n    <div class=\"col-md-6\">\n      <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\" [minDate]=\"minDate\"></ngb-datepicker>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/search-form/search-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
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
    function SearchFormComponent(authService, router, datepipe, flashMessageService) {
        this.authService = authService;
        this.router = router;
        this.datepipe = datepipe;
        this.flashMessageService = flashMessageService;
        this.location = "Bangalore";
        this.capacity = 10;
        this.minDate = { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() };
        this.model = { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() };
    }
    SearchFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.capacityList = [10, 15, 20, 25, 30, 40, 50];
        this.locationsList = ["Bangalore", "Chennai", "Hyderabad", "Kolkata", "Mumbai", "NCR", "Pune"];
        this.authService.getConfigurations().subscribe(function (configuration) {
            _this.configurations = configuration.data;
            // console.log(this.configurations);
        });
    };
    SearchFormComponent.prototype.valuechange = function (newValue) {
        this.startDate = this.datepipe.transform(newValue.year + "-" + newValue.month + "-" + newValue.day, 'yyyy-MM-dd');
        console.log(this.startDate);
    };
    SearchFormComponent.prototype.valuechange1 = function (newValue) {
        this.endDate = this.datepipe.transform(newValue.year + "-" + newValue.month + "-" + newValue.day, 'yyyy-MM-dd');
        console.log(this.endDate);
    };
    SearchFormComponent.prototype.checkAvailable = function () {
        // const checkdata={
        //   location:this.location,
        //    startDate:this.startDate,
        //    endDate:this.endDate
        // }
        // //console.log(checkdata);
        // localStorage.setItem('checkData',JSON.stringify(checkdata));
        //console.log(this.location);
        this.router.navigate(['available']);
    };
    SearchFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search-form',
            template: __webpack_require__("./src/app/search-form/search-form.component.html"),
            styles: [__webpack_require__("./src/app/search-form/search-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["DatePipe"],
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
        // console.log(status)
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:5000/api/users/updatePrevBooking', status, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateBooking = function (status) {
        // console.log(status)
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:5000/api/users/updateBooking', status, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.InsertConfigurations = function (config) {
        // console.log(status)
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:5000/api/users/configurations', config, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getConfigurations = function () {
        return this.http.get('http://localhost:5000/api/users/getConfigurations')
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getAvailableRooms = function () {
        return this.http.get('http://localhost:5000/api/users/getAvailableRooms')
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.roomResource = function (rooms) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:5000/api/users/roomResource', rooms, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.bookingRooms = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:5000/api/users/prevBooking', user, { headers: headers })
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