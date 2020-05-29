


function determinaDato(a){
    if( a === undefined){
        console.log("A es undefined.. no se que hacer");
    }

    if(typeof a === "number"){
        console.log("A es un número, y puedo hacer operación con números");        

    }

    if( typeof a === "string"){
        console.log("A es un texto, puedo hacer operaciones con texos");
    }

    if( typeof a === "object"){
        console.log("A es un objeto... pero puede cualquier cosa...");

        if(a instanceof Number ){
            console.log("A es un objeto numerico...");
        }
    }

}

var b = new Number(3); //Es un objeto de tipo numero

console.log( b );

determinaDato( b );

/* determinaDato({
    nombre: "Fernando"
}); */