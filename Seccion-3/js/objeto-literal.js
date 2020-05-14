

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