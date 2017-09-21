import { Component } from '@angular/core';
import { NavController, NavParams,IonicPage } from 'ionic-angular';

@Component({
  selector: 'page-premium-detail',
  templateUrl: 'premium-detail.html'
})
export class PremiumDetailPage {
  sno: any;
  valuationType: any;
  homeExcess: any;
  contentExcess: any;
  orgPreTax: any;
  orgPosTax: any;
  lastAdjPreTax: any;
  lastAdjPostTax: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sno = 20;
    this.valuationType =  '30';
    this.homeExcess = '26';
    this.contentExcess = '20';
    this.orgPreTax = '30';
    this.orgPosTax = '30';
    this.lastAdjPreTax = '30';
    this.lastAdjPostTax = 'abc';
  }
}
