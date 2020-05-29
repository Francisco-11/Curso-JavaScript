


// var a = "Francisco"; reserva una variable en memoria

// function imprimir(){
//     for(var i=0; i<8000; i++){
//         console.log("imprimio");
//     }
// }

// function presionoClick(){
//     console.log("Click en boton");
// }
// imprimir();



//colección de tipos de datos primitivos u otros objectos

// var obj = {
//     numero: 10,
//     texto: "nuevo texto",
//     objHijo: {
//         numero2: 5,
//         text2: "Nuevo texto 2"
//     }
// };

//console.log(obj);



//Notación de punto y Corchetes
/* var persona = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion: {
        pais: "Chile",
        ciudad: "Valparaiso",
        edificio:{
            nombre: "Edificio Principal",
            telefono: "222-3334"
        }
    }
}; */

//console.log(persona.direccion.pais);
//console.log(persona.direccion);

//persona.direccion.zipcode = 11101;
//console.log(persona.direccion.zipcode); 

//console.log(persona.direccion.edificio.telefono);

//var edificio = persona.direccion.edificio;
//edificio.nopiso = "8vo Piso";

//console.log(persona);

//var campo = "edad";

//console.log(persona[campo]);

//Funciones

//var a = 30;

//Esta función genera un nuevo contexto, reserva memoria
//function primeraFuncion(){
    //var a = 20;
    //console.log( a );
//}

//primeraFuncion();

//Parametros de las funciones
//buena practica es colocar las funciones al principio del archivo
/* function imprimir ( fn) {
  fn();
}

var persona = {
    nombre: "Francisco",
    apellido: "Vera"
}


var miFuncion = function(){
    console.log("miFuncion");
}

imprimir( miFuncion); */

//Retorno de funciones

/* function obtenerAleatorio () 
{
    return Math.random();
}

function obtenerNombre()
{
    return "Juan";
} */

//console.log(obtenerAleatorio() + 10);
//console.log(obtenerNombre() + " Vera");
//var nombre = obtenerNombre();
//console.log(nombre);

/* function esMayor (){
    if( obtenerAleatorio() > 0.5){
        return true;
    }else{
        return false;
    }
}

if(esMayor() ){
    console.log("es mayor a 0.5");
}else{
    console.log("es menor a 0.5");
}
 */
//function crearPersona( nombre, apellido ) {
    //objeto explicito
    /* var obj = {}
    return {obj} */

    //Objeto 
    //return {
        //notación de pares, el primero es el nombre de la propiedad y el segundo el valor
      //  nombre : nombre,
        //apellido : apellido
    //}
//}

 //var persona  = crearPersona("Maria", "Paz");
//console.log(persona.nombre);
//console.log(persona.apellido);
 
//funciones que regresan funciones

//function creaFuncion(){
    //funcion anonima
  //  return function(nombre){
    //    console.log("Me creo "+ nombre);

      //  return function(){
        //    console.log("Segunda funcion");
//        }
 //   }
//}

//var nuevaFuncion = creaFuncion();
//nuevaFuncion(persona.nombre);
//var segundaFuncion = nuevaFuncion( persona.nombre );

//segundaFuncion();

//Funciones de Primera Clase
//Las funciones son objetos
/* function a(){

    console.log("Funcion a");



}

a();

a.nombre = "María";
a.direccion = {
    pais: "Costa Rica",
    ciudad: "San José",
    edificio: {
        piso: "8vo",
        nombre: "Edificio Principal"
    }
} */

//Métodos y Objeto THIS

/* var persona = {
    nombre : "Maria",
    apellido: "Dubon",
    imprimirNombre: function(){
        console.log(this.nombre + " " + this.apellido);
    },
    direccion: {
        pais: "Costa Rica",
        obtenerPais: function(){
            console.log(this);
            console.log("La dirección es en: "+ this.pais);
            var self = this;
            var nuevaDireccion = function(){
                console.log(this);
                console.log("La dirección es en: "+ self.pais);
            }

            nuevaDireccion();
        }
    }
};

persona.nombre = "Francisco";
persona.imprimirNombre();
persona.direccion.obtenerPais(); */

//Palabra reservada new

//var carlos = new Persona();

/* function Persona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = "28";

    this.nombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    }
}


var juan = new Persona("Juan", "Mendoza"); */
 /* var juan = new Persona();
 console.log(juan);
 console.log(juan.nombre);
 console.log(juan.nombreCompleto());
 */

//console.log(juan.nombreCompleto());

//Prototipos o  Prototype
//Prototipos permiten expandir los objetos y agregarle propiedaes o metodos a los objetos
//Sirven para hacer mas eficiente el uso de objetos

/* 
function Persona(){
    this.nombre = "Francisco";
    this.apellido ="Vera";
    this.edad = 28;
    this.pais = "Chile"

    this.imprimirInfo() = function(){
        console.log(this.nombre + " " + this.apellido + "("+this.edad+")");
    }
}



Persona.prototype.imprimirInfo = function(){
    console.log(this.nombre + " " + this.apellido + "("+this.edad+")");
};

var fer = new Persona();


Number.prototype.esPositivo = function(){
    if( this > 0 ){
        return true;
    }else{
        return false;
    }
} */


//Funciones anonimas, sirve para encapsular de mejor forma el código

//Esta variable puede ser manipulada por cambiar parte del programa
//Se mejora utilizando funciones anonimas
//Función anonima, solo presentada a ese contexto
/* (function(){
    var a = 10; 

    console.log(a);
    
    function cambiarA(){
        a = 20;
    }
    
    cambiarA();
    
    console.log( a );
})(); */

//Otro ejemplo, en el momento se crea la función

/* function ejecutarFuncion(fn){
    if(fn() === 1){
        return true;
    }else{
        return false;
    }

    
}; */
//Es una función que se le esta mandando un objeto que es de otra función, que dentro de el se esta enviando otra función.
/* console.log(ejecutarFuncion(function(){

    console.log("Función anonima ejecutada");
    return 0;
})
);
 */

 //Funciones typeof e instanceof
 //Estar seguros del tipo de dato q estamos recibiendo: typeof
//Instanceof permite comparar dos objetos
 
 function identifica( param ){
    console.log( typeof param);
    /* if(typeof param == "function"){
        param();
    }else{
        console.log(param);
    } */
    console.log(param instanceof Persona);
 }

function Persona(){
    this.nombre = "Fernando";
    this.edad = 30;
}
var juan = new Persona();
identifica("juan");



