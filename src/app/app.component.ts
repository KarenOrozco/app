import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

import { SesionUsuario } from '../database';
import db  from '../database';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage : any //= LoginPage; //HomePage;;TabsPage;
  

  constructor(
      platform: Platform, 
      statusBar: StatusBar, 
      splashScreen: SplashScreen
    ) 
  {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      SesionUsuario.getUsuarioLog()
                    .then((result) =>{
                      console.log(result[0]);
                      if (result[0] != null){
                        this.rootPage = TabsPage;
                      }else{
                        this.rootPage = LoginPage;
                      }
      });

      statusBar.styleDefault();
      splashScreen.hide();

    });
  }

}

