import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HttpProvider } from '../providers/http/http';
import { HttpModule } from '@angular/http';


import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { UserPage } from '../pages/user/user';
import { AddUserPage } from '../pages/add-user/add-user';
import { GroupPage } from '../pages/group/group';
import { AddGroupPage } from '../pages/add-group/add-group';
import { UserProvider } from '../providers/user/user';
import { GroupProvider } from '../providers/group/group';
import { ChatProvider } from '../providers/chat/chat';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    ContactPage,
    LoginPage,
    MenuPage,
    UserPage,
    AddUserPage,
    GroupPage,
    AddGroupPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: true,
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
    ContactPage,
    LoginPage,
    MenuPage,
    UserPage,
    AddUserPage,
    GroupPage,
    AddGroupPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    UserProvider,
    GroupProvider,
    ChatProvider
  ]
})
export class AppModule {}
