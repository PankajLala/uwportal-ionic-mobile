import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';
import {PremiumDetailPage } from '../premium-detail/premium-detail';
import {RatingDetailPage} from '../rating-detail/rating-detail';

@Component({
    selector: 'page-favorite-list',
    templateUrl: 'favorite-list.html'
})
export class FavoriteListPage {

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

    constructor(public navCtrl: NavController) {
    this.sno = 123;
    this.valuationType =  '123';
    this.homeExcess = 'Home';
    this.contentExcess = 'New Business';
    this.orgPreTax = '22/08/2017';
    this.orgPosTax = '22/08/2017';
    this.lastAdjPreTax = '22/08/2017';
    }


    premiumTapped(event) {
    this.navCtrl.push(PremiumDetailPage);
  }

    ratingTapped(event, coverage) {
        this.navCtrl.push(RatingDetailPage);
    }
}
