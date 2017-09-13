import { CoverageDetailPage } from './coverage-detail';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    CoverageDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CoverageDetailPage),
  ],
  exports: [
    CoverageDetailPage
  ]
})

export class CoverageDetailPageModule { }