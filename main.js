(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* #myVideo {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    min-width: 100%; \r\n    min-height: 100%;\r\n  }\r\n\r\n  .content {\r\n    position: fixed;\r\n    bottom: 0;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    color: #f1f1f1;\r\n    width: 100%;\r\n    padding: 20px;\r\n  } */\r\n\r\n  header {\r\n    position: relative;\r\n    background-color: black;\r\n    height: 100vh;\r\n    min-height: 25rem;\r\n    width: 100%;\r\n    overflow: hidden;\r\n  }\r\n\r\n  header .test {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    width: auto;\r\n    height: auto;\r\n    z-index: 0;\r\n    -webkit-transform: translateX(-50%) translateY(-50%);\r\n    transform: translateX(-50%) translateY(-50%);\r\n  }\r\n\r\n  header .container {\r\n    position: relative;\r\n    z-index: 2;\r\n    margin-left:0;\r\n  }\r\n\r\n  .home-text{\r\n      margin-top: 10rem;\r\n  }\r\n\r\n  /* .test{\r\n    top: 50%; \r\n  } */\r\n\r\n  header .overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: black;\r\n    opacity: 0.5;\r\n    z-index: 1;\r\n  }\r\n\r\n  /* @media (pointer: coarse) and (hover: none) {\r\n    header {\r\n      background: url('https://source.unsplash.com/XT5OInaElMw/1600x900') black no-repeat center center scroll;\r\n    }\r\n    header video {\r\n      display: none;\r\n    }\r\n  } */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-top-navigation></app-top-navigation> -->\n<!-- <app-cursoral></app-cursoral> -->\n<!-- <input type=\"text\" #servers>\n<button class=\"btn btn-primary\" (click)=\"addItem(servers.value)\">Add</button>\n<button class=\"btn btn-primary\" (click)=\"save()\"> Save</button>\n<div *ngFor=\" let server of item\">\n  <div>name:{{server.name}}</div>\n  <div>Id:{{server.id}}</div>\n</div> -->\n<app-top-navigation></app-top-navigation> \n<header>\n    <div class=\"overlay\"></div>\n    <div *ngIf=\"true\" class=\"test\"  [innerHTML]=\"getVideoTag()\"></div>\n    <!-- <video playsinline=\"playsinline\" autoplay=\"autoplay\" muted=\"muted\" loop=\"loop\">\n      <source src=\"../assets/Sunset-Desert-Run.mp4\" type=\"video/mp4\">\n    </video> -->\n    <div class=\"container\">\n      <div class=\"align-items-center\">\n        <div class=\"w-100 text-white home-text\"  [ngClass]=\"{'test': shouldTransform }\">\n          <h1 class=\"display-3\">New Way Of Living.</h1>\n          <p class=\"lead mb-0\">Change the way you live life, closer to nature.</p>\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <!-- <video autoplay muted loop id=\"myVideo\">\n    <source src=\"../assets/Sunset-Desert-Run.mp4\" type=\"video/mp4\">\n </video>\n\n<div class=\"content\">\n    <h1>New Way Of Living</h1>\n    <p>Change the way you live life, closer to nature.</p>\n</div> -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.service */ "./src/app/items.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(service, sanitizer) {
        this.service = service;
        this.sanitizer = sanitizer;
        //   item = [{
        //     name : 'one',
        //     capacity: '50',
        //     id : this.generateId()
        //   },
        //   {
        //     name : 'two',
        //     capacity: '50',
        //     id : this.generateId()
        //   },
        // ];
        this.title = 'bootstrap-project';
        this.shouldTransform = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        //  this.service.getItems().subscribe(res => {
        //    const a = res;
        //    console.log( res);
        //  });
    };
    //  generateId () {
    //    return Math.round(Math.random() * 10000);
    //  }
    //  addItem(a) {
    //    this.item.push({
    //       name :  a ? a : 'No Name',
    //       capacity: '50',
    //       id : this.generateId()
    //     }
    //    );
    //  }
    //  save() {
    //    this.service.storeItems(this.item).subscribe(response =>{
    //       console.log(response);
    //     },
    //    error => {
    //      console.log(error);
    //    } );
    //  }
    AppComponent.prototype.getVideoTag = function (file) {
        return this.sanitizer.bypassSecurityTrustHtml("<video width=\"1280\" height=\"720\" autoplay muted loop  playsinline>\n        <source src=\"../assets/Sunset-Desert-Run.mp4\" type=\"video/mp4\">No HTML5 supported.</source>\n     </video>");
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_1__["ItemsService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var test_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! test-library */ "./node_modules/test-library/fesm5/test-library.js");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _top_nav_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./top-nav/top-navigation/top-navigation.component */ "./src/app/top-nav/top-navigation/top-navigation.component.ts");
/* harmony import */ var _cursoral_cursoral_cursoral_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cursoral/cursoral/cursoral.component */ "./src/app/cursoral/cursoral/cursoral.component.ts");
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./items.service */ "./src/app/items.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_4__["TestComponent"],
                _top_nav_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_6__["TopNavigationComponent"],
                _cursoral_cursoral_cursoral_component__WEBPACK_IMPORTED_MODULE_7__["CursoralComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                test_library__WEBPACK_IMPORTED_MODULE_3__["TestLibraryModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [_items_service__WEBPACK_IMPORTED_MODULE_8__["ItemsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cursoral/cursoral/cursoral.component.css":
/*!**********************************************************!*\
  !*** ./src/app/cursoral/cursoral/cursoral.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cursoral/cursoral/cursoral.component.html":
/*!***********************************************************!*\
  !*** ./src/app/cursoral/cursoral/cursoral.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators\" class=\"carousel slide test\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n      <div class=\"carousel-item min-vh-100 active\">\n          <img class=\"d-block w-100\" src=\"../../../assets/one.jpg\" alt=\"First slide\">\n        </div>\n    <div class=\"carousel-item min-vh-100\">\n      <img class=\"d-block w-100\" src=\"../../../assets/photo-1495431088732-09e59535d241.jpg\" alt=\"Third slide\">\n    </div>\n    <div class=\"carousel-item min-vh-100\">\n      <img class=\"d-block w-100\" src=\"../../../assets/photo-1456611984355-c05be968ebe9.jpg\" alt=\"Second slide\">\n    </div>\n   \n  </div> \n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/cursoral/cursoral/cursoral.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/cursoral/cursoral/cursoral.component.ts ***!
  \*********************************************************/
/*! exports provided: CursoralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoralComponent", function() { return CursoralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CursoralComponent = /** @class */ (function () {
    function CursoralComponent() {
    }
    CursoralComponent.prototype.ngOnInit = function () {
    };
    CursoralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cursoral',
            template: __webpack_require__(/*! ./cursoral.component.html */ "./src/app/cursoral/cursoral/cursoral.component.html"),
            styles: [__webpack_require__(/*! ./cursoral.component.css */ "./src/app/cursoral/cursoral/cursoral.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CursoralComponent);
    return CursoralComponent;
}());



/***/ }),

/***/ "./src/app/items.service.ts":
/*!**********************************!*\
  !*** ./src/app/items.service.ts ***!
  \**********************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemsService = /** @class */ (function () {
    function ItemsService(http) {
        this.http = http;
    }
    ItemsService.prototype.storeItems = function (items) {
        return this.http.post('https://architecture-3a613.firebaseio.com/items.json', items);
    };
    ItemsService.prototype.getItems = function () {
        return this.http.get('https://architecture-3a613.firebaseio.com/items.json');
    };
    ItemsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ItemsService);
    return ItemsService;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test{\r\n  margin: 50px auto auto;\r\n  width: 500px;\r\n  border: 1px solid black;\r\n  box-shadow: 5px 10px 8px #888;\r\n}\r\n"

/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"test\">\n  <div *ngFor=\"let car of cars| paginate: { itemsPerPage: 5, currentPage: p }\">\n    <p>{{car}}</p>\n    <hr>\n  </div>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = /** @class */ (function () {
    function TestComponent() {
        this.p = 1;
        this.cars = ['Saab', 'Volvo', 'BMW', 'Saab', 'Volvo', 'BMW', 'Saab', 'Volvo', 'BMW', 'Saab', 'Volvo', 'BMW', 'Saab', 'Volvo', 'BMW'];
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/top-nav/top-navigation/top-navigation.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/top-nav/top-navigation/top-navigation.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/top-nav/top-navigation/top-navigation.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/top-nav/top-navigation/top-navigation.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark sticky-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"#\">RIARCH</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n     </button>\n     <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n       <ul class=\"navbar-nav ml-auto\">\n         <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">About</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">Services</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">Team</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">Connect</a>\n          </li>\n       </ul>\n     </div>\n  </div>\n</nav> \n\n"

/***/ }),

/***/ "./src/app/top-nav/top-navigation/top-navigation.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/top-nav/top-navigation/top-navigation.component.ts ***!
  \********************************************************************/
/*! exports provided: TopNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavigationComponent", function() { return TopNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopNavigationComponent = /** @class */ (function () {
    function TopNavigationComponent() {
    }
    TopNavigationComponent.prototype.ngOnInit = function () {
    };
    TopNavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-navigation',
            template: __webpack_require__(/*! ./top-navigation.component.html */ "./src/app/top-nav/top-navigation/top-navigation.component.html"),
            styles: [__webpack_require__(/*! ./top-navigation.component.css */ "./src/app/top-nav/top-navigation/top-navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopNavigationComponent);
    return TopNavigationComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dantu\Development\bootstrap-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map