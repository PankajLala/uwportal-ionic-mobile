import { Component, ViewChild } from '@angular/core';
import { NavParams, ViewController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search-modal',
  templateUrl: 'search-modal.html',
})

export class SearchModalPage {
  public maxDate: Date = new Date(new Date().setDate(new Date().getDate() + 30));
  public min: Date = new Date()
  myParam: string;
  selectedProduct: string;
  selectedCover: string;

  products = [
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

  covers = [
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

  processes = [
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
    },{
      id: 4,
      value: 'Renewal',
    }
  ];

  constructor(
    public viewCtrl: ViewController,params: NavParams) {
    this.myParam = params.get('myParam');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}