
//try: javascript intenta realizar lo que esta dentro de los {}
try{

    /* var a = 100;
    throw es disparar
    if( a === 103 ){
        throw 'que mal';
    }else{
        throw 'oh oh!';
    }

    console.log("El valor de a: ", a); */

    //throw new Error('Error tipo 1');

    /* throw {
        nombreerror: "Error tipo 1",
        accion: "Salir corriendo a echarle agua al servidor",
        codeerror: 1
    }
 */

    /* throw function(){
        console.log("Función del throw...");
    } */
    //console.log("Esa parte nunca se ejecuta");

    throw 1;

}
//Si falla ejecuta esto
catch(e){

    /* if( e === "que mal"){
        console.log("Error tipo 1");
    }
    if( e === "oh oh!"){
        console.log("Error tipo 2");
    } */

    //console.log(e.message);

    /* console.log( e );
    console.log( e.nombreerror );
    console.log( e.accion );
    console.log( e.codeerror ); */

    /* e();

    console.log("Parte del catch"); */

    registroError(e);
}
//Si no va el catch (opcional), debe ir el finally{} 
finally{
    console.log("Finalmente");
}


function registroError(e){

    var ahora = new Date()

    console.log("Se registro un error: ", e, "a las: " , ahora.getTime());

}

