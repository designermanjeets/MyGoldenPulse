import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MonBackDetailPage } from '../monday/mon-back-detail/mon-back-detail';


/**
 * Generated class for the MondayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-monday',
  templateUrl: 'monday.html',
})
export class MondayPage { 
  items = [];

  constructor(public navCtrl: NavController, params: NavParams) {
       this.items = [
      {
        'title': 'Bent Over Row',
        'icon': 'pulse',
        'color': '#E63135',
        'page': 'mon-back-bent-over-row',
        'sets': '4 Sets : 15/12/12/12',

      },
      {
        'title': 'Dumbell Row',
        'icon': 'pulse',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA',
        'page': 'mon-back-dumb-row',
        'sets': '4 Sets : 15/12/12/12',
      },
      {
        'title': 'Chinups + Pully',
        'icon': 'pulse',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529',
        'sets': '4 Sets : 15/12/12/12',
      },
      {
        'title': 'Ground Pully',
        'icon': 'pulse',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439',
        'sets': '4 Sets : 15/12/12/12',
      },
      {
        'title': 'Dead Lift or Hyper Ext.',
        'icon': 'pulse',
        'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
        'color': '#CE6296',
        'sets': '4 Sets : 15/12/12/12',
      },
    ]
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(MonBackDetailPage, { item: item });
  }

}