import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WorkoutComponent } from './../../components/workout/workout';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(WorkoutComponent);
  }

}
