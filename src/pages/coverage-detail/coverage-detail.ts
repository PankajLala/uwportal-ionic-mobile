import { Component } from '@angular/core';
import { NavController, NavParams,IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-coverage-detail',
  templateUrl: 'coverage-detail.html'
})
export class CoverageDetailPage {
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
    this.sno = 1;
    this.valuationType =  'Accidental Damage';
    this.homeExcess = '-';
    this.contentExcess = '500';
    this.orgPreTax = '601.75';
    this.orgPosTax = '721.50';
    this.lastAdjPreTax = '-';
    this.lastAdjPostTax = '-';
    this.uWPreTax = '601.75';
    this.uWPostTax = '721.50';
    this.riskPremium = '508.48';
  }
}
