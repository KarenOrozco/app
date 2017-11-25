import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


import { UserPage } from '../user/user';
import { GroupPage } from '../group/group';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  page(opcion){
    switch (opcion){
      case 1:
        this.navCtrl.push(UserPage);
      break;
      case 2:
        this.navCtrl.push(GroupPage);      
      break;
      case 3:
        this.navCtrl.push(UserPage);      
      break;
      case 4:
        this.navCtrl.push(UserPage);      
      break;
      default:

    }
    this.viewCtrl.dismiss();
  }
}


