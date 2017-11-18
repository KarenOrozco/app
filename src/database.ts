import  Dexie  from 'dexie';

export class AppDB extends Dexie{

    usuarioLog : Dexie.Table<IUsuario,number>;
    usuarios : Dexie.Table<IUsuario,number>;
    mensajes : Dexie.Table<IMensaje,number>;
    
    constructor(){
        super("AppDB");

        this.version(1).stores({
            usuarioLog  : 'id,nombre,primerApellido,segundoApellido,genero,email,telefono,accesos,ultimoAcceso,imagenNombre,imegenPath,matricula,password',
            usuarios    : '++id,nombre,primerApellido,segundoApellido,genero,email,telefono,accesos,ultimoAcceso,imagenNombre,imegenPath,matricula,password',
            mensajes    : '++id,contenido,status,usuarioEmisor,usuarioReceptor,fechaEnvio,fechaRecibido'
        });

        this.usuarios.mapToClass(Usuario);
        this.mensajes.mapToClass(Mensaje);
    }
}

export class Usuario implements IUsuario{
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
    imegenPath            :string;
    matricula             :string;
    password              :string;

    constructor(
        nombre                :string,
        primerApellido        :string,
        segundoApellido       :string,
        genero                :string,
        email                 :string,
        telefono              :string,
        matricula             :string,
        password              :string,

        accesos              ?:number,
        ultimoAcceso         ?:string,
        imagenNombre         ?:string,
        imegenPath           ?:string,
        id                   ?:number,
        
    ){
        this.nombre             = nombre;
        this.primerApellido     = primerApellido;
        this.segundoApellido    = segundoApellido;
        this.genero             = genero;
        this.email              = email;
        this.telefono           = telefono;
        this.matricula          = matricula;
        this.password           = password;

        if(accesos) this.accesos            = accesos;
        if(ultimoAcceso) this.ultimoAcceso  = ultimoAcceso ;  
        if(imagenNombre) this.imagenNombre  = imagenNombre;
        if(imegenPath) this.imegenPath      = imegenPath;        
        if(id)  this.id                     = id;  
    }

    save(){
        return db.usuarios.add(this);
    }

    static all(){
        return db.usuarios.orderBy("id").reverse().toArray();
    }

    static getUsuarioLog(){
        return db.usuarioLog.toArray();
    }
    
    static saveUsuarioLog(usuarioLog){
        return db.usuarioLog.add(usuarioLog);        
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
    conversacion          :number;

    constructor(
        contenido           :string,
        status              :string,
        usuarioEmisor       :number,
        usuarioReceptor     :number,
        fechaEnvio         ?:string,
        fechaRecibido      ?:string,
        conversacion       ?:number,
        id                 ?:number
    ){
        this.contenido          = contenido;
        this.status             = status;
        this.usuarioEmisor      = usuarioEmisor;
        this.usuarioReceptor    = usuarioReceptor;
        
        if(fechaEnvio) this.fechaEnvio          = fechaEnvio;
        if(fechaRecibido) this.fechaRecibido    = fechaRecibido;
        if(conversacion) this.conversacion      = conversacion;
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
    imegenPath            :string;
    matricula             :string;
    password              :string;
}

export interface IMensaje{
    id?                   :number;
    contenido             :string;
    status                :string;
    usuarioEmisor         :number;
    usuarioReceptor       :number;
    fechaEnvio            :string;
    fechaRecibido         :string;
    conversacion          :number;
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