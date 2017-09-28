import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {BrokerService} from '../../providers/broker-service-mock';
import {CoverageDetailPage } from '../coverage-detail/coverage-detail';

@Component({
    selector: 'page-broker-detail',
    templateUrl: 'broker-detail.html'
})
export class BrokerDetailPage {

    broker: any;
    brokerFee: number;
    referralFactor: number;
    coverages: Array<{value: string}>;
    constructor(public navCtrl: NavController, public navParams: NavParams, public service: BrokerService, public toastCtrl: ToastController) {
        this.broker = this.navParams.data;
        this.brokerFee = 20;
        service.findById(this.broker.id).then(
            broker => this.broker = broker
        );
    this.coverages = [
      { value: 'Accidental Damage'},
      { value: 'Listed Events'},
      { value: 'Listed Events base'}
    ]
    }

    coverageTapped(event, coverage) {
    this.navCtrl.push(CoverageDetailPage, coverage);
  }

    favorite(broker) {
        this.service.favorite(broker)
            .then(property => {
                let toast = this.toastCtrl.create({
                    message: 'Quoted',
                    cssClass: 'mytoast',
                    duration: 1000
                });
                toast.present(toast);
            });
    }   

    decline(broker) {
        this.service.favorite(broker)
            .then(property => {
                let toast = this.toastCtrl.create({
                    message: 'Declined',
                    cssClass: 'mytoast',
                    duration: 1000
                });
                toast.present(toast);
            });
    }
}
