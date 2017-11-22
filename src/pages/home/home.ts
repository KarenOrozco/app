import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { HttpProvider } from '../../providers/http/http';
import { SesionUsuario } from '../../database';
import { MenuPage } from '../menu/menu';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {

  usuarioLogin;

  constructor(public navCtrl: NavController, public http: HttpProvider, public popoverCtrl: PopoverController) {
    
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(MenuPage);
    popover.present({
      ev: myEvent
    });
  }



}
