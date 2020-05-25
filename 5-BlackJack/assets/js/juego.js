/* 
   2C = Two of clubs (Tréboles)
   2D = Two of Diaminds  
   2H = Two of Hearts
   2S = Two of Spades
*/

// Sintaxis del patrón modulo
(() => {

    const personajes = ['Ana', 'Mercy','Mei'];
    console.log(personajes);

    let deck = [];
    const tipos = ['C','D','H','S'];
    const especiales = ['A','J','K','Q'];
    
    let puntosJugador = 0,
        puntosComputadora = 0;
    
    // Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir');
    const puntosHTML = document.querySelectorAll('small');
    const divCartasJugador = document.querySelector('#jugador-cartas');
    const divCartasComputador = document.querySelector('#computadora-cartas');
    const btnDetener = document.querySelector('#btnDetener');
    const btnNuevo   = document.querySelector('#btnNuevo');
    
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
        // console.log(deck);
        return deck;
    }
    
    
    crearDeck();
    
    // Esta función me permite crear una carta
    const pedirCarta = () => {
    
        if(deck.length === 0){
            throw 'No hay cartas en el deck';
        }
        const carta = deck.pop();    
        // console.log("La carta seleccionada es: " + carta);
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
    
    // Turno de la Computadora
    const turnoComputadora = (puntosMinimos) => {
        do{
            const carta = pedirCarta();
            puntosComputadora = puntosComputadora + valorCarta(carta);
            puntosHTML[1].innerText = puntosComputadora;
    
        //<img  class="carta" src="assets/cartas/2C.png">
            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`; //3H JD
            imgCarta.classList.add('carta');
            divCartasComputador.append(imgCarta);
        
            if( puntosMinimos > 21){
                break;
            }
    
        }while( (puntosComputadora < puntosMinimos) && (puntosMinimos<=21));
    
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
    
    
    // const valor = valorCarta('KD');
    // const valor = valorCarta(pedirCarta());
    // console.log(valor);
    
    // Eventos
    // Escuchar un evento
    btnPedir.addEventListener('click', ()=>{  //Función que se esta mandando se llama Callback
        const carta = pedirCarta();
        puntosJugador = puntosJugador + valorCarta(carta);
        puntosHTML[0].innerText = puntosJugador;
    
        //<img  class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`; //3H JD
        imgCarta.classList.add('carta');
    
        divCartasJugador.append(imgCarta);
        
        if(puntosJugador > 21){
            // console.log('Lo siento, perdiste');
            // bloquear un botón
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }else if(puntosJugador === 21){
            // console.log('21, genial');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    
    }); 
    
    // Evento de detener
    btnDetener.addEventListener('click', ()=> {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    
        turnoComputadora(puntosJugador);
    });
    
    // Evento de crear Nuevo Juego
    btnNuevo.addEventListener('click', ()=> {
    
        console.clear();
        deck = [];
        deck = crearDeck();
    
        btnPedir.disabled   = false;
        btnDetener.disabled = false;
        
        puntosComputadora = 0;
        puntosJugador     = 0;
    
        puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;
    
        divCartasComputador.innerHTML = '';
        divCartasJugador.innerHTML = '';
    })

})();


