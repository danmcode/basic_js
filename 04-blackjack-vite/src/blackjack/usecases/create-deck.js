import _ from 'underscore';

/**
 * Esta función crea un nuevo deck 
 * @param {Array<String>} tiposDeCarta ejemplo: ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} Retorna un nuevo array de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if( !tiposDeCarta || tiposDeCarta === 0) 
        throw new Error('Tipos de carta es obligatorio como un arreglo de string');

    let deck = []
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}