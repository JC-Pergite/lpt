webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".aboutInfo {\n    background-image: url('/assets/about.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    min-height: 650px;\n    height: 100%;\n    color: gainsboro;\n    margin-top: -1.6em;\n}\n\n.aboutContainer {\n\tbackground-color: rgba(33, 28, 25, 0.68);\n    border-radius: 6px;\n\twidth: 40%;\n    top: 11em;\n    height: 23.5em;\n    position: relative;\n    left: 30%;\n    text-align: center;\n}\n\n.reverse {\n\tborder-bottom-color: #6c6ce2;\n\topacity: .70;\n}\n\n.switch {\n\topacity: .70;\n\tborder-bottom-color: #8a8783;\n}\n\nh3.aboutChoice:hover {\n\tcolor: ghostwhite;\n\topacity: .90;\n}\n\n.aboutChoice:not(:hover) {\n\topacity: .50;\n\tcolor: ghostwhite;\n\tborder-bottom-color: #6c6ce2;\n}\n\nh3.aboutChoice {\n\tcursor: pointer;\n}\n\nh3 {\n\tfont-size: 1.7em !important;\n\tborder-bottom: 1px solid;\n\tborder-bottom-color: #8a8783;\n\tcolor: #6c6ce2;\n}\n\nh3.aboutMsg {\n    width: 9em;\n    margin-left: 25%;\n    margin-bottom: -.15em;\n    padding-top: 1.3em;\n}\n\nh3.aboutChef {\n\twidth: 6.5em;\n\tmargin-top: .6em;\n\tmargin-left: 32%;\n}\n\np {\n\tpadding: 1.4em;\n    font-family: 'Bilbo+Swash+Caps', cursive;\n}\n\np:first-letter {\n\tfont-size: 1.4em;\n}\n\np.message {\n\tfont-size: 1.2em;\n    padding-top: 3em;\n}\n\np.bio {\n   font-size: 1.1em;\t\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.chefBio = false;
        this.ourMsg = true;
        this.active = true;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.isActive = function () {
        if (this.active == true) {
            this.chefBio = false;
            this.ourMsg = true;
        }
        if (this.active == false) {
            this.ourMsg = false;
            this.chefBio = true;
        }
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'lpt-about',
        template: "\n\t<div class=\"aboutInfo\">\n\t\t<div class=\"aboutContainer\">\n\t\t\t<h3 class=\"aboutMsg\" (click)=\"active = true; isActive()\" \n      [ngClass]=\"{'aboutChoice' : !active, 'switch' : chefHover && active == true}\" \n      (mouseover)=\"msgHover=true\" (mouseleave)=\"msgHover=false\"> \n        Our Message\n      </h3>\n\t\t\t<h3 class=\"aboutChef\" (click)=\"active = false; isActive()\"\n      [ngClass]=\"{'aboutChoice' : active, 'reverse' : msgHover && !active}\" \n       (mouseover)=\"chefHover=true\" (mouseleave)=\"chefHover=false\">\n        Our Chef\n      </h3>\n\t\t\t<p class=\"message\" *ngIf=\"ourMsg == true && !chefBio\">\n\t\t\t\tThere's but one goal that matters: transforming dining from being part of the rut,\n\t\t\t\tto being part of the dream.\n\t\t\t</p>\n\t\t\t<p class=\"bio\" *ngIf=\"chefBio == true && !active\">\n\t\t\t\t\"A meal should be that of decadent simplicity, or minimilistic extravagance.\" - \n\t\t\t\tChef Furansu brings his mantra to life in each and every one of his creations.\n\t\t\t\tBorn to a Japanese mother and a French father, Chef Furansu achieves the ideal m\u00E9lange\n\t\t\t\tof both cultures in his cuisine; thus begetting incomparable gastronomic satiation. \n\t\t\t</p>\n\t\t</div>\t\t\n\t</div>\n  ",
        styles: [__webpack_require__("./src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wiki_popup_wiki_component__ = __webpack_require__("./src/app/wiki/popup-wiki.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_popup_pics_component__ = __webpack_require__("./src/app/menu/popup-pics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_popup_instruct_component__ = __webpack_require__("./src/app/menu/popup-instruct.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: 'viewDish', component: __WEBPACK_IMPORTED_MODULE_3__menu_popup_pics_component__["a" /* PopupPicsComponent */], outlet: 'dishPopup' },
    { path: 'wikiSearch', component: __WEBPACK_IMPORTED_MODULE_2__wiki_popup_wiki_component__["a" /* PopupWikiComponent */], outlet: 'wikiPopup' },
    { path: 'instruct', component: __WEBPACK_IMPORTED_MODULE_4__menu_popup_instruct_component__["a" /* PopupInstructComponent */], outlet: 'guidePopup' },
    { path: 'about', redirectTo: 'about' },
    { path: 'menu', redirectTo: 'menu', pathMatch: 'full' },
    { path: 'contact-reserve', redirectTo: 'contact-reserve' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav.navbar.navbar-default {\n\tz-index: 1300;\n    background-color: #272b30 !important;\n}\n\ndiv.navbar-header {\n    margin-left: 75%;\n}\n\n.active:hover {\n    background-color: rgba(228, 228, 234, 0.3);\n}\n\n.active:not(:hover) {\n    background-color: transparent;\n    border: none !important;\n}\n\n.navbar-default .navbar-collapse {\n    margin-top: -4em;\n    border-bottom-color: #989595;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}    \n\nli.nav-item {\n    margin-right: .2em;\n    font-size: .8em;\n}\n\nli.nav-item:hover {\n    background-color: rgba(228, 228, 234, 0.3);\n}\n\na.mainLinks {\n\tcolor: lavender !important;\n\tletter-spacing: .03em;\n\tfont-size: 1.3em;\n}\n\na.mainLinks:hover, a.mainLinks:focus {\n    text-decoration: none !important;\n}\n\nhr {\n    border-top: 1px solid rgba(171, 168, 160, 0.59);\n}\n\nh1.navbar-brand {\n    text-align: center;\n    position: relative;\n    font-family: 'Niconne', cursive;\n    color: #cec5b2 !important;\n    text-shadow: 0px 0px 7px #827e76;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <h1 class=\"navbar-brand\">LPT\n        <hr>\n        <span>Le Petite Tokyo</span>\n      </h1>\n    </div>\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse\">\n        <ul class=\"nav nav-tabs\">\n          <li class=\"nav-item\">\n          <a class=\"nav-link mainLinks\" data-toggle=\"tab\" [routerLink]=\"['/about']\">About</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link mainLinks\" data-toggle=\"tab\"  [routerLink]=\"['/menu']\">Menu</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link mainLinks\" data-toggle=\"tab\"[routerLink]=\"['/contact-reserve']\">Contact / Reserve\n            </a>\n          </li>\n        </ul>\n      </div>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n<router-outlet name=\"wikiPopup\"></router-outlet>\n<router-outlet name=\"dishPopup\"></router-outlet>\n<router-outlet name=\"guidePopup\"></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rxjs_operators__ = __webpack_require__("./src/app/rxjs-operators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'lpt';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_0" /* Component */])({
        selector: 'lpt-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_module__ = __webpack_require__("./src/app/main.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wiki_popup_wiki_component__ = __webpack_require__("./src/app/wiki/popup-wiki.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_popup_pics_component__ = __webpack_require__("./src/app/menu/popup-pics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menu_popup_instruct_component__ = __webpack_require__("./src/app/menu/popup-instruct.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Third-Party Modules


//Feature Modules






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_8__wiki_popup_wiki_component__["a" /* PopupWikiComponent */], __WEBPACK_IMPORTED_MODULE_9__menu_popup_pics_component__["a" /* PopupPicsComponent */], __WEBPACK_IMPORTED_MODULE_10__menu_popup_instruct_component__["a" /* PopupInstructComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbTimepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__main_module__["a" /* MainModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.reserveInfo {\n    left: 20%;\n    position: relative;\n    height: 80%;\n    width: 60%;\n    top: 10%;\n    text-align: justify;\n    border: 1px solid;\n    border-radius: 8px;\n    background-color: rgba(23, 27, 35, 0.74);\n}\n\np.guestDetails {\n    font-style: italic;\n    margin: 2em 2em 2em 2em;\n    color: rgba(240, 255, 255, 0.92);\n    text-shadow: 1px 1px 8px #e1e4d8;\n    font-size: 1.3em;\n}\n\np.guestDetails:first-letter {\n    text-transform: capitalize;\n    font-size: 1.9em;\n}    \n\ndiv#tickTok.form-group {\n\tposition: absolute;\n\tleft: 85%;\n    top: 10.3em !important;\n    opacity: .70;\n}\n\n.whichMeal {\n    border-radius: 3px;\n    color: #bdb9b9;\n    text-shadow: 0px 0px 7px rgba(243, 232, 211, 0.55);\n    position: relative;\n    text-indent: -.2em;\n    width: 13em;\n    text-align: left;\n    left: 41%;\n    top: 1em;\n    font-weight: 200;\n}\n\np.beOurGuest {\n    font-family: 'Bilbo+Swash+Caps', cursive;\n}\n\np.beOurGuest span:not(.dinnerLunch) {\n    line-height: 4em;\n}\n\nspan#allergyType:last-child::before {\n    content: ' and ';\n}\n\nspan#allergyType {\n    font-weight: bold;\n}\n\nspan.lunchDinner {\n    font-weight: 100;\n    color: #efe4ce;\n    text-shadow: 0px 0px 7px rgba(243, 232, 211, 0.55);\n    box-shadow: inset 0px 0px 6px 3px #6f5f5f;\n    border-radius: 4px;\n    padding-top: 5px;\n    padding-left: 9px;\n    padding-right: 14px;\n    padding-bottom: 6px;\n    cursor: pointer;\n}\n\nspan.lunchDinner:hover {\n    padding-top: 10px;\n    padding-left: 12px;\n    padding-right: 17px;\n    padding-bottom: 9px;\n}\n\nspan.dinnerLunch {    \n    color: #826969;\n    text-shadow: 1px 2px 8px #130404; \n    box-shadow: inset 0px 0px 8px 1px #efe4ce;\n    border-radius: 4px;\n    padding-top: 5px;\n    padding-left: 9px;\n    padding-right: 7px;\n    padding-bottom: 6px;\n    cursor: pointer;\n}\n\nspan.opaque:not(:hover) {\n    opacity: .30;\n}\n\nspan.dinnerLunch:hover {\n    padding-top: 10px;\n    padding-left: 12px;\n    padding-right: 10.5px;\n    padding-bottom: 9px;\n}\n\np.meal {\n    position: relative;\n    left: 2.2em;\n    color: antiquewhite;\n}\n\n.reservation {\n    background-image: url(https://static.pexels.com/photos/157054/pexels-photo-157054.jpeg);\n    background-attachment: fixed;\n    background-size: cover;\n    min-height: 700px;\n    height: 100%;\n    margin-top: -1.6em;\n}\n\ninput {\n\tborder-color: #818ae0 !important;\n    background-color: transparent !important;\n    text-align: center;\n}\n\ninput::-webkit-input-placeholder {\n\tcolor: rgba(222, 221, 224, 0.74);\n    font-size: .8em;\n}\n\ninput:-ms-input-placeholder {\n\tcolor: rgba(222, 221, 224, 0.74);\n    font-size: .8em;\n}\n\ninput::placeholder {\n\tcolor: rgba(222, 221, 224, 0.74);\n    font-size: .8em;\n}\n\ninput.ng-invalid:not(:focus) {\n\tfont-style: italic;\n}\n\ninput.form-control.is-valid.ng-valid:hover {\n\tborder: 1px solid #818ae0 !important;\n}\n\ninput.form-control.is-valid.ng-valid {\n\tcolor: #636adc;\n\tborder: none;\n\tbox-shadow: none;\n    text-transform: capitalize;\n}\n\nlabel.col-lg-2.control-label {\n    display: unset;\n    margin-left: 1em;\n    border-bottom: 1px solid;\n    padding-bottom: .1em;\n    color: #bdb6b6;\n    font-weight: 200;\n}\n\ndiv#reserveFormValid.reserveForm {\n    background-color: transparent;\n}\n\n.reserveForm {\n\tbackground-color: rgba(33, 28, 25, 0.68);\n    border-radius: 6px;\n    width: 80%;\n    top: 2.5em;\n    height: 37em;\n    position: relative;\n    left: 9.5%;\n}\n\ndiv.col-lg-10.name {\n\tmargin-top: 1em;\n}\n\n.nameAndParty{\n\twidth: 15em;\n\tposition: relative;\n\tleft: 12%;\n    top: 4.5em;\n}\n\n#calendarChoice {\n    position: absolute;\n    width: 14em;\n    left: 65%;\n    top: 32.5%;\n    opacity: .58;\n    cursor: pointer;\n}\n\ndiv#submitButton.col-lg-10.col-lg-offset-2 {\n    margin-left: 16%;\n    position: relative;\n    top: 11em;\n}\n\nbutton.btn.btn-outline-success:hover {\n\tcolor: #fff;\n}\n\n.btn[disabled] {\n\ttext-decoration: line-through;\n\topacity: .35 !important;\n    color: springgreen;\n}\n\ndiv#tooEarly {\n    margin-left: -2em;\n}\n\ndiv#tooLate {\n    margin-left: -3em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reservation\">\n  <div *ngIf=\"this.menuService.reservation.length; then validForm else fillForm\"></div>\n    <ng-template #validForm>\n      <div id=\"reserveFormValid\" class=\"reserveForm\">\n        <div class=\"reserveInfo\">\n          <div *ngIf=\"confirmation?.allergies.length\">\n            <p class=\"guestDetails allergicTo\">chef Furansu will certainly make note of staying away from \n              mediocracy, \n             <span id=\"allergyType\" *ngFor=\"let allergy of confirmation?.allergies\"> {{allergy?.type}}, \n             </span>\n              as per expected. You need only savor the moment; leave the rest to us. \n            </p> \n          </div>\n          <p class=\"guestDetails\">{{confirmation['name']}}, rest assured we'll do our upmost to offer you, and your party of  {{confirmation['party']}},  an unrivaled dinning experience on {{confirmation['date']}} at {{confirmation.time}}. <br>  -  Arigato degozaimasu\n          </p>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #fillForm>\n      <div class=\"reserveForm\">\n        <div class=\"whichMeal\">\n          <p class=\"beOurGuest\" (click)=\"mealTime()\">Which shall we serve: \n            <span class=\"lunchDinner\" (click)=\"dinner = false\" [ngClass]=\"{ 'opaque' : dinner == true && dinner != null}\">\n              {{this.meal[0]}} (12 - 16pm) \n            </span> \n            <span class=\"dinnerLunch\" (click)=\"dinner = true\" [ngClass]=\"{ 'opaque' : !dinner && dinner != null }\">\n              {{this.meal[1]}} (19 - 23pm)\n            </span>\n          </p>\n        </div>  \n        <form class=\"form-horizontal\" novalidate (ngSubmit)=\"onSubmit(reserve)\" [formGroup]=\"reserve\">\n          <fieldset>\n          <div class=\"nameAndParty\">\n            <div class=\"form-group party\" has-warning>\n              <label *ngIf=\"party.valid && name.dirty\" for=\"inputParty\" class=\"col-lg-2 control-label\">\n                Number of Guests:\n              </label>\n              <div class=\"col-lg-10\">\n                <input type=\"number\" class=\"form-control is-valid\" id=\"inputSize\"\n                     placeholder=\"Number of Guests\" \n                     formControlName=\"party\"\n                /> \n              </div>\n            </div>\n            <div class=\"form-group\" has-warning>\n              <label *ngIf=\"name.valid && name.touched\" for=\"inputName\" class=\"col-lg-2 control-label\">\n                Reservation Name(s):\n              </label>\n              <div class=\"col-lg-10 name\">\n                <input type=\"text\" class=\"form-control is-valid\" id=\"inputValid\"\n                     placeholder=\"Reservation Name(s)\" formControlName=\"name\" />\n              </div>\n            </div>  \n          </div>  \n            <div class=\"form-group\" id=\"tickTok\">\n              <ngb-timepicker [(ngModel)]=\"time\" [formControl]=\"ctrl\" required></ngb-timepicker>\n                <p class=\"meal\" *ngIf=\"dinner === false\">{{this.meal[0]}}</p>\n                <p class=\"meal\" *ngIf=\"dinner == true\">{{this.meal[1]}}</p>\n              <div *ngIf=\"ctrl.valid && ctrl.dirty\" class=\"small form-text text-success\" id=\"validate\">\n                Excellent choice\n              </div>\n              <div class=\"small form-text text-danger\" id=\"validate\" *ngIf=\"!ctrl.valid\">\n                <div *ngIf=\"ctrl.errors['required']\">Kindly select a time within our lunch hours</div>\n                <div id=\"tooLate\" *ngIf=\"ctrl.errors['tooLate']\">Our apologies; that's too late</div>\n                <div id=\"tooEarly\" *ngIf=\"ctrl.errors['tooEarly']\">Sadly, that's a bit too early</div>\n              </div>\n            </div>\n            <div class=\"form-group\" id=\"calendarChoice\">\n              <div class=\"col-lg-10 col-lg-offset-2\">\n                <my-date-picker name=\"mydate\" [options]=\"myDatePickerOptions\"\n                  formControlName=\"myDate\" placeholder=\"Click Calendar\"></my-date-picker>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div id=\"submitButton\" class=\"col-lg-10 col-lg-offset-2\">\n                <button type=\"submit\" class=\"btn btn-outline-success\" [disabled]=\"reserve.invalid\">\n                  Submit\n               \t</button>\n              </div>\n            </div>\n          </fieldset>\n        </form>\n      </div>  \n    </ng-template>\n</div>  "

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu_service__ = __webpack_require__("./src/app/menu/menu.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = (function () {
    function ContactComponent(fb, menuService, detect) {
        var _this = this;
        this.fb = fb;
        this.menuService = menuService;
        this.detect = detect;
        this.time = { hour: 12, minute: 0 };
        this.myDatePickerOptions = {
            dateFormat: 'mm/dd/yyyy',
        };
        this.dinner = null;
        this.meal = ['Lunch', 'Dinner'];
        this.ctrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', function (control) {
            var value = control.value;
            if (!value) {
                return null;
            }
            if (!_this.dinner && _this.dinner != null) {
                if (value.hour < 12) {
                    return { tooEarly: true };
                }
                if (value.hour > 16) {
                    return { tooLate: true };
                }
            }
            else {
                if (value.hour < 19 && _this.dinner != null) {
                    return { tooEarly: true };
                }
                if (value.hour > 23) {
                    return { tooLate: true };
                }
            }
            return null;
        });
        if (this.menuService.reservation.length) {
            this.confirmation = this.menuService.getReservation()[0];
        }
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.reserve = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].maxLength(9)]],
            party: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required]],
            myDate: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
        });
    };
    Object.defineProperty(ContactComponent.prototype, "name", {
        get: function () { return this.reserve.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactComponent.prototype, "party", {
        get: function () { return this.reserve.get('party'); },
        enumerable: true,
        configurable: true
    });
    ContactComponent.prototype.setDate = function () {
        var date = new Date();
        this.reserve.patchValue({ myDate: {
                date: {
                    year: date.getFullYear(),
                    month: date.getMonth() + 1,
                    day: date.getDate()
                }
            } });
        this.detect.markForCheck();
    };
    ContactComponent.prototype.clearDate = function () {
        this.reserve.patchValue({ myDate: null });
        this.detect.markForCheck();
    };
    ContactComponent.prototype.mealTime = function () {
        if (this.dinner == false) {
            this.time = { hour: 13, minute: 0 };
        }
        else {
            this.time = { hour: 19, minute: 0 };
        }
        this.detect.markForCheck();
    };
    ;
    ContactComponent.prototype.allergyList = function () {
        this.allergies = this.menuService.getAllergies();
        this.detect.markForCheck();
    };
    ContactComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        this.allergyList();
        if (this.ctrl.value['minute'] < 10) {
            var minute = 0 + '' + this.ctrl.value['minute'];
            this.reservationTime = "" + this.ctrl.value['hour'] + ':' + minute;
        }
        else {
            this.reservationTime = "" + this.ctrl.value['hour'] + ':' + this.ctrl.value['minute'] + "";
        }
        this.menuService.makeReservation(value, this.reservationTime);
        this.confirmation = this.menuService.getReservation()[0];
        this.detect.markForCheck();
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'lpt-contact',
        template: __webpack_require__("./src/app/contact/contact.component.html"),
        styles: [__webpack_require__("./src/app/contact/contact.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__menu_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ChangeDetectorRef */]) === "function" && _c || Object])
], ContactComponent);

var _a, _b, _c;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "./src/app/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_routing__ = __webpack_require__("./src/app/main.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu_component__ = __webpack_require__("./src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu_service__ = __webpack_require__("./src/app/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_clickify_pipe__ = __webpack_require__("./src/app/menu/clickify.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wiki_popup_wiki_service__ = __webpack_require__("./src/app/wiki/popup-wiki.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_popup_pics_component__ = __webpack_require__("./src/app/menu/popup-pics.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__main_routing__["a" /* mainRouting */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_4__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_7__menu_clickify_pipe__["a" /* ClickifyPipe */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__menu_menu_service__["a" /* MenuService */], __WEBPACK_IMPORTED_MODULE_8__wiki_popup_wiki_service__["a" /* PopupWikiService */], __WEBPACK_IMPORTED_MODULE_9__menu_popup_pics_component__["a" /* PopupPicsComponent */]]
    })
], MainModule);

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ "./src/app/main.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu_component__ = __webpack_require__("./src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mainRouting; });




var mainRoutes = [
    { path: '', redirectTo: '/menu', pathMatch: 'full' },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_2__menu_menu_component__["a" /* MenuComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__about_about_component__["a" /* AboutComponent */] },
    { path: 'contact-reserve', component: __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__["a" /* ContactComponent */] }
];
var mainRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(mainRoutes);
//# sourceMappingURL=main.routing.js.map

/***/ }),

/***/ "./src/app/menu/clickify.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickifyPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClickifyPipe = (function () {
    function ClickifyPipe(_domSanitizer) {
        this._domSanitizer = _domSanitizer;
    }
    ClickifyPipe.prototype.transform = function (value, args) {
        return this._domSanitizer.bypassSecurityTrustHtml(this.stylize(value));
    };
    ClickifyPipe.prototype.stylize = function (text) {
        var stylizedText = '';
        if (text && text.length > 0) {
            for (var _i = 0, _a = text.split(" "); _i < _a.length; _i++) {
                var t = _a[_i];
                if (t !== 'and' && t !== 'with')
                    stylizedText += "<span>" + t + "</span> ";
                else
                    stylizedText += t + " ";
            }
            return stylizedText;
        }
        else
            return text;
    };
    return ClickifyPipe;
}());
ClickifyPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'clickify'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], ClickifyPipe);

var _a;
//# sourceMappingURL=clickify.pipe.js.map

/***/ }),

/***/ "./src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainContainer {\n    background-image: url('/assets/mainMenu.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    min-height: 900px;\n    height: 100%;\n    margin-top: -1.6em;\n}\n\n.theMenus {\n    background: rgba(39, 43, 48, 0.65);\n    border-radius: 3px;\n    color: seashell;\n    width: 50.6%;\n    padding-bottom: 2em;\n    position: relative;\n    top: -3em;\n}\n\n.form-group {\n    margin-left: 9em;\n    margin-top: -5em;\n}\n\ndiv.allergies {\n    margin-bottom: -1em;\n}\n\n\nlabel > span#label {\n    font-size: .8em !important;\n}\n\nlabel {\n    cursor: pointer;\n    margin-left: 46%;\n}\n\nlabel:first-child:hover{\n    color: #f3a884;\n}\n\nselect[multiple], select[size] {\n    width: 13em;\n}\n\n.mainAllergies {\n    margin-left: .7em;\n    visibility: collapse;\n}\n\nselect#allergyOptions.form-control {\n    background-color: transparent;\n    color: rgba(243, 242, 242, 0.85); \n    margin-left: 2em;\n}\n\nselect#removableAllergy.form-control {\n    position: relative;\n    margin-left: 15em;\n    margin-top: -6.1em;\n    color: #463f3f;\n    background-color: rgba(220, 207, 187, 0.37);\n}\n\noption {\n    text-transform: capitalize;\n    font-weight: 300;\n    cursor: pointer;\n    font-family: 'Raleway', sans-serif;\n}\n\noption.instruction {\n    color: #8d8df1 !important;\n    font-size: .9em;\n}\n\nselect#allergyOptions.form-control>option.instruction:hover {\n    background-color: transparent;\n    cursor: default;\n}\n\noption.removeInstruction {\n    color: #fbd9a6 !important;\n    font-size: .9em;\n}\n\nselect#removableAllergy.form-control>option.removeInstruction:hover {\n    background-color: transparent;\n    cursor: default;\n}\n\nselect#allergyOptions.form-control>option:hover {\n    background-color: rgba(41, 32, 26, 0.55);\n    border-radius: 3px;\n    font-weight: 300;\n    color: rgba(243, 242, 242, 1);\n}\n\nselect#removableAllergy.form-control>option:hover {\n    background-color: rgba(217, 83, 79, 0.78);\n    border-radius: 3px;\n    color: #501c1c;\n    font-weight: 300;\n}\n\nul {\n\tlist-style: none;\n    position: relative;\n}\n\nlabel, li.notAllergic::first-letter {\n    text-transform: capitalize;\n}  \n\nh3.dishName {\n    width: 30%;\n    font-size: 1em;\n    margin-top: -3em;\n    margin-bottom: 1.2em;\n    cursor: pointer;\n    position: relative;\n    font-family: 'Raleway', sans-serif;\n    color: #f3a884;\n}\n\nh3.dishName:hover {\n    text-decoration: underline;\n}\n\nh4 {\n    font-size: .7em;\n    font-family: 'Raleway', sans-serif;\n    position: relative;\n    cursor: pointer;\n    color: cornsilk;\n}\n\ndiv.dishes {\n    margin-top: 13%;\n    position: relative;\n    top: 2.5em;\n}\n\nh2 {\n    font-size: 1.4em;\n    position: relative;\n    color: #d0cac3;\n    top: 11.5em;\n    left: 6%;\n    border-top: 1px solid #a09a90;\n    padding-top: .2em;\n    width: 4em;\n    text-shadow: 0px 0px 7px rgba(243, 232, 211, 0.55);\n    margin-bottom: 3em;\n}\n\nh3#otherMeal {\n    font-size: 1.2em;\n    position: relative;\n    top: 13.5em;\n    left: 6%;\n    cursor: pointer;\n    opacity: .40;\n    width: 4em;\n}\n\nh3#otherMeal:hover {\n    opacity: .80 !important;\n}\n\nli.dishDetails {\n    line-height: .5em;\n    margin-right: 1em;\n}\n\n.strikeThru {\n\ttext-decoration: line-through;\n}\n\nspan#allergyWarning {\n\tposition: relative;\n    left: 29%;\n    top: -2.3em;\n    font-size: .9em;\n    font-weight: 400;\n    font-variant: all-small-caps;\n    color: indianred;\n    text-shadow: 1px 0px 6px brown;\n}\n\np.dishDetails {\n    margin-bottom: 1.7em !important;\n    cursor: pointer;\n    line-height: 1.5em;\n    font-family: 'Bilbo+Swash+Caps', cursive;\n}\n\n.clientAllergies {\n    left: 52%;\n    width: 4.2em;\n    top: 4.5em;\n    margin-top: -5.2em;\n    height: 10.8em;\n    position: relative;\n    transform: skew(4deg, -18deg);\n    cursor: pointer;\n}\n\n.clientAllergies:hover {\n    text-shadow: 0px 0px 7px #f3e8d3;\n}\n\n.btn.btn-outline-danger {\n    margin-left: 1%;\n    font-size: .8em;\n    padding-bottom: 13pt;\n    text-indent: -.27em;\n    height: .5em;\n    width: 1.3em;\n    background: none;\n    border: none;\n    color: #d22b4a;\n}\n\n.btn.btn-outline-danger:hover {\n    font-weight: bold;\n} \n\nli.notAllergic {\n    list-style: none;\n    position: relative;\n    left: 3.7%;\n    top:  -1.4em;\n    font-weight: 700;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContainer\">\n<router-outlet name=\"guidePopup\"></router-outlet>\n<div class=\"theMenus\">\n    <div *ngIf=\"this.lunch == true; then lunchh else dinner\"></div>\n    <ng-template #dinner>\n      <h3 id=\"otherMeal\" (click)=\"dineSelect(1)\">{{meal[1]}}</h3>\n      <h2>{{this.meal[0]}}</h2>\n    </ng-template>\n    <ng-template #lunchh>\n      <h3 id=\"otherMeal\" (click)=\"dineSelect(0)\">{{meal[0]}}</h3>\n      <h2>{{this.meal[1]}}</h2>\n    </ng-template>\n  <div>\n    <div class=\"clientAllergies\" [style.visibility]=\"allergyChecker ? 'hidden' : 'initial'\">\n      <h4 (click)=\"allergyChecker = true\">\n        Allergens\n      </h4>\n    </div>\n    <fieldset>\n      <div class=\"form-group\" [ngClass]=\"{'mainAllergies': !allergyChecker}\" #allergy>\n        <label for=\"exampleSelect2\" (click)=\"allergyChecker = false\">\n        [ <span id=\"label\"> Done </span> ]\n        </label>\n        <select multiple class=\"form-control\" id=\"allergyOptions\" [(ngModel)]=\"allergy.value\" \n        (ngModelChange)=\"allergyCheck(allergy.value[0]); allergy.value=''\">\n          <option class=\"instruction\" value=\"\" disabled>Select Applicable Allergies: </option>\n          <option *ngFor=\"let allergy of allergens\" [ngValue]=\"allergy\" \n          (click)=\"hasAllergies = true\">\n            {{allergy.value}}\n          </option>\n        </select>\n        <div *ngIf=\"hasAllergies || customerAllergies?.length >= 1\">\n          <select multiple class=\"form-control\" id=\"removableAllergy\" [(ngModel)]=\"allergy.value\" \n            (ngModelChange)=\"removeAllergy(allergy.value[0]); allergy.value=''\">\n            <option class=\"removeInstruction\" value=\"\" disabled>\n              Click to Remove an Allergy: \n            </option>\n            <option *ngFor=\"let allergy of customerAllergies\" [ngValue]=\"allergy\">\n              {{allergy.value}}\n            </option>\n          </select>\n        </div>\n      </div>\n    </fieldset>\n  </div>  \n\t<div class=\"dishes\" *ngFor=\"let dish of dishes\">\n    <div *ngIf=\"[(dish?.allergic)?.susceptible]; then clientAllergies\"></div>\n    <ng-template #clientAllergies>\n\t\t  <ul *ngFor=\"let dishAllergies of dish?.allergic\">\n  \t\t\t<li class=\"dishDetails\">\n          <h3 class=\"dishName\" [ngClass]=\"{'strikeThru': dishAllergies.susceptible}\" \n            (click)=\"viewDishPic(dish)\">\n          {{dish?.name}}\n          </h3>\n          <span id=\"allergyWarning\" *ngIf=\"dishAllergies.susceptible\">\n              {{warning}} {{dishAllergies.susceptibleTo}}\n          </span>\n  \t\t\t\t<p class=\"dishDetails\" [innerHTML]=\"dish?.description | clickify\"\n            (click)=\"lookUp($event.toElement.innerHTML)\">\n          </p>\n  \t\t\t</li>\n  \t\t</ul>\n    </ng-template>\n    <router-outlet name=\"dishPopup\"></router-outlet>\n  </div>\n  <router-outlet name=\"wikiPopup\"></router-outlet>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_service__ = __webpack_require__("./src/app/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wiki_popup_wiki_service__ = __webpack_require__("./src/app/wiki/popup-wiki.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popup_pics_component__ = __webpack_require__("./src/app/menu/popup-pics.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuComponent = (function () {
    function MenuComponent(route, menuService, router, detect, wiki, dishPopup) {
        this.route = route;
        this.menuService = menuService;
        this.router = router;
        this.detect = detect;
        this.wiki = wiki;
        this.dishPopup = dishPopup;
        this.meal = ['Lunch', 'Dinner'];
        this.lunch = true;
        this.allergyChecker = false;
        this.hasAllergies = false;
        this.customerAllergies = [];
        this.allergens = [
            { id: 0, value: 'eggs', type: 'eggs', sensitivity: false },
            { id: 1, value: 'fish', type: 'fish', sensitivity: false },
            { id: 2, value: 'gluten', type: 'gluten', sensitivity: false },
            { id: 3, value: 'milk', type: 'milk', sensitivity: false },
            { id: 4, value: 'peanuts', type: 'peanuts', sensitivity: false },
            { id: 5, value: 'shellfish', type: 'shellfish', sensitivity: false },
            { id: 6, value: 'soy', type: 'soy', sensitivity: false },
            { id: 7, value: 'treenuts', type: 'treenuts', sensitivity: false }
        ];
        this.dishes = [];
        this.warning = " **This dish contains ";
        if (this.menuService.allergies.length) {
            this.customerAllergies = this.menuService.getAllergies();
        }
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.menuService.theMenu().length) {
            this.menu = this.menuService.theMenu();
            this.dishes = this.menuService.theMenu()[1].dishes;
            for (var i = 0; i < this.allergens.length; i++) {
                if (this.menuService.allergies.find(function (thing) { return thing == _this.allergens[i].type; })) {
                    this.allergens[i].sensitivity = true;
                    this.detect.markForCheck();
                }
            }
        }
        else {
            this.menuService.getMenu()
                .subscribe(function (menuItems) {
                _this.menu = menuItems;
                _this.dishes = menuItems[1].dishes;
                _this.menuService.setMenu(_this.menu);
                _this.detect.markForCheck();
            });
            this.router.navigate([{ outlets: { guidePopup: ['instruct'] } }]);
            this.detect.markForCheck();
        }
    };
    MenuComponent.prototype.dineSelect = function (mealType) {
        this.dishes = this.menu[mealType].dishes;
        mealType === 1 ? this.lunch = true : this.lunch = false;
        this.detect.markForCheck();
    };
    MenuComponent.prototype.allergyCheck = function (allergy) {
        if (!this.customerAllergies.find(function (allergy) { return allergy.id !== allergy.id; })) {
            allergy['sensitivity'] = true;
            this.menuService.setAllergies(allergy);
            this.customerAllergies = this.menuService.getAllergies();
            this.detect.markForCheck();
            for (var j = 0; j < this.menu.length; j++) {
                for (var i = 0; i < this.menu[j].dishes.length; i++) {
                    var currentDish = this.menu[j].dishes[i].allergens;
                    for (var k = 0; k < currentDish.length; k++) {
                        if (allergy['type'] == currentDish[k]) {
                            var allergicTo = this.menu[j].dishes[i].id;
                            var sensitiveTo = this.menu[j].dishes[allergicTo]['allergic'][0].susceptibleTo;
                            sensitiveTo.push(allergy['type']);
                            var caution = { susceptibleTo: sensitiveTo, susceptible: true };
                            this.menu[j].dishes[allergicTo]['allergic'][0] = caution;
                            this.menuService.updateMenu(this.menu[j].dishes[allergicTo]);
                            this.detect.markForCheck();
                        }
                    }
                }
            }
        }
        this.detect.markForCheck();
    };
    MenuComponent.prototype.removeAllergy = function (allergy) {
        for (var i = 0; i < this.dishes.length; i++) {
            if (allergy['type'] == this.dishes[i].allergens) {
                var allergicTo = this.dishes[i].id;
                var noWorries = { susceptibleTo: '', susceptible: false };
                this.dishes[allergicTo]['allergic'][0] = noWorries;
                this.menuService.updateMenu(this.dishes[allergicTo]);
                this.detect.markForCheck();
            }
        }
        allergy['sensitivity'] = false;
        this.menuService.removeAllergy(allergy);
        this.detect.markForCheck();
    };
    MenuComponent.prototype.viewDishPic = function (dish) {
        this.menuService.dishToView(dish);
        this.router.navigate([{ outlets: { dishPopup: ['viewDish'] } }]);
    };
    MenuComponent.prototype.lookUp = function (term) {
        if (term.length < 15) {
            this.wiki.searchTerm(term);
            this.router.navigate([{ outlets: { wikiPopup: ['wikiSearch'] } }]);
        }
    };
    return MenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], MenuComponent.prototype, "dishes", void 0);
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'lpt-menu',
        template: __webpack_require__("./src/app/menu/menu.component.html"),
        styles: [__webpack_require__("./src/app/menu/menu.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ChangeDetectorRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__wiki_popup_wiki_service__["a" /* PopupWikiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__wiki_popup_wiki_service__["a" /* PopupWikiService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__popup_pics_component__["a" /* PopupPicsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__popup_pics_component__["a" /* PopupPicsComponent */]) === "function" && _f || Object])
], MenuComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "./src/app/menu/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_reservation__ = __webpack_require__("./src/app/shared/reservation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Api_Url = __WEBPACK_IMPORTED_MODULE_5_environments_environment__["a" /* environment */].menuUrl;
var MenuService = (function () {
    function MenuService(http) {
        this.http = http;
        this.menuSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.menuChanges = this.menuSubject.asObservable().distinctUntilChanged();
        this.userMenu = [];
        this.reservation = [];
        this.reserveSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.guestReservation = this.reserveSubject.asObservable().distinctUntilChanged();
        this.dishSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.selectedDish = this.dishSubject.asObservable().distinctUntilChanged();
        this.allergies = [];
        this.allergySubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.allergicReaction = this.allergySubject.asObservable().distinctUntilChanged();
    }
    MenuService.prototype.getMenu = function () {
        return this.http
            .get(Api_Url + '/menus')
            .map(function (res) { return res.json() || {}; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    MenuService.prototype.setMenu = function (menu) {
        this.menuSubject.next(menu);
        this.userMenu.push(menu);
    };
    MenuService.prototype.theMenu = function () {
        return this.menuSubject.value;
    };
    MenuService.prototype.reserve = function (reservation, time) {
        var confirm = new __WEBPACK_IMPORTED_MODULE_4__shared_reservation__["a" /* Reservation */](reservation.name, reservation.party, reservation.myDate.formatted, time, this.allergySubject.value);
        this.reservation.push(confirm);
    };
    MenuService.prototype.updateMenu = function (allergicItem) {
        var originalItem = this.menuSubject.value.indexOf(this.userMenu[0][allergicItem.id]);
        this.userMenu.splice(originalItem, -1);
        this.menuSubject.next(this.userMenu[0]);
    };
    MenuService.prototype.dishToView = function (dish) {
        this.dishSubject.next(dish);
    };
    MenuService.prototype.getDishPic = function () {
        return this.dishSubject.value;
    };
    MenuService.prototype.setAllergies = function (allergy) {
        this.allergies.push(allergy);
        this.allergySubject.next(this.allergies);
    };
    MenuService.prototype.getAllergies = function () {
        return this.allergySubject.value;
    };
    MenuService.prototype.removeAllergy = function (allergy) {
        for (var i = 0; i < this.allergies.length; i++) {
            if (allergy['id'] == this.allergies[i].id) {
                var takeBack = this.allergies.indexOf(this.allergies[i]);
                this.allergies.splice(takeBack, 1);
                this.allergySubject.next(this.allergies);
            }
        }
    };
    MenuService.prototype.makeReservation = function (guestDetails, reservationTime) {
        var confirm = new __WEBPACK_IMPORTED_MODULE_4__shared_reservation__["a" /* Reservation */](guestDetails.name, guestDetails.party, guestDetails.myDate.formatted, reservationTime, this.allergySubject.value);
        this.reservation.push(confirm);
        this.reserveSubject.next(this.reservation);
    };
    MenuService.prototype.getReservation = function () {
        return this.reserveSubject.value;
    };
    return MenuService;
}());
MenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], MenuService);

var _a;
//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ "./src/app/menu/popup-instruct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupInstructComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopupInstructComponent = (function () {
    function PopupInstructComponent(router) {
        this.router = router;
        this.display = 'block';
    }
    ;
    PopupInstructComponent.prototype.closePopup = function () {
        this.router.navigate([{ outlets: { guidePopup: null } }]);
    };
    return PopupInstructComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* HostBinding */])('style.display'),
    __metadata("design:type", Object)
], PopupInstructComponent.prototype, "display", void 0);
PopupInstructComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        template: "\n  <div class=\"modal\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content alert\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">How-To-Use Our Interactive Menu</h5>\n      </div>\n      <div class=\"modal-body\" id=\"instructions\">\n        <p id=\"guideline\"><span class=\"what\">Desire visuals?</span>\n          - Click on the menu item's name for its photo\n        </p>\n        <p id=\"guideline\"><span class=\"what\">Unsure what a menu ingredient is?</span>\n          - Simply click it to activate the in-app Wiki-searches\n        </p>\n        <p id=\"guideline\"><span class=\"what\">Allergy concern?</span> - Click on \"Allergens\" to\n          update the menu so it can notify you of any possible allergy-containing dishes\n        </p>\n      </div>\n      <div class=\"modal-footer instruct\" id=\"instruct-close\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" data-dismiss=\"modal\" (click)=\"closePopup()\">\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n  ",
        styles: [__webpack_require__("./src/app/menu/popup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], PopupInstructComponent);

var _a;
//# sourceMappingURL=popup-instruct.component.js.map

/***/ }),

/***/ "./src/app/menu/popup-pics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_service__ = __webpack_require__("./src/app/menu/menu.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupPicsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopupPicsComponent = (function () {
    function PopupPicsComponent(router, menuService) {
        this.router = router;
        this.menuService = menuService;
        this.display = 'block';
        this.dish = Array(this.menuService.getDishPic());
    }
    PopupPicsComponent.prototype.closePopup = function () {
        this.router.navigate([{ outlets: { dishPopup: null } }]);
    };
    return PopupPicsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* HostBinding */])('style.display'),
    __metadata("design:type", Object)
], PopupPicsComponent.prototype, "display", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], PopupPicsComponent.prototype, "dish", void 0);
PopupPicsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        template: "\n  <div class=\"modal dishPic\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content dishPic\">\n        <div class=\"modal-body\" *ngFor=\"let ingredient of dish\">\n          <img src=\"{{dish[0].photoUrl}}\" alt=\"Responsive image\">\n        </div>\n        <div class=\"modal-footer noInstruct\">\n          <h5 class=\"popupTitle\">{{dish[0].name}}</h5>\n          <button type=\"button\" class=\"btn btn-outline-primary dishPic\" data-dismiss=\"modal\"\n          (click)=\"closePopup()\">\n            Close\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>   \n  ",
        styles: [__webpack_require__("./src/app/menu/popup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__menu_service__["a" /* MenuService */]) === "function" && _b || Object])
], PopupPicsComponent);

var _a, _b;
//# sourceMappingURL=popup-pics.component.js.map

/***/ }),

/***/ "./src/app/menu/popup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.modal {\n    display: inline-block !important;\n    left: 49%;\n    top: 18%;\n    height: 80%;\n    position: fixed;\n}\n\np#guideline {\n    font-family: 'Raleway', sans-serif;\n}\n\ndiv.modal-content {\n    width: 70%;\n    margin-left: -1%;\n    border-left: 1px dotted papayawhip; \n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 6px;\n    border-top-right-radius: 6px;\n    background-color: rgba(234, 227, 223, 0.65); \n}\n\ndiv.modal-content.alert {\n    height: 27em;   \n}\n\nbutton.btn.btn-outline-danger {\n    font-weight: 300;\n\tfont-size: 1.1em;\n    border-radius: 5px;\n}\n\nbutton.btn.btn-outline-danger:hover {\n    background-color: #d9534f !important;\n    border-color: #d9534f !important;  \n}\n\nimg {\n    border: 1px solid rgba(136, 133, 113, 0.95);\n    width: 310px;\n    height: 280px;\n    margin-left: .2em;\n    border-top-left-radius: 1px;\n    border-bottom-left-radius: 1px;\n    border-bottom-right-radius: 6px !important;\n    border-top-right-radius: 6px;\n    box-shadow: -2px 1px 13px 1px #867c70;\n}\n\n.modal-footer {\n    border-top: 1px solid #56585a;\n}\n\n#instruct-close.modal-footer.instruct {\n    height: 3em !important;\n    margin-top: -3em;\n}\n\n.modal-footer.noInstruct {\n    height: 3em;\n}\n\n.modal-header {\n    margin-top: -1em;\n    font-family: 'Raleway', sans-serif;\n    border-bottom: 1px solid #6d7075;\n}\n\nh5.popupTitle {\n    margin-right: 4.5em;\n    font-size: 1em;\n    color: #9a4711;\n}\n\n#instructions.modal-body {\n    position: relative;\n    padding: 15px;\n    border-radius: 4px;\n    color:  #282b31;\n    width: 100%;\n    margin-bottom: 1.8em;\n    margin-top: .8em;\n}\n\nspan.what {\n    color: #3651e6;\n}\n\nh5.modal-title {    \n    font-size: 1.2em;\n    border-radius: 3px;\n    color: #282b31;\n    text-indent: .5em;\n    text-align: center;\n    padding-top: .3em;\n    padding-bottom: .3em;\n}\n\ndiv#instruct-close>button.btn.btn-outline-primary {\n    margin-top: .7em;\n}\n\n.btn-outline-primary {\n    border-color: #584e46 !important;\n}\n\n.btn-outline-primary:not(:hover) {\n    color: #282b31 !important;\n}\n\n.btn.btn-outline-primary:hover {\n    color: floralwhite;\n    background-color: #282b31 !important;\n}\n\n@media all and (max-width: 63em) {\n    div.modal {\n    left: 51%;\n  }\n}\n\n@media all and (min-width: 73em) {\n    div.modal {\n    left: 45%;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/rxjs-operators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__("./node_modules/rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeWhile__ = __webpack_require__("./node_modules/rxjs/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_distinctUntilChanged__);
//for statics

// Observable class extensions


//operators










//# sourceMappingURL=rxjs-operators.js.map

/***/ }),

/***/ "./src/app/shared/reservation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reservation; });
var Reservation = (function () {
    function Reservation(name, party, date, time, allergies) {
        this.name = name;
        this.party = party;
        this.date = date;
        this.time = time;
        this.allergies = allergies;
    }
    return Reservation;
}());

//# sourceMappingURL=reservation.js.map

/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular4_datepicker_src_my_date_picker_my_date_picker_module__ = __webpack_require__("./node_modules/angular4-datepicker/src/my-date-picker/my-date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3_angular4_datepicker_src_my_date_picker_my_date_picker_module__["a" /* MyDatePickerModule */], __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbTimepickerModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3_angular4_datepicker_src_my_date_picker_my_date_picker_module__["a" /* MyDatePickerModule */], __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbTimepickerModule */]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "./src/app/wiki/popup-wiki.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\n    background-color: rgba(39, 43, 48, 0.68);\n    color: #fff998;\n}\n\np {\n    font-size: 0.7em;\n    text-align: center;\n    color: #94a2ef;\n    margin-bottom: .2em;\n}\n\ndiv.modal.wiki {\n    position: relative !important;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    width: 90%;\n    min-width: 23em;\n    margin-top: -5.8em;\n    right: 0;\n    bottom: 0;\n    left: 46.5em;\n    top: -55.5em;\n}\n\ndiv.modal-dialog {\n    position: relative;\n}\n\ndiv.modal-content.wiki {\n    background-color: rgba(239, 231, 218, 0.58);\n    font-family: 'Raleway', sans-serif;\n    max-height: 31em;\n}\n\nh4.wikiTitle {\n    font-size: 1em;\n    color: #a4a4ff;\n    border-bottom: 1px solid rgb(121, 125, 158);\n}\n\ndiv.modal-body.header {\n    text-align: center;\n    padding-bottom: 1.85em;\n}\n\ndiv.modal-body {\n    height: 1em;\n}\n\nul.wiki{\n    -ms-flex: 1 0 12em;\n        flex: 1 0 12em;\n}\n\nli {\n\tfont-size: .8em;\n    color: #2b2f38;\n\tlist-style-type: circle;\n    overflow-wrap: break-word;\n    border-radius: 4px;\n    padding-left: .5em;\n}\n\nli:hover {\n    cursor: pointer;\n    background-color: rgba(245, 245, 245, 0.89);\n    color: #6b6868;\n} \n\nli::first-letter {\n    text-transform: capitalize;\n}    \n\nbutton.btn.btn-outline-danger {\n    position: relative;\n    height: 3em;\n    border-radius: 3px;\n    color: #921a16;\n    border-color: transparent;\n}\n\nbutton.btn.btn-outline-danger:hover {\n    color: #fff;\n    background-color: #d9534f;\n    border-color: #d9534f;\n}\n\ndiv.modal-footer {\n    border-top: 1px solid #3c3d46;\n    background-color: rgba(39, 43, 48, 0.7);\n    margin-top: 1.3em;;\n    border-radius: 2px;\n    max-height: 6.5em;\n}\n\n\n@media all and (max-height: 38em) {\n    div.modal.wiki {\n        top: -65em;\n        margin-top: -1em;\n    }   \n}\n\n@media all and (max-width: 68em) {\n    div.modal.wiki {\n        left: 38em;\n    }   \n}\n\n@media all and (min-width: 71em) {\n    div.modal.wiki {\n        left: 43.5em;\n    }   \n}\n\n@media all and (min-width: 74.5em) {\n    div.modal.wiki {\n        left: 42.5em;\n    }   \n}\n\n@media all and (min-width: 76em) {\n    div.modal.wiki {\n        left: 55.5em;\n    }   \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/wiki/popup-wiki.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popup_wiki_service__ = __webpack_require__("./src/app/wiki/popup-wiki.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupWikiComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopupWikiComponent = (function () {
    function PopupWikiComponent(router, popupWikiService) {
        this.router = router;
        this.popupWikiService = popupWikiService;
        this.display = 'flex';
        this.position = 'fixed';
        this.term = this.popupWikiService.getTerm();
    }
    PopupWikiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.popupWikiService.search(this.term).subscribe(function (results) { _this.dish = results; }, function (error) {
            'Not Found';
        }, function () { if (!_this.dish.length) {
            _this.notFound();
        } });
    };
    PopupWikiComponent.prototype.notFound = function () {
        this.description = ["Sorry, there's no Wiki for this yet."];
    };
    PopupWikiComponent.prototype.investigate = function (ingredient) {
        var _this = this;
        this.wikindex = this.dish.indexOf(ingredient);
        this.popupWikiService.define(ingredient)
            .subscribe(function (termInfo) { _this.description = termInfo; }, function (error) {
            'Not Found';
        }, function () { if (!_this.description.length) {
            _this.notFound();
        } });
    };
    PopupWikiComponent.prototype.closePopup = function () {
        this.router.navigate([{ outlets: { wikiPopup: null } }]);
    };
    return PopupWikiComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* HostBinding */])('style.display'),
    __metadata("design:type", Object)
], PopupWikiComponent.prototype, "display", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* HostBinding */])('style.position'),
    __metadata("design:type", Object)
], PopupWikiComponent.prototype, "position", void 0);
PopupWikiComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        template: " \n <div class=\"modal wiki\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content wiki\">\n          <div class=\"modal-body header\">\n            <h4 class=\"wikiTitle\">Wikipedia Results</h4>\n          </div>  \n          <div class=\"modal-body\" *ngFor=\"let ingredient of dish; let i = index\">\n            <ul>\n              <li (click)=\"investigate(ingredient)\" \n              [ngClass]=\"{ 'selected': i === wikindex }\"> \n                {{ingredient}}\n              </li>\n            </ul>  \n          </div>  \n          <div class=\"modal-footer noInstruct\">\n            <p>{{description}}</p>\n          </div>\n          <button type=\"button\" class=\"btn btn-outline-danger\" \n            data-dismiss=\"modal\" (click)=\"closePopup()\">\n              Cancel\n          </button>\n      </div>\n  </div>   \n  ",
        styles: [__webpack_require__("./src/app/wiki/popup-wiki.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__popup_wiki_service__["a" /* PopupWikiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__popup_wiki_service__["a" /* PopupWikiService */]) === "function" && _b || Object])
], PopupWikiComponent);

var _a, _b;
//# sourceMappingURL=popup-wiki.component.js.map

/***/ }),

/***/ "./src/app/wiki/popup-wiki.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupWikiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopupWikiService = (function () {
    function PopupWikiService(jsonp) {
        this.jsonp = jsonp;
        this.wikiUrl = 'https://en.wikipedia.org/w/api.php';
        this.newTerm = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]('');
    }
    PopupWikiService.prototype.searchTerm = function (term) {
        this.newTerm.next(term);
    };
    PopupWikiService.prototype.getTerm = function () {
        return this.newTerm.value;
    };
    PopupWikiService.prototype.search = function (term) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('search', term);
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get(this.wikiUrl, { search: params })
            .map(function (response) { return response.json()[1]; });
    };
    PopupWikiService.prototype.define = function (selectedTerm) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('search', selectedTerm);
        params.set('action', 'opensearch');
        params.set('rvprop', 'content');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get(this.wikiUrl, { search: params })
            .map(function (response) { return response.json()[2][0]; });
    };
    return PopupWikiService;
}());
PopupWikiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */]) === "function" && _a || Object])
], PopupWikiService);

var _a;
//# sourceMappingURL=popup-wiki.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    menuUrl: 'http://localhost:3000'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map