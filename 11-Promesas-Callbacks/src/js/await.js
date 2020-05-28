import { buscarHeroeAsync, buscarHeroe } from './promesas';


const heroesIds = [
    'capi',
    'iron',
    'spider'
];
const heroesPromesas = heroesIds.map( id => buscarHeroe(id));


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

export const obtenerHeroeAwait = async (id) => {
                // Aqui esoy obteniendo una promesa
    try { //Intenta hacer este codigo
        const heroe = await buscarHeroeAsync(id);
        return heroe;
        
    }catch(err){
        console.log('CATCH!!!');
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder' 
        };
    }
    
}

export const heroesCiclo = async () => {
    console.time('HeroesCiclo');

    // Otra forma
    for await(const heroe of heroesPromesas){
        console.log(heroe);
    }
    
    // Una forma
    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(heroe => console.log(heroe));
    // console.log(heroes);
    console.timeEnd('HeroesCiclo');
}

export const heroeIfAwait = async(id) => {
    if( (await buscarHeroeAsync(id)).nombre==='Ironman'){
        console.log('Es el mejor de todos');
    }else {
        console.log('Naaaa');
    }
}