//Un objeto tipo string es un objeto, no una cadena de caracteres

var b = "Vera";


var a = new String ("Francisco Vera");

//Hace pensar que se esta manejando un arreglo pero NO, es unn objeto, 

console.log(a);


console.log(a.toUpperCase());
console.log(a.toLocaleLowerCase());


var i = a.indexOf("a");
console.log("La letra esta en: "+ i);

var i = a.lastIndexOf("a");
console.log("La letra esta en: "+ i);

//Hacer un corte o solo una parte
//primer paramentro donde se parte el corte
//segundo paramentro donde se termina a partir del primero
var nombre = a.substr(0,a.indexOf(" "));
console.log(nombre);

var split = a.split(" ");
console.log(split);
console.log(split.length);


//================

document.write(a.italics());