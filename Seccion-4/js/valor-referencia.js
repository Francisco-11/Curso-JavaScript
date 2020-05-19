
// Pasados por referencia
let a = 10;
let b = a;
a = 30;

console.log({a,b});

let juan = { nombre: 'Juan'};
let ana = {...juan};
ana.nombre='Ana';
console.log({juan,ana});

// Pasa que ana y juan tendran el nombre de Ana finalmente, se resuelve con let ana={...juan}
// Esto es debido a que todos los objetos son pasados por referencia

const cambiaNombre = ({...persona})=>{
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre:'Peter'};
let tony = cambiaNombre(peter);

console.log({peter,tony});

// lo anterior se resuelve con {...}


// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

const otrasFrutas =[...frutas];

otrasFrutas.push('Mango');
console.table({frutas, otrasFrutas});

//Paso por valor o por Referencia
//Las variables primitivas siempre se pasan por valor
var c = 10;
var d = c;

console.log("c: ",c);
console.log("d: ",d);
 
c = 20;
 
console.log("c: ",c);
console.log("d: ",d);


//cuando son objetos los que se estan igualando
//siempre se pasan por referencia
//apuntan al mismo espacio de memoria
// var c = {
//     nombre: "Juana"
// }

// var d = c;

// console.log("c: ",c);
// console.log("d: ",d);

// c.nombre = "Maria";

// console.log("c: ", c);
// console.log("d: ", d);

// d.nombre = "Pedro";
// console.log("c: ", c);
// console.log("d: ", d);



