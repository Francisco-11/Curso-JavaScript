/* 
   2C = Two of clubs (Tréboles)
   2D = Two of Diaminds  
   2H = Two of Hearts
   2S = Two of Spades
*/

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','K','Q'];

// Esa función crea una nueva baraja o deck
const  crearDeck = () => {
    for (let i = 2; i<=10; i++){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }
    for(let especial of especiales){
        for (let tipo of tipos){
            deck.push(especial + tipo);
        }
    }
    // console.log(deck);

    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}


crearDeck();

// Esta función me permite crear una carta
const pedirCarta = () => {

    if(deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();    
    console.log("La carta seleccionada es: " + carta);
    // console.log(deck);
    return carta;
}

// Función de pedir carta
/* for (let i=0; i<= 100;i++){
    pedirCarta();
}
 */
// pedirCarta();

const valorCarta = (carta) => {
    const valor = carta.substring(0,carta.length-1);
    // let puntos = 0;

    return (isNaN(valor) ) ?
            (valor ==='A') ? 11:10
            : valor*1;

    // 2 =2; 3=3...
    // if(isNaN(valor)){
        // console.log('No es un número');
        // puntos = (valor === 'A') ? 11 : 10;

    /* }else{
        console.log('Es un número');
        puntos = valor*1;
    }
    console.log(puntos); */
}


// const valor = valorCarta('KD');
const valor = valorCarta(pedirCarta());
console.log(valor);