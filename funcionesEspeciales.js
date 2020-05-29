//toda funcion de javascript tiene tres metodos que estan en us prototipo


var carro = {
    color: "Blanco",
    marca: "Mazda",
    imprimir: function(){
        var salida = this.marca + " - " + this.color;
        return salida;
    }
}

var carro2= {
    color: "Rojo",
    marca: "Toyota"
}


console.log( carro.imprimir());

var logCarro = function( arg1, arg2 ){
    console.log("Carro: ", this.imprimir()); //Este this apunta al objeto global y falla
    console.log("Argumentos: ", arg1, arg2);
    console.log("======================");
}

//Podemos alterar que valor puede tener this cuando se llame a la función
//en este caso hacemos que el prototipo bind apunte al objeto bind
var logModeloCarro = logCarro.bind( carro ); //setea esto en el this



logModeloCarro("abc","xyz");

//Esta invoca a la función en el primer parametro, luego se ingresan los parametros.
logModeloCarro.call(carro, "123", "xyz");

//similar a la anterior, pero lo que se espera son dos argumentos.
//primero el objeto y luego un arreglo con n elementos que puede contener
logModeloCarro.apply(carro, ["123", "wsd"]);

//Todo esto sirve para funciones Prestadas

console.log(carro.imprimir.call(carro2));

