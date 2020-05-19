//Argumentos

var arguments = 10;

function miFuncion(a, b, c, d){
    
    if(arguments.length !== 4 ){
        console.error("La función necesita 4 parametros");
        alert("");
        return;
    }

    console.log( a + b + c + d);
}

miFuncion(10, 20, 30, 40);