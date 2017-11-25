webpackJsonp([7],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    //tab2Root = AboutPage;
    // tab3Root = ContactPage;
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__contact_contact__["a" /* ContactPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\karen\app\src\pages\tabs\tabs.html"*/'<ion-tabs tabsPlacement="top">\n    <ion-tab [root]="tab1Root" tabTitle="Chat" tabIcon="chatbubbles" ></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Contact" tabIcon="contacts" ></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Home" tabIcon="home" ></ion-tab>\n    \n</ion-tabs>\n  '/*ion-inline-end:"C:\karen\app\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddUserPage = (function () {
    function AddUserPage(navCtrl, navParams, http, formBuilder, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.usuario = this.navParams.data.usuario;
        this.accion = this.navParams.get('accion');
        this.userForm = this.formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            primerApellido: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            segundoApellido: [''],
            genero: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    AddUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddUserPage');
    };
    AddUserPage.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.usuario);
        switch (this.accion) {
            case 'nuevo':
                this.http.save(this.usuario).subscribe(function (res) {
                    console.log(res);
                    if (res == true) {
                        _this.viewCtrl.dismiss();
                        //this.usuario = res;
                        console.log((res));
                    }
                }, function (error) {
                });
                break;
            case 'editar':
                this.http.update(this.usuario).subscribe(function (res) {
                    console.log(res);
                    if (res == true) {
                        _this.viewCtrl.dismiss();
                        //this.usuario = res;
                        console.log((res));
                    }
                }, function (error) {
                });
                break;
            default:
        }
    };
    AddUserPage.prototype.cerrarModal = function () {
        this.viewCtrl.dismiss();
    };
    AddUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-user',template:/*ion-inline-start:"C:\karen\app\src\pages\add-user\add-user.html"*/'<!--\n  Generated template for the AddUserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <!-- <ion-title>{{accion}}</ion-title> -->\n    <ion-buttons left >\n      <button ion-button (click)="cerrarModal()">\n        Cancelar\n        <!-- <ion-icon name="md-close"></ion-icon> (ngSubmit)="onSubmit()" -->\n      </button>\n    </ion-buttons>\n    <ion-buttons end >\n      <button ion-button  type="submit" [disabled]="!userForm.valid" (click)="onSubmit()">\n        Guardar\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="userForm" class="form" > \n    <ion-item>\n      <ion-label stacked>Nombre</ion-label>\n      <ion-input type="text"  [(ngModel)]="usuario.nombre" formControlName="nombre"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Primer apellido</ion-label>\n      <ion-input type="text"  [(ngModel)]="usuario.primerApellido" formControlName="primerApellido"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Segundo apellido</ion-label>\n      <ion-input type="text"  [(ngModel)]="usuario.segundoApellido" formControlName="segundoApellido"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Género</ion-label>\n      <ion-select [(ngModel)]="usuario.genero" formControlName="genero"> \n        <ion-option value="Femenino">Femenino</ion-option>\n        <ion-option value="Masculino">Masculino</ion-option>\n      </ion-select>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Correo electrónico</ion-label>\n      <ion-input type="email"  [(ngModel)]="usuario.email" formControlName="email"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label stacked>Número de teléfono </ion-label>\n      <ion-input type="number"  [(ngModel)]="usuario.telefono" formControlName="telefono"></ion-input>\n    </ion-item>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\karen\app\src\pages\add-user\add-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], AddUserPage);
    return AddUserPage;
}());

//# sourceMappingURL=add-user.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_group_group__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddGroupPage = (function () {
    function AddGroupPage(navCtrl, navParams, http, formBuilder, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.grupo = this.navParams.data.grupo;
        this.accion = this.navParams.get('accion');
        this.groupForm = this.formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    AddGroupPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad AddGroupPage');
    };
    AddGroupPage.prototype.cerrarModal = function () {
        this.viewCtrl.dismiss();
    };
    AddGroupPage.prototype.onSubmit = function () {
        var _this = this;
        switch (this.accion) {
            case 'nuevo':
                this.http.save(this.grupo).subscribe(function (res) {
                    console.log(res);
                    if (res == true) {
                        _this.viewCtrl.dismiss();
                        console.log((res));
                    }
                }, function (error) {
                });
                break;
            case 'editar':
                this.http.update(this.grupo).subscribe(function (res) {
                    console.log(res);
                    if (res == true) {
                        _this.viewCtrl.dismiss();
                        console.log((res));
                    }
                }, function (error) {
                });
                break;
            default:
        }
    };
    AddGroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-group',template:/*ion-inline-start:"C:\karen\app\src\pages\add-group\add-group.html"*/'<!--\n  Generated template for the AddGroupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <!-- <ion-title>{{accion}}</ion-title> -->\n    <ion-buttons left >\n      <button ion-button (click)="cerrarModal()">\n        Cancelar\n      </button>\n    </ion-buttons>\n    <ion-buttons end >\n      <button ion-button  type="submit" [disabled]="!groupForm.valid" (click)="onSubmit()">\n        Guardar\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="groupForm" class="form" > \n    <ion-item>\n      <ion-label stacked>Nombre</ion-label>\n      <ion-input type="text"  [(ngModel)]="grupo.nombre" formControlName="nombre"></ion-input>\n    </ion-item>\n  \n    \n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\karen\app\src\pages\add-group\add-group.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_group_group__["a" /* GroupProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], AddGroupPage);
    return AddGroupPage;
}());

//# sourceMappingURL=add-group.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.chat = this.navParams.data.chat;
        this.msg = new __WEBPACK_IMPORTED_MODULE_2__database__["a" /* Mensaje */]("", "", null, null, null, "", 0);
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadChat(this.chat);
        __WEBPACK_IMPORTED_MODULE_2__database__["b" /* SesionUsuario */].getUsuarioLog()
            .then(function (result) {
            _this.usuarioLogin = result[0];
            console.log(_this.usuarioLogin);
            console.log(_this.usuarioLogin.id);
        });
    };
    ChatPage.prototype.loadChat = function (chat) {
        var _this = this;
        this.http.getChat(chat).subscribe(function (res) {
            console.log("Respuestaaaaaaaa");
            console.log(res);
            _this.mensajes = res;
        }, function (error) {
            console.log("erroooooooooooooooor");
            console.log(error);
        });
    };
    ChatPage.prototype.sendMessage = function () {
        var _this = this;
        this.msg.usuarioEmisor = 1;
        this.msg.usuarioReceptor = 0;
        this.msg.fechaEnvio = null;
        this.msg.fechaRecibido = null;
        this.msg.conversacionId = 3;
        console.log(this.msg);
        this.http.saveMensaje(this.msg).subscribe(function (res) {
            console.log(res);
            if (res == true) {
                _this.loadChat(_this.chat);
                console.log((res));
            }
        }, function (error) {
        });
        // this.msg.save().then(resultado =>{
        //   this.msg = new Mensaje("","",null,null);      
        // });
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\karen\app\src\pages\chat\chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{chat.nombre}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n\n  <ion-list no-lines>\n  <ion-item text-wrap *ngFor="let chat of mensajes" >\n    <div class="" text-right *ngIf="chat.usuarioEmisor != 1">\n        <p>{{chat.contenido}}</p>\n    </div>\n    <div class="" text-left *ngIf="chat.usuarioEmisor == 1">\n        <p>{{chat.contenido}}</p>\n    </div>\n  </ion-item>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar class="no-border">        \n    <ion-input  type="text" placeholder="Write your message ..." [(ngModel)]="msg.contenido"></ion-input>  \n    <ion-buttons end>\n      <button ion-button (click)="sendMessage()">\n        <ion-icon name="send" color="secondary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>    \n</ion-footer>'/*ion-inline-end:"C:\karen\app\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__["a" /* ChatProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__["a" /* ChatProvider */]) === "function" && _c || Object])
    ], ChatPage);
    return ChatPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_group_group__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = (function () {
    function ContactPage(navCtrl, navParams, http) {
        //this.usuarioLogin = this.log.get();
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3__database__["b" /* SesionUsuario */].getUsuarioLog()
            .then(function (result) {
            _this.usuarioLogin = result[0];
            console.log(_this.usuarioLogin.id);
            _this.http.getGruposUsuario(_this.usuarioLogin.id).subscribe(function (res) {
                console.log(res);
                _this.grupos = res;
            }, function (error) {
                console.log("erroooooooooooooooor");
                console.log(error);
            });
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\karen\app\src\pages\contact\contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n  \n      <ion-buttons right>\n        <button  ion-button icon-only (click)="presentPopover($event)">\n          <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-buttons>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item text-wrap *ngFor="let grupo of grupos" >\n      <ion-avatar item-start>\n          <img src="../assets/imgs/usuario.png">\n      </ion-avatar>\n        <h2><strong>{{grupo.nombre}}</strong></h2>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\karen\app\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_group_group__["a" /* GroupProvider */]])
    ], ContactPage);
    return ContactPage;
}());

//console.log(this.usuarioLogin);
// this.http.getGruposUsuario(this.usuarioLogin.id).subscribe( res => {
//   console.log(res);
//   this.grupos = res;
// },
// error =>{
//   console.log("erroooooooooooooooor");
//   console.log(error);
// });
//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_group_group__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_group_add_group__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the GroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GroupPage = (function () {
    function GroupPage(navCtrl, navParams, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.modalCtrl = modalCtrl;
    }
    GroupPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad GroupPage');
        var _this = this;
        this.http.get().subscribe(function (res) {
            console.log(res);
            _this.grupos = res;
        }, function (error) {
            console.log("erroooooooooooooooor");
            console.log(error);
        });
    };
    GroupPage.prototype.addGroup = function (accion, grupo) {
        var modalSitio = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__add_group_add_group__["a" /* AddGroupPage */], { grupo: grupo, 'accion': accion });
        modalSitio.present();
    };
    GroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-group',template:/*ion-inline-start:"C:\karen\app\src\pages\group\group.html"*/'<!--\n  Generated template for the GroupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Grupos</ion-title>\n    <ion-buttons right>\n      <button  ion-button icon-only (click)="addGroup(\'nuevo\',grupo)" >\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item text-wrap *ngFor="let grupo of grupos" (click)="addGroup(\'editar\',grupo)">\n      <ion-avatar item-start>\n          <img src="../assets/imgs/usuario.png">\n      </ion-avatar>\n        <h2><strong>{{grupo.nombre}}</strong></h2>\n\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\karen\app\src\pages\group\group.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_group_group__["a" /* GroupProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], GroupPage);
    return GroupPage;
}());

//# sourceMappingURL=group.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_group__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = (function () {
    function MenuPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    MenuPage.prototype.page = function (opcion) {
        switch (opcion) {
            case 1:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserPage */]);
                break;
            case 2:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__group_group__["a" /* GroupPage */]);
                break;
            case 3:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserPage */]);
                break;
            case 4:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserPage */]);
                break;
            default:
        }
        this.viewCtrl.dismiss();
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\karen\app\src\pages\menu\menu.html"*/'<ion-list>\n  <!-- <ion-list-header color="">Select Topic</ion-list-header> -->\n  <button ion-item (click)="page(1)">Usuarios</button>\n  <button ion-item (click)="page(2)">Grupos</button>\n  <button ion-item (click)="page(3)">Difusiones</button>\n  <button ion-item (click)="page(4)">Ajustes</button>\n</ion-list>'/*ion-inline-end:"C:\karen\app\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_user_add_user__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = (function () {
    function UserPage(navCtrl, navParams, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.usuario = { nombre: null, primerApellido: null, segundoApellido: null, genero: null, email: null, telefono: null, accesos: 0, ultimoAcceso: null, imagenNombre: null, imagenPath: null, matricula: null, password: null };
    }
    UserPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad UserPage');
        var _this = this;
        this.http.get().subscribe(function (res) {
            console.log(res);
            _this.usuarios = res;
        }, function (error) {
            console.log("erroooooooooooooooor");
            console.log(error);
        });
    };
    UserPage.prototype.addUsuario = function (accion, usuario) {
        var modalSitio = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__add_user_add_user__["a" /* AddUserPage */], { usuario: usuario, 'accion': accion });
        modalSitio.present();
        //this.navCtrl.push(AddUserPage,{usuario:usuario, 'accion': accion});
    };
    UserPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"C:\karen\app\src\pages\user\user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Usuarios</ion-title>\n\n    <ion-buttons end>\n      <button  ion-button icon-only (click)="addUsuario(\'nuevo\',usuario)" >\n        <ion-icon name="person-add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item text-wrap *ngFor="let usuario of usuarios" (click)="addUsuario(\'editar\',usuario)">\n      <ion-avatar item-start>\n          <img src="../assets/imgs/usuario.png">\n      </ion-avatar>\n        <h2><strong>{{usuario.nombre}} {{usuario.primerApellido}}</strong></h2>\n        {{usuario.email}}\n        {{usuario.telefono}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\karen\app\src\pages\user\user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-group/add-group.module": [
		292,
		6
	],
	"../pages/add-user/add-user.module": [
		291,
		5
	],
	"../pages/chat/chat.module": [
		293,
		4
	],
	"../pages/contact/contact.module": [
		294,
		3
	],
	"../pages/group/group.module": [
		295,
		2
	],
	"../pages/menu/menu.module": [
		296,
		1
	],
	"../pages/user/user.module": [
		297,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__database__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        //this.usuario = {matricula: '', password: ''};
    }
    LoginPage.prototype.login = function (matricula, password) {
        var _this = this;
        this.http.login(matricula, password).subscribe(function (res) {
            console.log(res);
            if (res != '') {
                _this.usuario = res;
                console.log((res));
                var sesionActiva = 1; //sesión iniciada
                var usuarioLog = new __WEBPACK_IMPORTED_MODULE_4__database__["b" /* SesionUsuario */](res.id, res.nombre, res.primerApellido, res.segundoApellido, res.genero, res.email, res.telefono, res.matricula, res.password, sesionActiva);
                usuarioLog.saveUsuarioLog();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                _this.alerta();
            }
        }, function (error) {
            // console.log("eroooooooooooooooor");
            //console.log(error);
            //alerta();
        });
    };
    LoginPage.prototype.alerta = function () {
        var alert = this.alertCtrl.create({
            title: 'Datos erróneos',
            subTitle: 'Por favor, inténtelo otra vez.',
            buttons: ['OK']
        });
        alert.present();
        this.usuario = null;
    };
    LoginPage.prototype.getUsuarioLogin = function () {
        return this.usuario;
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\karen\app\src\pages\login\login.html"*/'<ion-header>\n    \n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    \n    <ion-card-content>\n      <ion-list >\n        <ion-item>\n          <ion-label floating>Nombre de usuario</ion-label>\n          <ion-input type="text"  [(ngModel)]="matricula"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label floating>Contraseña</ion-label>\n          <ion-input type="password"  [(ngModel)]="password"></ion-input>\n        </ion-item>\n      </ion-list>\n\n      \n        <button ion-button  block  color="secondary" (click)="login(matricula,password)" >Acceder</button>      \n      \n    </ion-card-content>\n    \n    \n    \n   \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\karen\app\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, http, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.popoverCtrl = popoverCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadChats();
    };
    HomePage.prototype.openChat = function (chat) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */], { 'chat': chat });
    };
    HomePage.prototype.loadChats = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3__database__["b" /* SesionUsuario */].getUsuarioLog()
            .then(function (result) {
            _this.usuarioLogin = result[0];
            console.log(_this.usuarioLogin.id);
            _this.http.getAllChats(_this.usuarioLogin.id).subscribe(function (res) {
                console.log(res);
                _this.chats = res;
            }, function (error) {
                console.log("erroooooooooooooooor");
                console.log(error);
            });
        });
    };
    HomePage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */]);
        popover.present({
            ev: myEvent
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\karen\app\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons right>\n      <button  ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n    \n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item text-wrap *ngFor="let chat of chats" (click)="openChat(chat)" >\n      <ion-avatar item-start>\n          <img src="../assets/imgs/usuario.png">\n      </ion-avatar>\n        <h2><strong>{{chat.nombre}}</strong></h2>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\karen\app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__["a" /* ChatProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_http__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chat_chat__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_menu_menu__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_user_user__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_add_user_add_user__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_group_group__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_add_group_add_group__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_user_user__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_group_group__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_chat_chat__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_add_user_add_user__["a" /* AddUserPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_group_group__["a" /* GroupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_add_group_add_group__["a" /* AddGroupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true,
                }, {
                    links: [
                        { loadChildren: '../pages/add-user/add-user.module#AddUserPageModule', name: 'AddUserPage', segment: 'add-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-group/add-group.module#AddGroupPageModule', name: 'AddGroupPage', segment: 'add-group', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/group/group.module#GroupPageModule', name: 'GroupPage', segment: 'group', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_add_user_add_user__["a" /* AddUserPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_group_group__["a" /* GroupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_add_group_add_group__["a" /* AddGroupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_http_http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_group_group__["a" /* GroupProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_chat_chat__["a" /* ChatProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__database__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_6__database__["b" /* SesionUsuario */].getUsuarioLog()
                .then(function (result) {
                console.log(result[0]);
                if (result[0] != null) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
                }
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\karen\app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\karen\app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpProvider = (function () {
    function HttpProvider(http) {
        this.http = http;
        this.url = 'http://localhost/app/controllers/';
    }
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppDB */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SesionUsuario; });
/* unused harmony export Contacto */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mensaje; });
/* unused harmony export db */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dexie__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppDB = (function (_super) {
    __extends(AppDB, _super);
    function AppDB() {
        var _this = _super.call(this, "AppDB") || this;
        _this.version(1).stores({
            usuarioLog: '++id,nombre,primerApellido,segundoApellido,genero,email,telefono,accesos,ultimoAcceso,imagenNombre,imagenPath,matricula,password,sesionActiva',
            contactos: '++id,tipo,nombre,primerApellido,segundoApellido,genero,email,telefono,ultimoAcceso',
            mensajes: '++id,contenido,status,usuarioEmisor,usuarioReceptor,fechaEnvio,fechaRecibido,conversacionId'
        });
        _this.usuarioLog.mapToClass(SesionUsuario);
        _this.contactos.mapToClass(Contacto);
        _this.mensajes.mapToClass(Mensaje);
        return _this;
    }
    return AppDB;
}(__WEBPACK_IMPORTED_MODULE_0_dexie__["a" /* default */]));

var SesionUsuario = (function () {
    function SesionUsuario(id, nombre, primerApellido, segundoApellido, genero, email, telefono, matricula, password, sesionActiva, accesos, ultimoAcceso, imagenNombre, imagenPath) {
        this.id = id;
        this.nombre = nombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.genero = genero;
        this.email = email;
        this.telefono = telefono;
        this.matricula = matricula;
        this.password = password;
        this.sesionActiva = sesionActiva;
        if (accesos)
            this.accesos = accesos;
        if (ultimoAcceso)
            this.ultimoAcceso = ultimoAcceso;
        if (imagenNombre)
            this.imagenNombre = imagenNombre;
        if (imagenPath)
            this.imagenPath = imagenPath;
        // if(id)  this.id                     = id;  
    }
    Object.defineProperty(SesionUsuario.prototype, "getNombre", {
        // GET de los atributos de la clase 
        get: function () {
            return this.nombre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SesionUsuario.prototype, "setNombre", {
        // SET
        set: function (nombre) {
            this.nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    SesionUsuario.prototype.get = function () {
        return db.usuarioLog.toArray()[0];
    };
    SesionUsuario.getUsuarioLog = function () {
        return db.usuarioLog.toArray();
    };
    SesionUsuario.prototype.saveUsuarioLog = function () {
        return db.usuarioLog.put(this);
    };
    SesionUsuario = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [Number, String, String, String, String, String, String, String, String, Number, Number, String, String, String])
    ], SesionUsuario);
    return SesionUsuario;
}());

var Contacto = (function () {
    function Contacto(tipo, nombre, primerApellido, segundoApellido, genero, email, telefono, id) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.genero = genero;
        this.email = email;
        this.telefono = telefono;
        if (primerApellido)
            this.primerApellido = primerApellido;
        if (segundoApellido)
            this.segundoApellido = segundoApellido;
        if (genero)
            this.genero = genero;
        if (email)
            this.email = email;
        if (telefono)
            this.telefono = telefono;
        if (id)
            this.id = id;
    }
    Contacto.prototype.save = function () {
        return db.contactos.add(this);
    };
    Contacto.all = function () {
        return db.contactos.orderBy("id").reverse().toArray();
    };
    return Contacto;
}());

var Mensaje = (function () {
    function Mensaje(contenido, status, usuarioEmisor, usuarioReceptor, fechaEnvio, fechaRecibido, conversacionId, id) {
        this.contenido = contenido;
        this.status = status;
        this.usuarioEmisor = usuarioEmisor;
        this.usuarioReceptor = usuarioReceptor;
        if (fechaEnvio)
            this.fechaEnvio = fechaEnvio;
        if (fechaRecibido)
            this.fechaRecibido = fechaRecibido;
        if (conversacionId)
            this.conversacionId = conversacionId;
        if (id)
            this.id = id;
    }
    Mensaje.prototype.save = function () {
        return db.mensajes.add(this);
    };
    Mensaje.all = function (usuarioReceptor, usuarioEmisor) {
        return db.mensajes
            .where('[usuarioReceptor+usuarioEmisor]').equals([usuarioReceptor, usuarioEmisor])
            .or('[usuarioReceptor+usuarioEmisor]').equals([usuarioEmisor, usuarioReceptor])
            .toArray();
        //.where('usuarioReceptor').equals(usuarioReceptor)
        //.where("[usuarioReceptor,usuarioEmisor]").equals([usuarioReceptor,usuarioEmisor])
        //.and(usuarioEmisor => mensajes.indexOf(mensaje.usuarioEmisor))
    };
    return Mensaje;
}());

var db = new AppDB();
//# sourceMappingURL=database.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = (function () {
    function UserProvider(http) {
        this.http = http;
        this.url = 'http://localhost/app/controllers/usuarioControler.php';
        console.log('Hello UserProvider Provider');
    }
    UserProvider.prototype.login = function (matricula, password) {
        var datos = { operation: 'login', matricula: matricula, password: password };
        return this.http
            .post(this.url, JSON.stringify(datos))
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        });
    };
    UserProvider.prototype.get = function () {
        var datos = { operation: 'get' };
        return this.http
            .post(this.url, JSON.stringify(datos))
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        });
    };
    UserProvider.prototype.save = function (usuario) {
        var datos = { operation: 'save', usuario: usuario };
        return this.http
            .post(this.url, JSON.stringify(datos))
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        });
    };
    UserProvider.prototype.update = function (usuario) {
        var datos = { operation: 'update', usuario: usuario };
        return this.http
            .post(this.url, JSON.stringify(datos))
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the GroupProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GroupProvider = (function () {
    function GroupProvider(http) {
        this.http = http;
        this.url = 'http://localhost/app/controllers/grupoController.php';
        console.log('Hello GroupProvider Provider');
    }
    GroupProvider.prototype.getGruposUsuario = function (usuarioId) {
        var datos = { operation: 'getGruposUsuario', usuarioId: usuarioId };
        return this.http
            .post(this.url, JSON.stringify(datos))
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        });
    };
    GroupProvider.prototype.get = function () {
        var datos = { operation: 'get' };
        return this.http
            .post(this.url, JSON.stringify(datos))
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        });
    };
    GroupProvider.prototype.save = function (usuario) {
        var datos = { operation: 'save', usuario: usuario };
        return this.http
            .post(this.url, JSON.stringify(datos))
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        });
    };
    GroupProvider.prototype.update = function (usuario) {
        var datos = { operation: 'update', usuario: usuario };
        return this.http
            .post(this.url, JSON.stringify(datos))
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        });
    };
    GroupProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], GroupProvider);
    return GroupProvider;
}());

//# sourceMappingURL=group.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChatProvider = (function () {
    function ChatProvider(http) {
        this.http = http;
        this.url = 'http://localhost/app/controllers/conversacionController.php';
        console.log('Hello ChatProvider Provider');
    }
    ChatProvider.prototype.save = function (conversacion) {
        var datos = { operation: 'save', conversacion: conversacion };
        return this.http
            .post(this.url, JSON.stringify(datos))
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        });
    };
    ChatProvider.prototype.saveMensaje = function (mensaje) {
        var datos = { operation: 'saveMensaje', mensaje: mensaje };
        return this.http
            .post(this.url, JSON.stringify(datos))
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        });
    };
    ChatProvider.prototype.getAllChats = function (usuarioId) {
        var datos = { operation: 'getAllChats', usuarioId: usuarioId };
        return this.http
            .post(this.url, JSON.stringify(datos))
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        });
    };
    ChatProvider.prototype.getChat = function (chat) {
        var datos = { operation: 'getChat', chat: chat };
        return this.http
            .post(this.url, JSON.stringify(datos))
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        });
    };
    ChatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], ChatProvider);
    return ChatProvider;
    var _a;
}());

//# sourceMappingURL=chat.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map