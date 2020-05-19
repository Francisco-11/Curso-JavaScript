

/**
 * Días de la semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

//  Entra a un sitio web, para consultar si está abierto hoy....
const dia = 4; //0:Domingo, 1: Lunes
const horaActual = 10;

let horaApertura;
let mensaje; // Esta abierto, esta cerrado, hoy abrimos a las XX

// if ( dia === 0 || dia === 6) {
/* if([0,6].includes(dia)){
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Día de semana');
    horaApertura = 11;
} */
// Lo anterior se puede reducir a:

horaApertura =([0,6].includes(dia)) ? 9 : 11;


/* if (horaActual >= horaApertura) {
    mensaje = 'Esta abierto';
} else{
    mensaje = `Esta Cerrado, hoy abrimos a las ${horaApertura}`;
} */
// Lo anterior se reduce a:
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta Cerrado, hoy abrimos a las ${horaApertura}`;



console.log({horaApertura, mensaje});






