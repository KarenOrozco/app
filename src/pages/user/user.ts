import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';
import { AddUserPage } from '../add-user/add-user';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  usuarios : any;
  usuario : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: UserProvider ) {
    this.usuario = {nombre: null, primerApellido: null, segundoApellido: null, genero: null, email: null, telefono: null, accesos: 0, ultimoAcceso: null, imagenNombre: null, imagenPath: null, matricula: null, password: null};
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad UserPage');
    
    this.http.get().subscribe( res => {
      console.log(res);
      this.usuarios = res;
    },
    error =>{
      console.log("erroooooooooooooooor");
      console.log(error);
    });
  }

  addUsuario(accion,usuario){
    console.log(accion);
    console.log(usuario);
    this.navCtrl.push(AddUserPage,{usuario:usuario, 'accion': accion});
  }

  goBack() {
    this.navCtrl.pop();
  }
}
