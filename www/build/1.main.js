webpackJsonp([1],{

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hint_modal__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HintModalPageModule", function() { return HintModalPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HintModalPageModule = (function () {
    function HintModalPageModule() {
    }
    return HintModalPageModule;
}());
HintModalPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__hint_modal__["a" /* HintModalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__hint_modal__["a" /* HintModalPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__hint_modal__["a" /* HintModalPage */]
        ]
    })
], HintModalPageModule);

//# sourceMappingURL=hint-modal.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HintModalPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HintModalPage = (function () {
    function HintModalPage(viewCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.selectedMonth = false;
        this.selectedBroker = false;
        this.myParam = params.get('myParam');
        this.sSorts = [
            { id: 1, name: 'Broker' },
            { id: 2, name: 'Month' }
        ];
        this.sBrokers = [
            { id: 1, name: 'Broker1' },
            { id: 2, name: 'Broker2' },
            { id: 3, name: 'Broker3' },
            { id: 4, name: 'Broker4' },
        ];
        this.sMonths = [
            { id: 1, name: 'Jan' },
            { id: 2, name: 'Feb' },
            { id: 3, name: 'Mar' },
            { id: 4, name: 'Apr' },
            { id: 5, name: 'May' },
            { id: 6, name: 'Jun' },
            { id: 7, name: 'Jul' },
            { id: 8, name: 'Aug' },
            { id: 9, name: 'Sep' },
            { id: 10, name: 'Oct' },
            { id: 11, name: 'Nov' },
            { id: 12, name: 'Dec' }
        ];
    }
    HintModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    HintModalPage.prototype.setSortValues = function (sSort) {
        if (sSort.name === 'Month') {
            this.selectedMonth = true;
            this.selectedBroker = false;
        }
        else {
            this.selectedBroker = true;
            this.selectedMonth = false;
        }
    };
    return HintModalPage;
}());
HintModalPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-hint-modal',template:/*ion-inline-start:"C:\workarea\js\ionic\github\uwportal-ionic-mobile\src\pages\hint-modal\hint-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>At A Glance</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="dismiss()">\n\n      <ion-icon name=\'close\'></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n<ion-item>\n\n  <ion-label>Filter</ion-label>\n\n  <ion-select (ionChange)="setSortValues(sSort)" [(ngModel)]="sSort">\n\n    <ion-option [value]="sSort" *ngFor="let sSort of sSorts">{{sSort.name}} </ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-item *ngIf="selectedBroker === true">\n\n    <ion-label>Broker</ion-label>\n\n    <ion-select [(ngModel)]="sBroker" >\n\n        <ion-option [value]="sBroker" *ngFor="let sBroker of sBrokers">{{sBroker.name}}</ion-option>\n\n    </ion-select>\n\n</ion-item> \n\n<ion-item *ngIf="selectedMonth === true">\n\n    <ion-label>Month</ion-label>\n\n    <ion-select [(ngModel)]="sMonth" >\n\n        <ion-option [value]="sMonth" *ngFor="let sMonth of sMonths">{{sMonth.name}}</ion-option>\n\n    </ion-select>\n\n</ion-item>\n\n</ion-content>\n\n<ion-footer>\n\n  <button ion-button full  (click)="dismiss()">Search\n\n      </button>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"C:\workarea\js\ionic\github\uwportal-ionic-mobile\src\pages\hint-modal\hint-modal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], HintModalPage);

//# sourceMappingURL=hint-modal.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map