

// No es usual hacer esto
// const arr = new Array(10);
// console.log(arr);


// Es recomendable esto:
// const arr = [];
// console.log(arr);

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log(videoJuegos);

console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'fernando',
    1+2,
    function(){

    },
    ()=>{},
    { a: 1},
    ['X','Megaman','Zero','Chuma', [
        'Goodman',
        'Xmen'
    ]]
]; 

console.log(arregloCosas);
console.log(arregloCosas[7][4][0]);

