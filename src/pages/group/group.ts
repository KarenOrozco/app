import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { GroupProvider } from '../../providers/group/group';
import { AddGroupPage } from '../add-group/add-group';

/**
 * Generated class for the GroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {

  grupos : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: GroupProvider,  public modalCtrl : ModalController ) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad GroupPage');

    this.http.get().subscribe( res => {
      console.log(res);
      this.grupos = res;
    },
    error =>{
      console.log("erroooooooooooooooor");
      console.log(error);
    });
  }

  addGroup(accion,grupo){
    let modalSitio = this.modalCtrl.create( AddGroupPage, {grupo:grupo, 'accion': accion} );
    modalSitio.present();
  }


}
