webpackJsonp([0],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_modal__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModalPageModule", function() { return SearchModalPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchModalPageModule = (function () {
    function SearchModalPageModule() {
    }
    return SearchModalPageModule;
}());
SearchModalPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__search_modal__["a" /* SearchModalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__search_modal__["a" /* SearchModalPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__search_modal__["a" /* SearchModalPage */]
        ]
    })
], SearchModalPageModule);

//# sourceMappingURL=search-modal.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchModalPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchModalPage = (function () {
    function SearchModalPage(viewCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.maxDate = new Date(new Date().setDate(new Date().getDate() + 30));
        this.min = new Date();
        this.products = [
            {
                id: 1,
                value: 'Home',
            },
            {
                id: 2,
                value: 'Landlord',
            },
            {
                id: 3,
                value: 'Motor',
            },
        ];
        this.covers = [
            {
                id: 1,
                value: 'Building',
            },
            {
                id: 2,
                value: 'Content',
            },
            {
                id: 3,
                value: 'Building and Content',
            },
        ];
        this.processes = [
            {
                id: 1,
                value: 'New Business',
            },
            {
                id: 2,
                value: 'Endorsement',
            },
            {
                id: 3,
                value: 'Cancellation',
            }, {
                id: 4,
                value: 'Renewal',
            }
        ];
        this.myParam = params.get('myParam');
    }
    SearchModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return SearchModalPage;
}());
SearchModalPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-search-modal',template:/*ion-inline-start:"C:\workarea\js\ionic\github\uwportal-ionic-mobile\src\pages\search-modal\search-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Search</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="dismiss()">\n\n      <ion-icon name=\'close\'></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item tappable>\n\n    <ion-label color="primary">Quote/Policy Number</ion-label>\n\n    <ion-input type="text" placeholder="Quote/Policy Number"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n \n\n    <ion-label color="primary">Effective From</ion-label>\n\n    <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DD MMMM YYYY" [(ngModel)]="myDate"></ion-datetime>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" >Effective To</ion-label>\n\n    <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DD MMMM YYYY" [(ngModel)]="myDate1"></ion-datetime>\n\n  </ion-item>\n\n  <ion-item tappable>\n\n    <ion-label color="primary" >Product Type</ion-label>\n\n    <ion-select [(ngModel)]="productType" interface="action-sheet">\n\n        <ion-option *ngFor="let product of products" value="{{product.value}}">{{product.value}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item tappable>\n\n    <ion-label color="primary">Cover Type</ion-label>\n\n    <ion-select [(ngModel)]="selectedCover" interface="action-sheet">\n\n        <ion-option *ngFor="let cover of covers" value="{{cover.value}}">{{cover.value}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item tappable>\n\n    <ion-label color="primary">Process Type</ion-label>\n\n    <ion-select [(ngModel)]="selectedProcess" interface="action-sheet">\n\n        <ion-option *ngFor="let process of processes" value="{{process.value}}">{{process.value}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <button ion-button full  (click)="dismiss()">Search\n\n      </button>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\workarea\js\ionic\github\uwportal-ionic-mobile\src\pages\search-modal\search-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SearchModalPage);

//# sourceMappingURL=search-modal.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map