webpackJsonp([0,3],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientService = (function () {
    function ClientService(http) {
        this.http = http;
    }
    ClientService.prototype.getClients = function () {
        return this.http.get('http://localhost:3000/api/clients')
            .map(function (res) { return res.json(); });
    };
    ClientService.prototype.saveClient = function (client) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/clients', client, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ClientService.prototype.updateClient = function (client) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/api/clients/' + client._id, client, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ClientService.prototype.deleteClient = function (id) {
        return this.http.delete('http://localhost:3000/api/clients/' + id)
            .map(function (res) { return res.json(); });
    };
    ClientService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ClientService);
    return ClientService;
    var _a;
}());
//# sourceMappingURL=C:/Projects/ckfrontend/src/client.service.js.map

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 340;


/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(450);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Projects/ckfrontend/src/main.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(608),
            styles: [__webpack_require__(607)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Projects/ckfrontend/src/app.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_clients_clients_component__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_client_service__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_clients_clients_component__["a" /* ClientsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_client_service__["a" /* ClientService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Projects/ckfrontend/src/app.module.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_service__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientsComponent = (function () {
    function ClientsComponent(clientService) {
        this.clientService = clientService;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (clients) {
            _this.clients = clients;
        });
        this.isEdit = false;
    };
    ClientsComponent.prototype.onAddSubmit = function () {
        var _this = this;
        var newClient = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            phone: this.phone
        };
        this.clientService.saveClient(newClient).subscribe(function (client) {
            _this.clients.push(client);
            _this.first_name = '';
            _this.last_name = '';
            _this.email = '';
            _this.phone = '';
        });
    };
    ClientsComponent.prototype.onEditSubmit = function () {
        var _this = this;
        var updClient = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            phone: this.phone,
            _id: this._id
        };
        this.clientService.updateClient(updClient).subscribe(function (client) {
            for (var i = 0; i < _this.clients.length; i++) {
                if (client._id == _this.clients[i]._id) {
                    _this.clients.splice(i, 1);
                }
            }
            _this.clients.push(client);
            _this.first_name = '';
            _this.last_name = '';
            _this.email = '';
            _this.phone = '';
        });
    };
    ClientsComponent.prototype.onEditClick = function (client) {
        this.isEdit = true;
        this.first_name = client.first_name;
        this.last_name = client.last_name;
        this.email = client.email;
        this.phone = client.phone;
        this._id = client._id;
    };
    ClientsComponent.prototype.onDeleteClick = function (id) {
        var _this = this;
        this.clientService.deleteClient(id).subscribe(function (client) {
            for (var i = 0; i < _this.clients.length; i++) {
                if (id == _this.clients[i]._id) {
                    _this.clients.splice(i, 1);
                }
            }
        });
    };
    ClientsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'clients',
            template: __webpack_require__(609)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */]) === 'function' && _a) || Object])
    ], ClientsComponent);
    return ClientsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Projects/ckfrontend/src/clients.component.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'navbar',
            template: __webpack_require__(610)
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=C:/Projects/ckfrontend/src/navbar.component.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Projects/ckfrontend/src/environment.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Projects/ckfrontend/src/polyfills.js.map

/***/ }),

/***/ 607:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 608:
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\r\n<div class=\"container\">\r\n    <clients></clients>\r\n</div>"

/***/ }),

/***/ 609:
/***/ (function(module, exports) {

module.exports = "<div class=\"client-form\">\r\n    <div *ngIf=\"isEdit\">\r\n        <form (submit)=\"onEditSubmit()\" class=\"well\">\r\n            <h3>Edit Client</h3>\r\n            <div class=\"form-group\">\r\n                <label>First Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"first_name\" name=\"first_name\" placeholder=\"First Name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Last Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"last_name\" name=\"last_name\" placeholder=\"Last Name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Email</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Phone Number</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"phone\" name=\"phone\" placeholder=\"Phone Number\">\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        </form>\r\n    </div>\r\n\r\n    <div *ngIf=\"!isEdit\">\r\n        <form (submit)=\"onAddSubmit()\" class=\"well\">\r\n            <h3>Add Client</h3>\r\n            <div class=\"form-group\">\r\n                <label>First Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"first_name\" name=\"first_name\" placeholder=\"First Name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Last Name</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"last_name\" name=\"last_name\" placeholder=\"Last Name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Email</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Phone Number</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"phone\" name=\"phone\" placeholder=\"Phone Number\">\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class=\"client-list\">\r\n    <table class=\"table table-striped\">\r\n        <tr>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Email</th>\r\n            <th>Phone</th>\r\n            <th></th>\r\n        </tr>\r\n        <tr *ngFor=\"let client of clients\">\r\n            <td>{{client.first_name}}</td>\r\n            <td>{{client.last_name}}</td>\r\n            <td>{{client.email}}</td>\r\n            <td>{{client.phone}}</td>\r\n            <td><a (click)=\"onEditClick(client)\" href=\"#\" class=\"btn btn-default\">Edit</a> \r\n            <a (click)=\"onDeleteClick(client._id)\" href=\"#\" class=\"btn btn-danger\">Delete</a></td>\r\n        </tr>\r\n    </table>\r\n</div>"

/***/ }),

/***/ 610:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" href=\"/\">ClientKeeper</a>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(341);


/***/ })

},[625]);
//# sourceMappingURL=main.bundle.map