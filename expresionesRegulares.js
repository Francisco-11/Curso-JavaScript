//son buenas para buscar información dentro de una cadena de caracteres
//Dos tipos explicita (usando el consultor) y otra literal (se define en el momento)

var reg1 = RegExp("a"); //va a buscar en la cadena de texto el valor "a"
var reg2 = /a/;


var texto = "HolA MundOoooo ñú, 12234.";

//regresa por lo menos si y solo si una vez encontro ese valor
//Si se le incorpora a la expresion regular el signo /^a/, comprueba si el caracter se enceuntra en la primera posición

var arr = texto.match (/^a/);
console.log(arr);

//Si se le incorpora a la expresion regular el signo /a$/, comprueba si el caracter se enceuntra al final de la cadena

var arr = texto.match (/o$/);
console.log(arr);

//se incoirpora ... serian los tres primeros caracteres donde se haga match
var arr = texto.match (/.../);
console.log(arr);

//quiero el primer caracter sin importar cual sea, pero q sea o
var arr = texto.match (/^.o/);
console.log(arr);

//[] se puede definir un rango numero [0-9] o de caracteres [a-zA-Z]
var arr = texto.match (/^H[aeiou]/);
console.log(arr);

//buscar cualquier separacion que tenga \s
var arr = texto.match (/\s/);
console.log(arr);

//buscar [a-zA-z0-9] es lo mismo que colocar \w
var arr = texto.match (/\w/);
console.log(arr);

//buscar [0-9] es lo mismo que colocar \d
var arr = texto.match (/\d/);
console.log(arr);


//Tienen 3 controladores las expresiones regulares
//i = insensible
//g = todas apariciones
//m = multilinea
var arr = texto.match (/[aeiou]/gi);
console.log(arr);

//| funciona como un o
var arr = texto.match (/[aeiou]|[áéíóúñ]/gi);
console.log(arr);

//cualquier cantidad seguida del caracter +
var arr = texto.match (/o+/g);
console.log(arr);

//tiene que aparecer o no tiene q aparecer ?
var arr = texto.match (/o?/g);
console.log(arr);

//tiene que aparecer o no tiene q aparecer *
var arr = texto.match (/o*/g);
console.log(arr);

//tiene que aparecer por lo menos tantas veces se indique entre {2,}dos a todas las que venga (,)
//{3,4} tres o's  o  4 o's
var arr = texto.match (/o{2,}/g);
console.log(arr);