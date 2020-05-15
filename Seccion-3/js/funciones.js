function saludar( nombre ){
    console.log(arguments);
    console.log('Hola '+ nombre);
    return [1,2];
}

const retornoDeSaludar = saludar('Francisco',49,true,'costa rica');


// Función de Flecha

const saludarFlecha = ()=>{
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre)=>{
    console.log('Hola '+ nombre);
    
}

saludarFlecha();
saludarFlecha2('Constanza');
console.log(retornoDeSaludar[0], retornoDeSaludar[1]);


function sumar(a,b){
    return a +b;
}
console.log(sumar(1,2));

const sumar2 = (a,b)=>{
    return a+b;
}
console.log('suma 2:  '+sumar(1,2));


// otro ejercicio

function getAleatorio(){
    return Math.random();
}
console.log(getAleatorio());

// Ahora en función de flecha, que la función se llame getAleatorio2()

const getAleatorio2 = ()=> Math.random();

console.log(getAleatorio2());

