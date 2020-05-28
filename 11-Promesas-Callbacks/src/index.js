
import { obtenerHeroesArr } from './js/await'

console.time('await');

obtenerHeroesArr().then( heroes => {
    console.log(heroes);
    console.timeEnd('await');
});

