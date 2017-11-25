import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatProvider {

  url : string = 'http://localhost/app/controllers/conversacionController.php';
  
  constructor(public http: Http) {
    console.log('Hello ChatProvider Provider');
  }

  save(conversacion){
    
    let datos = {operation: 'save', conversacion: conversacion};

    return this.http
    .post(this.url,JSON.stringify(datos))
    .map(res => res.json(),
      err => {
        console.log(err);
      }
    )
  }

  saveMensaje(mensaje){
    
    let datos = {operation: 'saveMensaje', mensaje: mensaje};

    return this.http
    .post(this.url,JSON.stringify(datos))
    .map(res => res.json(),
      err => {
        console.log(err);
      }
    )
  }

  getAllChats(usuarioId){
    
    let datos = {operation: 'getAllChats',usuarioId: usuarioId};

    return this.http
    .post(this.url,JSON.stringify(datos))
    .map(res => res.json(),
      err => {
        console.log(err);
      }
    )
  }

  getChat(chat){
    
    let datos = {operation: 'getChat',chat: chat};

    return this.http
    .post(this.url,JSON.stringify(datos))
    .map(res => res.json(),
      err => {
        console.log(err);
      }
    )
  }

}
