//Se debe correr el codigo en algún servidor



/* 
document.cookie = "nombre=francisco";
document.cookie = "apellido=vera" */

function crearCookie( nombre, valor){
    valor = escape(valor);

    var hoy = new Date();
    hoy.setMonth(hoy.getMonth() + 1 );

    document.cookie = nombre+"="+ valor +";expires= "+ hoy.toUTCString()+";";

}

function borrarCookie( nombre ){
    var hoy = new Date();
    hoy.setMonth(hoy.getMonth() - 1 );

    document.cookie = nombre+"=x;expires=" + hoy.toUTCString()+";";

}

function getCookie( nombre ) {

    var cookies = document.cookie;

    var cookieArr = cookies.split("; ");

    console.log( cookieArr );

    for( var i =0; i< cookieArr.length ; i++){

        var parArr = cookieArr[i].split("=");
        cookieArr[i] = parArr;

        if( parArr[0] === nombre ){
            return unescape( parArr[1]);
        }
    }

    console.log(cookieArr);
    
    return undefined;
}


//crearCookie("nombre","Fernando");
//crearCookie( "correo","informatica.vera2@gmail.com");
//crearCookie( "direccion", "santiago, Chile");
console.log(getCookie("direccion"));


/* var demo = "123;123*132'123";

console.log(demo);
console.log(escape(demo));
console.log(unescape(demo)); */



//console.log(cookies);