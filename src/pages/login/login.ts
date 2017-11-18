import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { HttpProvider } from '../../providers/http/http';
import { TabsPage } from '../tabs/tabs';
import { Usuario } from '../../database';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  usuario : any;
 
  constructor(public navCtrl: NavController, public http: HttpProvider, public alertCtrl: AlertController) {
    this.usuario = {matricula: '', password: ''};
  }

  login($matricula,$password){

    this.http.login($matricula,$password).subscribe( res => {
      console.log('Resultado'+res);
     
      if(res != ''){
        this.usuario = res;
        Usuario.saveUsuarioLog(this.usuario);
        this.navCtrl.setRoot(TabsPage);        
      }else{
        this.alerta();
      }
    },
    error =>{
      // console.log("eroooooooooooooooor");
      //console.log(error);
      //alerta();
    });
  }

  alerta(){
    let alert = this.alertCtrl.create({
      title: 'Datos erróneos',
      subTitle: 'Por favor, inténtelo otra vez.',
      buttons: ['OK']
    });
    alert.present();
    this.usuario = null;
  }

  getUsuarioLogin(){
    return this.usuario;
  }

}
