

// Los objetos literales son como diccionarios

let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    coords:{
        lat:34.034,
        lng: -118.70
    }, 
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '100880, 99456',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula':'Infinity War'
};
console.log(personaje);
// 1 Forma
console.log('Nombre', personaje.nombre);
// Otra forma
console.log('Nombre: ', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coors', personaje.coords);
console.log('Lat', personaje.coords.lat);
console.log('Nº Trajes: ', personaje.trajes.length);
console.log('Último Traje', personaje.trajes[personaje.trajes.length-1]);


const x = 'vivo';
console.log('Vivo', personaje[x]);


console.log('Última película', personaje['ultima-pelicula']);


// Mas detalles
// Poder eliminar una propiedad:
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

// Trabajar el objeto como un arreglo
// El resultado son pares de valores, sirve mucho para poder recorrer el objeto como arreglo
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

console.log(personaje);

// Para hacer un bloqueo de las propiedades y de las modificaciones
Object.freeze(personaje);
// Este congela a las asginaciones directas pero no a las inmersas dentro de los objectos
personaje.dinero = 10000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log(personaje);

// Se necesita un listado de todas las propiedades que tiene un objeto
const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);
// Si se necesitan los valores
const valores = Object.values(personaje);
console.log({valores});