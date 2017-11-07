import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from './../../pages/home/home';
import { ComponentMonPage } from './../../pages/component-mon/component-mon';

/**
 * Generated class for the WorkoutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'workout',
  templateUrl: 'workout.html'
})
export class WorkoutComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello WorkoutComponent Component');
    this.text = 'Hello World';
  }

  goBack() {
    this.navCtrl.push(HomePage);
  }

  goToMon(){
    this.navCtrl.push(ComponentMonPage);
  }

}
