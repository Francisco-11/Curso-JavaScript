
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');
for(let i=0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

//SE PUEDE OCUPAR EL BREAK Y CONTINUO DE IGUAL FORMA


//FOR IN
//es utilizado cuando queremos barrer un objeto y las propiedades de dicho objeto
console.warn('For In');
for(let i in heroes){
    console.log(heroes[i]);
}

// Extrae el valor del arreglo y lo regresa a la variable heroe
console.warn('For of');
for(let heroe of heroes){       
    console.log(heroe);
}
