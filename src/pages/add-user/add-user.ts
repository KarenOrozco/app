import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the AddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {

  usuario: any;
  accion : any;
  userForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: UserProvider, private formBuilder: FormBuilder) {
    this.usuario =  this.navParams.data.usuario;
    this.accion =  this.navParams.get('accion');

    this.userForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      primerApellido: [''],
      segundoApellido: [''],
      email: [''],
      telefono: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUserPage');
  }

  onSubmit() { 
    console.log(this.usuario);
    switch(this.accion){
      case 'nuevo':
        this.http.save(this.usuario).subscribe( res => {
          console.log(res);
          if(res == true){
            //this.usuario = res;
            console.log((res));
        
          }
        },
        error =>{
         
        });
      break;

      case 'editar':
        this.http.update(this.usuario).subscribe( res => {
          console.log(res);
          if(res == true){
            //this.usuario = res;
            console.log((res));
        
          }
        },
        error =>{
       
        });

      break;

      default:

    }
  }

}
