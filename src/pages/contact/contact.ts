import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpProvider } from '../../providers/http/http';
import { SesionUsuario, Contacto } from '../../database';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  grupos : Contacto;
  usuarioLogin : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public http: HttpProvider) {  
   
  }

  ionViewDidLoad() {
    SesionUsuario.getUsuarioLog()
      .then((result) =>{
        this.usuarioLogin = result[0];
        console.log(this.usuarioLogin.id);

        this.http.getGruposUsuario(this.usuarioLogin.id).subscribe( res => {
          console.log(res);
          this.grupos = res;
          

        },
        error =>{
          console.log("erroooooooooooooooor");
          console.log(error);
        });
    });
  }

}


 //console.log(this.usuarioLogin);

      // this.http.getGruposUsuario(this.usuarioLogin.id).subscribe( res => {
      //   console.log(res);
      //   this.grupos = res;

      // },
      // error =>{
      //   console.log("erroooooooooooooooor");
      //   console.log(error);
      // });
