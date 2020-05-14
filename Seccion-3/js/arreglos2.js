
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log('Largo: ', juegos.length);

// Primer elemento
let primero = juegos[0];
let ultimo = juegos[juegos.length-1];

console.log(primero, ultimo);

juegos.forEach( (elemento, indice, arr)=>{
    console.log(elemento, indice,arr);
});

// Insertar un nuevo elemento al final
let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

// Insertar un elemento al comienzo
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});

// Borrar un elemento
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

// Borrar un elemento en alguna posición en especifico
let pos = 1;
console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

// En que lugar se encuentra cierto dato
console.log(juegos);
let metroIndex = juegos.indexOf('Metroid');
console.log({metroIndex});









