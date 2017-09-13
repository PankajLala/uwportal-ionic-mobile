import { Component } from '@angular/core';
import { NavParams, ViewController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-hint-modal',
  templateUrl: 'hint-modal.html'
})
export class HintModalPage {
  myParam: string;
  sSorts: any[];
  sBrokers: any[];
  sMonths: any[];
  public sSort: any;
  public selectedMonth: boolean;
  public selectedBroker: boolean;

  constructor(
    public viewCtrl: ViewController,

    params: NavParams
  ) {
    this.selectedMonth =false;
    this.selectedBroker = false;
    this.myParam = params.get('myParam');
    this.sSorts = [
        {id: 1, name: 'Broker'},
        {id: 2, name: 'Month'}
    ];
    this.sBrokers = [
        {id: 1, name: 'Broker1'},
        {id: 2, name: 'Broker2'},
        {id: 3, name: 'Broker3'},
        {id: 4, name: 'Broker4'},
    ];
    this.sMonths = [
        {id: 1, name: 'Jan'},
        {id: 2, name: 'Feb'},
        {id: 3, name: 'Mar'},
        {id: 4, name: 'Apr'},
        {id: 5, name: 'May'},
        {id: 6, name: 'Jun'},
        {id: 7, name: 'Jul'},
        {id: 8, name: 'Aug'},
        {id: 9, name: 'Sep'},
        {id: 10, name: 'Oct'},
        {id: 11, name: 'Nov'},
        {id: 12, name: 'Dec'}
    ];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  setSortValues(sSort) {
    if(sSort.name === 'Month'){
      this.selectedMonth  = true;
      this.selectedBroker = false;
    }else {
      this.selectedBroker = true;
      this.selectedMonth = false;
    }

  }

}
