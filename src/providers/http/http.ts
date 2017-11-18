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

  url : string = 'http://localhost/app/controllers/usuarioControler.php';

  constructor(public http: Http) {
    
  }

  login($matricula,$password){
    
    let datos = {matricula: $matricula , password : $password};

    return this.http
    .post(this.url,JSON.stringify(datos))
    .map(res => res.json(),
      err => {
        console.log(err);
      }
    )
  }

}
