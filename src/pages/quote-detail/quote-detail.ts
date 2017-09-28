import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-quote-detail',
  templateUrl: 'quote-detail.html'
})
export class QuoteDetailPage {
  sno: any;
  valuationType: any;
  homeExcess: any;
  contentExcess: any;
  orgPreTax: any;
  orgPosTax: any;
  lastAdjPreTax: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.sno = 123;
    this.valuationType =  '123';
    this.homeExcess = 'Home';
    this.contentExcess = 'New Business';
    this.orgPreTax = '22/08/2017';
    this.orgPosTax = '22/08/2017';
    this.lastAdjPreTax = '22/08/2017';
  }
}