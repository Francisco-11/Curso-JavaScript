// Tipo de dato de una variable: Describe el contenido del valor que tienen la variable
// Primitivos: Es una información que no es un objeto y son inmutables
// 
// - Boolean: true/false 
// - Null: sin valor en lo absoluto
// - Undefined: Una variable declarada que aún no se le asigna valor
// - Number: Integers, floats, etc
// - String: Una cadena de caracteres
// - Symbol: Es un valor único que no es igual a ningún otro valor

//Tipos de Datos primitivos

let nombre = 'Peter Parker';
console.log( nombre );

nombre = 'Ben Parker';
console.log(nombre);


nombre = "Tía May";
nombre = `Tía May`;

// Para saber el tipo de dato de la variable
console.log(typeof nombre);

// booleano
let esMarvel = true;
console.log( typeof esMarvel);
// numero
let edad = 33;
console.log(typeof edad);

// Undefined
let superPoder;
console.log(typeof superPoder);

// null
let soyNull = null;
console.log(typeof soyNull);

// Permite crear identificadores unicos al JavaScript
let symbol1 = Symbol();
let symbol2 = Symbol();

console.log(typeof symbol1);

console.log(symbol1 === symbol2);