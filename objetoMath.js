

var PI = Math.PI;
var E = Math.E;

console.log(PI);
console.log(E);

var num1 =  10.656789;

console.log(num1);
//recibe el numero que se quiere redondear y lo hace
console.log( Math.round( num1*100 ));
//deja el numero entero
console.log( Math.floor( num1 ) );

var rnd = Math.random();
console.log( rnd );



function randomEntre(min, max){
    return Math.floor (Math.random() * ( max-min + 1 ) + min);
}

console.log( randomEntre(1,6));

console.log( Math.sqrt(8));

console.log(Math.pow(7,2));