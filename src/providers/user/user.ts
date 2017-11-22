import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  url : string = 'http://localhost/app/controllers/usuarioControler.php';
  
  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }

  login(matricula,password){
   
    let datos = {operation: 'login', matricula: matricula , password : password};

    return this.http
    .post(this.url,JSON.stringify(datos))
    .map(res => res.json(),
      err => {
        console.log(err);
      }
    )
  }

  get(){
 
    let datos = {operation: 'get'};

    return this.http
    .post(this.url,JSON.stringify(datos))
    .map(res => res.json(),
      err => {
        console.log(err);
      }
    )
  }

  save(usuario){
 
    let datos = {operation: 'save', usuario: usuario};

    return this.http
    .post(this.url,JSON.stringify(datos))
    .map(res => res.json(),
      err => {
        console.log(err);
      }
    )
  }

  update(usuario){
   
    let datos = {operation: 'update', usuario: usuario};

    return this.http
    .post(this.url,JSON.stringify(datos))
    .map(res => res.json(),
      err => {
        console.log(err);
      }
    )
  }

}
