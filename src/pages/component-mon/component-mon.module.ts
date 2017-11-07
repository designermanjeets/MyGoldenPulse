import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentMonPage } from './component-mon';

@NgModule({
  declarations: [
    ComponentMonPage,
  ],
  imports: [
    IonicPageModule.forChild(ComponentMonPage),
  ],
})
export class ComponentMonPageModule {}
