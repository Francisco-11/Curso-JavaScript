

let a = 9;


if (a >= 10) { 
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay(); //0: Domingo, 1: Lunes, 2: Martes...

console.log({dia});

if (dia === 0){
    console.log('Domingo');
} else {
    console.log('No es Domingo');
    if (dia === 1) {
        console.log('Lunes');
    } else {
        console.log('No es lunes ni domingo');
    }
}

// Sin usar If Else, o Switch, únicamente objetos
dia=3;

const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miércoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado'
}
// dia de la semana
console.log(diasLetras[dia] || 'dia no definido');



