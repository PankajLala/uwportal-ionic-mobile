import { SearchModalPage } from './search-modal';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SearchModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchModalPage),
  ],
  exports: [
    SearchModalPage
  ]
})

export class SearchModalPageModule { }