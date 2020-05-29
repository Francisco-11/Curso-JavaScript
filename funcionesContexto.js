




function crearFunciones(){

    var arr = [];
    var numero = 1;

    for ( var numero = 1; numero <=3; numero ++){
        arr.push( //Se crea una funcion anonima para generar un contexto para esa funcion y con ello poder tener acceso a valor del primer numero y asi tbm hacer lo mismo con el resto
            (function(numero){
                return function() {
                    console.log( numero );
                }
            })(numero)
        ); 
    }
    /* numero = 2;

    arr.push( function() {
        console.log( numero );
    });

    numero = 3;
    
    arr.push( function() {
        console.log( numero );
    });
 */
    return arr;

}



var funciones = crearFunciones();

funciones[0]();
funciones[1]();
funciones[2]();