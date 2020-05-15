function saludar( nombre ){
    console.log(arguments);
    console.log('Hola '+ nombre);
}

saludar('Francisco',49,true,'costa rica');


// Función de Flecha

const saludarFlecha = ()=>{
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre)=>{
    console.log('Hola '+ nombre);
    
}

saludarFlecha();
saludarFlecha2('Constanza');