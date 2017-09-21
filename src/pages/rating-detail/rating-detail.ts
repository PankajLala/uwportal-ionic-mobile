import { Component } from '@angular/core';
import { NavController, NavParams,IonicPage } from 'ionic-angular';

@Component({
  selector: 'page-rating-detail',
  templateUrl: 'rating-detail.html'
})
export class RatingDetailPage {
  sno: any;
  valuationType: any;
  homeExcess: any;
  contentExcess: any;
  orgPreTax: any;
  orgPosTax: any;
  lastAdjPreTax: any;
  lastAdjPostTax: any;
  uWPreTax: any;
  uWPostTax: any;
  riskPremium:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sno = '20';
    this.valuationType =  '30';
    this.homeExcess = '20';
    this.contentExcess = '50';
    this.orgPreTax = '60';
    this.orgPosTax = '72';
    this.lastAdjPreTax = '20';
    this.lastAdjPostTax = '30';
    this.uWPreTax = '20';
    this.uWPostTax = '20';
    this.riskPremium = '10';
  }
}
