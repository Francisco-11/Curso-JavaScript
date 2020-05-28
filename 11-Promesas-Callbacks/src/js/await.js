import { buscarHeroeAsync, buscarHeroe } from './promesas';


const heroesIds = [
    'capi',
    'iron',
    'spider'
];

export const obtenerHeroesArr = async() => {

    // const heroesArr = [];
    // 1: Forma 1
    /* for (const id of heroesIds ){
        buscarHeroeAsync(id).then(heroe => heroesArr.push(heroe));
    } */
    // 1: Se necesita esperar que devuelva todo ejemplo:
    /* setTimeout(()=>{
        console.log('ObtenerHeroes');
        console.log(heroesArr);
    },1000);
 */
    // Forma 2: Sin el await arroja un arreglo de promesas
    /* for(const id of heroesIds){
        const heroe = await buscarHeroe(id);
        heroesArr.push(heroe);
    } */

    // Forma 3: Protip
    /* for(const id of heroesIds){
        heroesArr.push(buscarHeroe(id));
    } */

    // Forma 3:

    /* return Promise.all(heroesArr); */
    // return heroesArr;

    // Forma 4

    return await Promise.all(heroesIds.map(buscarHeroe));
}