// import { buscarHeroe } from './js/callbacks';
import './styles.css';
import { buscarHeroe } from './js/promesas';


const heroeId1  = 'capi1';
const heroeId2 = 'iron';

// En base a Callbacks
// buscarHeroe( heroeId, (err,heroe1)=>{
   /* if(err){
       console.error(err);
   } else {
       console.info(heroe); 
   } */
//    if(err) { return console.log(err);}
// 
//    buscarHeroe(heroeId2, (err, heroe2) => {
    // if(err) { return console.log(err);}
// 
    // console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
// 
//    });
// 
// });

// Promises
// Esto es lo mismo que lo anterior

/* buscarHeroe( heroeId1 ).then( heroe1 => {
    console.log(`Enviando a ${heroe1.nombre} a la misión`);

    buscarHeroe( heroeId2 ).then(heroe2 => {
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
    })
});
 */
// Se puede mejorar asi:
// Promise.all([true,'hola', 132]).then(arr =>{
    // console.log('Promise all', arr);
// });
// 

Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    .then(([heroe1,heroe2]) =>{
    // console.log('Promise All: ', heroes);
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
}).catch(err => {
    alert(err);
}).finally(()=>{
    console.log('Se termino el promise.all');
})
console.log('Fin del programa');