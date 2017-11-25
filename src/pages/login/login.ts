import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';
import { TabsPage } from '../tabs/tabs';
import { SesionUsuario } from '../../database';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  usuario : SesionUsuario;
  matricula : string;
  password : string;
 
  constructor(public navCtrl: NavController, public http: UserProvider, public alertCtrl: AlertController) {
    //this.usuario = {matricula: '', password: ''};
  }

  login(matricula,password){

    this.http.login(matricula,password).subscribe( res => {
      console.log(res);
     
      if(res != ''){
        this.usuario = res;
        console.log((res));
        
        let sesionActiva = 1; //sesión iniciada

        let usuarioLog = new SesionUsuario(
          res.id,
          res.nombre,
          res.primerApellido,
          res.segundoApellido,
          res.genero,
          res.email,
          res.telefono,
          res.matricula,
          res.password,
          sesionActiva
        );

        usuarioLog.saveUsuarioLog();
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
