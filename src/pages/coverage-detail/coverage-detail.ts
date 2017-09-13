import { Component } from '@angular/core';
import { NavController, NavParams,IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-coverage-detail',
  templateUrl: 'coverage-detail.html'
})
export class CoverageDetailPage {
  character: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    var characters = [
      { title: 'SNo.', value: '1'},
      { title: 'Valuation Type:', value: 'Accidental Damage'},
      { title: 'Home Excess:', value: '-'},
      { title: 'Content Excess:', value: '500'},
      { title: 'Original Pre Tax Premium:', value: '601.75'},
      { title: 'Original Post Tax Premium:', value: '721.50'},
      { title: 'Last Adjusted Pre Tax Premium:', value: '-'},
      { title: 'Last Adjusted Post Tax Premium:', value: '-' },
      { title: 'UW Pre Tax Premium:', value: '601.75'},
      { title: 'UW Post Tax Premium:', value: '721.50'},
      { title: 'Risk Premium:', value: '508.48'}
    ];
    this.character = characters;
  }
}
