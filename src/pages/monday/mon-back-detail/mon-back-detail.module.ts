import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonBackDetailPage } from './mon-back-detail';

@NgModule({
  declarations: [
    MonBackDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MonBackDetailPage),
  ],
})
export class MonBackPageModule {}
