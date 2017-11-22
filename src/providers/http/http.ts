import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Http ,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  url : string = 'http://localhost/app/controllers/';

  constructor(public http: Http) {
    
  }

  login(matricula,password){
    let path = 'usuarioControler.php';
    let datos = {operation: 'login', matricula: matricula , password : password};

    return this.http
    .post(this.url+path,JSON.stringify(datos))
    .map(res => res.json(),
      err => {
        console.log(err);
      }
    )
  }


  getGruposUsuario(usuarioId){
    let path = 'grupoController.php';
    let datos = {operation: 'getGruposUsuario', usuarioId: usuarioId};

    return this.http
    .post(this.url+path,JSON.stringify(datos))
    .map(res => res.json(),
      err => {
        console.log(err);
      }
    )
  }

}
