import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { GroupProvider } from '../../providers/group/group';

/**
 * Generated class for the AddGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-group',
  templateUrl: 'add-group.html',
})
export class AddGroupPage {

  grupo : any;
  accion : string;
  groupForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: GroupProvider, private formBuilder: FormBuilder, public viewCtrl: ViewController) {
    this.grupo =  this.navParams.data.grupo;
    this.accion =  this.navParams.get('accion'); 

    this.groupForm = this.formBuilder.group({
      nombre: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AddGroupPage');
  }

  cerrarModal(){
    this.viewCtrl.dismiss();
    
  }
  onSubmit() { 
  
    switch(this.accion){
      case 'nuevo':
        this.http.save(this.grupo).subscribe( res => {
          console.log(res);
          if(res == true){
            this.viewCtrl.dismiss();
            console.log((res));
        
          }
        },
        error =>{
         
        });
      break;

      case 'editar':
        this.http.update(this.grupo).subscribe( res => {
          console.log(res);
          if(res == true){
            this.viewCtrl.dismiss();
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
