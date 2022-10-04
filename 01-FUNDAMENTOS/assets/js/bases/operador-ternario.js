/**
 * Días de semana abrimos a las 11
 * pero los fines de semana abrimos a las 9
 */

let dia = 2;
let horaActual = 10;

// Entra a un sitio web, para consultar si está abierto hoy...
let horaApertura;
let mensaje;

// if( dia == 0 || día == 6 ){
//     console.log('Fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('Día de semana');
//     horaApertura = 11;
// }
horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

// if ( horaActual >= horaApertura ) {
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura }`
// }

mensaje = ( horaActual >= horaApertura ) ? 'Esta abierto' : `Está cerrado, hoy abrimos a las ${ horaApertura }`

console.log( horaApertura, mensaje )