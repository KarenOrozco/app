import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpProvider } from '../../providers/http/http';
import { Usuario } from '../../database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuarioLog;

  constructor(public navCtrl: NavController, public http: HttpProvider) {
    this.usuarioLog = Usuario.getUsuarioLog();
  }




}
