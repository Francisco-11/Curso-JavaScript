

//Las fechas son objetos
var hoy = new Date();
var fMili = new Date(1);
var fFija = new Date (2016, 9, 21, 23, 10, 15, 1)

//console.log(hoy);
//console.log(fMili);
//console.log(fFija);
//console.log(hoy.getFullYear());
//Representación en milisegundos
//console.log(hoy.getTime());




var inicio = new Date();

for (var i=0; i < 15000; i++ ) {
    console.log("Algo...");
}

var fin = new Date ();

//console.log( inicio );
//console.log( fin );

var duracion = fin.getTime() - inicio.getTime();
console.log( (duracion)/1000, "segundos" );