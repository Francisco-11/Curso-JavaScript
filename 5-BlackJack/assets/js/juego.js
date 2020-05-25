/* 
   2C = Two of clubs (Tréboles)
   2D = Two of Diaminds  
   2H = Two of Hearts
   2S = Two of Spades
*/

// Sintaxis del patrón modulo
const miModulo = (() => {
    'use strict'

    let deck = [];
    const tipos = ['C','D','H','S'],
        especiales = ['A','J','K','Q'];
    
    let puntosJugadores = [];
    
    // Referencias del HTML
    const btnNuevo   = document.querySelector('#btnNuevo'),
          btnPedir   = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener');
    
    const puntosHTML          = document.querySelectorAll('small'),
          divCartasJugadores    = document.querySelectorAll('.divCartas');      
    
    // Esta función crea un nuevo deck
    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck();

        puntosJugadores = [];

        for(let i=0; i<numJugadores; i++){
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');
        btnPedir.disabled   = false;
        btnDetener.disabled = false;

    }


    // Esa función crea una nueva baraja o deck
    const  crearDeck = () => {

        deck = [];

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
        return _.shuffle(deck);
    }
    
    
    // Esta función me permite crear una carta
    const pedirCarta = () => {
    
        if(deck.length === 0){
            throw 'No hay cartas en el deck';
        }    
        return deck.pop();
    }
    
    const valorCarta = (carta) => {
        const valor = carta.substring(0,carta.length-1);

        return (isNaN(valor) ) ?
                (valor ==='A') ? 11:10
                : valor*1;
    }
    

    const acumularPuntos = (carta, turno) => {

        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];

        return puntosJugadores[turno];
    }

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`; //3H JD
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }

    const determinarGanador = () => {
        const [puntosMinimos, puntosComputadora] = puntosJugadores;
        setTimeout(() => {
            if(puntosComputadora === puntosMinimos){
                alert('Nadie ha ganado');
            } else if(puntosMinimos>21){
                alert('Computadora gana');
            } else if (puntosComputadora>21){
                alert('Jugador Gana!');
            } else {
                alert('Computadora Gana');
            }
        }, 50);    
    }

    // Turno de la Computadora
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do{
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta,puntosJugadores.length-1);
            crearCarta(carta,puntosJugadores.length-1);
    
        }while( (puntosComputadora < puntosMinimos) && (puntosMinimos<=21));
        determinarGanador();
    }
    

    // Eventos
    // Escuchar un evento
    btnPedir.addEventListener('click', ()=>{  //Función que se esta mandando se llama Callback
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta(carta, 0);
        
        if(puntosJugador > 21){

            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }else if(puntosJugador === 21){

            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    
    }); 
    
    // Evento de detener
    btnDetener.addEventListener('click', ()=> {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    
        turnoComputadora(puntosJugadores[0]);
    });
    

    return {
        nuevoJuego: inicializarJuego
    };
})();


