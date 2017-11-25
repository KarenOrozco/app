import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SesionUsuario } from '../../database';
import { ChatProvider } from '../../providers/chat/chat';
import { Mensaje } from '../../database';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  chat : any;
  mensajes : any;
  usuarioLogin : any;
  msg : Mensaje;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: ChatProvider) {
    this.chat =  this.navParams.data.chat;
    this.msg = new Mensaje("","",null,null,null,"",0);
  }

  ionViewDidLoad() {
    this.loadChat(this.chat);
    SesionUsuario.getUsuarioLog()
      .then((result) =>{
        this.usuarioLogin = result[0];
        console.log(this.usuarioLogin);
        console.log(this.usuarioLogin.id);
        
    });

  }

  loadChat(chat){
    this.http.getChat(chat).subscribe( res => {
      console.log("Respuestaaaaaaaa");
      console.log(res);
      this.mensajes = res;
      
    },
    error =>{
      console.log("erroooooooooooooooor");
      console.log(error);
    });
  }

  sendMessage(){

    this.msg.usuarioEmisor = 1;
    this.msg.usuarioReceptor = 0;  
    this.msg.fechaEnvio = null ;
    this.msg.fechaRecibido = null ;
    this.msg.conversacionId = 3 ;

    console.log(this.msg);
    this.http.saveMensaje(this.msg).subscribe( res => {
      console.log(res);
      if(res == true){
        this.loadChat(this.chat);
        console.log((res));
    
      }
    },
    error =>{
     
    });
    // this.msg.save().then(resultado =>{
    //   this.msg = new Mensaje("","",null,null);      
    // });

  }



}
