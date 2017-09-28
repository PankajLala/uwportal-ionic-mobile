import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PremiumDetailPage } from '../premium-detail/premium-detail';
import {RatingDetailPage} from '../rating-detail/rating-detail';
import {QuoteDetailPage} from '../quote-detail/quote-detail';

@Component({
    selector: 'page-favorite-list',
    templateUrl: 'favorite-list.html'
})
export class FavoriteListPage {
searchKey: string = "";
tab1Root = QuoteDetailPage;
tab2Root = PremiumDetailPage;
tab3Root = RatingDetailPage;


    constructor(public navCtrl: NavController) {

    }
}
