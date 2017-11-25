import  Dexie  from 'dexie';
import { Injectable } from '@angular/core';



export class AppDB extends Dexie{

    usuarioLog : Dexie.Table<IUsuario,number>;
    contactos : Dexie.Table<IContacto,number>;
    mensajes : Dexie.Table<IMensaje,number>;
    
    constructor(){
        super("AppDB");

        this.version(1).stores({
            usuarioLog  : '++id,nombre,primerApellido,segundoApellido,genero,email,telefono,accesos,ultimoAcceso,imagenNombre,imagenPath,matricula,password,sesionActiva',
            contactos    : '++id,tipo,nombre,primerApellido,segundoApellido,genero,email,telefono,ultimoAcceso',
            mensajes    : '++id,contenido,status,usuarioEmisor,usuarioReceptor,fechaEnvio,fechaRecibido,conversacionId'
        });

        this.usuarioLog.mapToClass(SesionUsuario);
        this.contactos.mapToClass(Contacto);        
        this.mensajes.mapToClass(Mensaje);
    }
}

@Injectable()
export class SesionUsuario implements IUsuario{
     id                   ?:number;
     nombre                :string;
     primerApellido        :string;
     segundoApellido       :string;
     genero                :string;
     email                 :string;
     telefono              :string;
     accesos               :number;
     ultimoAcceso          :string;
     imagenNombre          :string;
     imagenPath            :string;
     matricula             :string;
     password              :string;
     sesionActiva          :number;

    
    constructor(
        id                    :number,
        nombre                :string,
        primerApellido        :string,
        segundoApellido       :string,
        genero                :string,
        email                 :string,
        telefono              :string,
        matricula             :string,
        password              :string,
        sesionActiva          :number,

        accesos              ?:number,
        ultimoAcceso         ?:string,
        imagenNombre         ?:string,
        imagenPath           ?:string
        
    ){
        this.id                 = id;
        this.nombre             = nombre;
        this.primerApellido     = primerApellido;
        this.segundoApellido    = segundoApellido;
        this.genero             = genero;
        this.email              = email;
        this.telefono           = telefono;
        this.matricula          = matricula;
        this.password           = password;
        this.sesionActiva       = sesionActiva;

        if(accesos) this.accesos            = accesos;
        if(ultimoAcceso) this.ultimoAcceso  = ultimoAcceso ;  
        if(imagenNombre) this.imagenNombre  = imagenNombre;
        if(imagenPath) this.imagenPath      = imagenPath;        
        // if(id)  this.id                     = id;  
    }


    // GET de los atributos de la clase 
    get getNombre():string {
        return this.nombre;
    }




    // SET
    set setNombre(nombre:string) {
        this.nombre = nombre;
    } 

    get(){
        return db.usuarioLog.toArray()[0];
    }

    static getUsuarioLog(){
        return db.usuarioLog.toArray();
    }
    
    saveUsuarioLog(){
        return db.usuarioLog.put(this);        
    }

}

export class Contacto implements IContacto{
    id                   ?:number;
    tipo                  :number;
    nombre                :string;
    primerApellido        :string;
    segundoApellido       :string;
    genero                :string;
    email                 :string;
    telefono              :string;
    ultimoAcceso          :string;
 

    constructor(
        tipo                  :number,
        nombre                :string,
        primerApellido       ?:string,
        segundoApellido      ?:string,
        genero               ?:string,
        email                ?:string,
        telefono             ?:string,
        id                   ?:number
    ){
        this.tipo               = tipo;
        this.nombre             = nombre;
        this.primerApellido     = primerApellido;
        this.segundoApellido    = segundoApellido;
        this.genero             = genero;
        this.email              = email;
        this.telefono           = telefono;
     
        if(primerApellido)  this.primerApellido         = primerApellido;  
        if(segundoApellido)  this.segundoApellido       = segundoApellido;  
        if(genero)  this.genero                         = genero;  
        if(email)  this.email                           = email;  
        if(telefono)  this.telefono                     = telefono;  
        if(id)  this.id                                 = id;  
    }

    save(){
        return db.contactos.add(this);
    }

    static all(){
        return db.contactos.orderBy("id").reverse().toArray();
    }

}


export class Mensaje implements IMensaje{
    id                   ?:number;
    contenido             :string;
    status                :string;
    usuarioEmisor         :number;
    usuarioReceptor       :number;
    fechaEnvio            :string;
    fechaRecibido         :string;
    conversacionId          :number;

    constructor(
        contenido           :string,
        status              :string,
        usuarioEmisor       :number,
        usuarioReceptor     :number,
        fechaEnvio         ?:string,
        fechaRecibido      ?:string,
        conversacionId     ?:number,
        id                 ?:number
    ){
        this.contenido          = contenido;
        this.status             = status;
        this.usuarioEmisor      = usuarioEmisor;
        this.usuarioReceptor    = usuarioReceptor;
        
        if(fechaEnvio) this.fechaEnvio          = fechaEnvio;
        if(fechaRecibido) this.fechaRecibido    = fechaRecibido;
        if(conversacionId) this.conversacionId  = conversacionId;
        if(id)  this.id                         = id;  
    }

    save(){
        return db.mensajes.add(this);
    }

    static all(usuarioReceptor,usuarioEmisor){
        return db.mensajes
            .where('[usuarioReceptor+usuarioEmisor]').equals([usuarioReceptor,usuarioEmisor])
            .or('[usuarioReceptor+usuarioEmisor]').equals([usuarioEmisor,usuarioReceptor])
            .toArray();

            //.where('usuarioReceptor').equals(usuarioReceptor)
            //.where("[usuarioReceptor,usuarioEmisor]").equals([usuarioReceptor,usuarioEmisor])
            //.and(usuarioEmisor => mensajes.indexOf(mensaje.usuarioEmisor))
    }

}

export interface IUsuario{
    id?                   :number;
    nombre                :string;
    primerApellido        :string;
    segundoApellido       :string;
    genero                :string;    
    email                 :string;
    telefono              :string;
    accesos               :number;
    ultimoAcceso          :string;
    imagenNombre          :string;
    imagenPath            :string;
    matricula             :string;
    password              :string;
    sesionActiva          :number;
}

export interface IContacto{
    id?                   :number;
    tipo                  :number;
    nombre                :string;
    primerApellido        :string;
    segundoApellido       :string;
    genero                :string;    
    email                 :string;
    telefono              :string;
    ultimoAcceso          :string;
}

export interface IMensaje{
    id?                   :number;
    contenido             :string;
    status                :string;
    usuarioEmisor         :number;
    usuarioReceptor       :number;
    fechaEnvio            :string;
    fechaRecibido         :string;
    conversacionId        :number;
}

export interface IConversacion{
    id?                   :number;
    puerto                :number;
    tipo                  :number;
    fecha                 :string;
    grupoId               :number;
}

export interface IArchivo{
    id?                   :number;
    mensajeId             :number;
    tipo                  :number;
    nombre                :string;
    path                  :string;
}


export interface IGrupo{
    id?                   :number;
    pid                   :number;
    nombre                :string;
    cursoId               :number;
}



export let db = new AppDB();