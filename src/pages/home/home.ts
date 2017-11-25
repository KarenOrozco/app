import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { ChatProvider } from '../../providers/chat/chat';
import { SesionUsuario } from '../../database';
import { MenuPage } from '../menu/menu';
import { ChatPage } from '../chat/chat';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {

 
  chats : any;
  usuarioLogin : any;

  constructor(public navCtrl: NavController, public http: ChatProvider, public popoverCtrl: PopoverController) {
    
  }

  ionViewDidLoad() {
    this.loadChats();
  }
    
  openChat(chat){
    this.navCtrl.push(ChatPage, {'chat':chat});
  }


  loadChats(){
    SesionUsuario.getUsuarioLog()
    .then((result) =>{
      this.usuarioLogin = result[0];
      console.log(this.usuarioLogin.id);

      this.http.getAllChats(this.usuarioLogin.id).subscribe( res => {
        console.log(res);
        this.chats = res;
        
      },
      error =>{
        console.log("erroooooooooooooooor");
        console.log(error);
      });
  });
  }


  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(MenuPage);
    popover.present({
      ev: myEvent
    });
  }

  



}
