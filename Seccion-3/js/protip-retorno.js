
// function crearPersona(nombre, apellido){
//     return {
//         nombre:nombre,
//         apellido: apellido
//     }
// }
// Ahora como función de flecha

const crearPersona = (nombre,apellido) =>({nombre,apellido});

const persona = crearPersona( 'Francisco', 'Vera');
console.log(persona);
// ------------------------

function imprimeArgumentos(){
    console.log(arguments);
}

imprimeArgumentos(10,true,false,'francisco','hola');

// ahora como función de flecha
// Todos los argumentos que sean enviados, create un arreglo con todos ellos (...argumentss)
const imprimeArgumentos2 = (edad,...arguments) => {
    console.log({edad,arguments});
}
imprimeArgumentos2(10,true,true,'constanza');

// ---------------------
const imprimeargumentos3 = (edad, ...args)=>{
    return args;
}

// arreglo de constantes
const [casado,vivo,nombre,saludo] = imprimeargumentos3(30,false,true,'camila','vera');
console.log({casado,vivo,nombre,saludo});

// Quiero solo imprimir el apellido
const { apellido: nuevoApellido } = crearPersona('constanza','lopez'); 
console.log({nuevoApellido });


// Destructuración de objetos

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    //edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = (personaje) => {
    console.log(personaje.nombre);
    console.log(personaje.codeName);
    console.log(personaje.vivo);
    console.log(personaje.edad);
    console.log(personaje.trajes);
}

imprimePropiedades(tony);

// ahora destructuración
const imprimePropiedades2 = ({nombre, codeName,vivo,edad,trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades2(tony);