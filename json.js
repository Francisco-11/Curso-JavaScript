

var objetoJS = {
    nombre: "Francisco",
    edad: 30
};

console.log("Objeto literal ", objetoJS);

var json = JSON.stringify(objetoJS);


console.log(json);


var objetoDesdeJson = JSON.parse(json);

console.log(objetoDesdeJson);