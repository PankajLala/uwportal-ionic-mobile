import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {BrokerService} from '../../providers/broker-service-mock';
import {BrokerDetailPage} from '../broker-detail/broker-detail';

@Component({
    selector: 'page-broker-list',
    templateUrl: 'broker-list.html'
})
export class BrokerListPage {

    brokers: Array<any>;
    searchKey: string = "";
    constructor(public navCtrl: NavController, public service: BrokerService, public modalCtrl: ModalController) {
        service.findAll().then(data => this.brokers = data);
    }

    openBrokerDetail(broker) {
        this.navCtrl.push(BrokerDetailPage, broker);
    }

    onSearch(event) {
        this.modalCtrl.create('HintModalPage', null, {  })
                        .present();
    }

}
