import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MondayPage } from './monday';

@NgModule({
  declarations: [
    MondayPage,
  ],
  imports: [
    IonicPageModule.forChild(MondayPage),
  ],
})
export class MondayPageModule {}
