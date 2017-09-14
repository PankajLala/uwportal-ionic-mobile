import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {PropertyListPage} from '../property-list/property-list';

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {
 constructor(public navCtrl: NavController) {
  }

login(){
  this.navCtrl.setRoot(PropertyListPage);
  }
}
