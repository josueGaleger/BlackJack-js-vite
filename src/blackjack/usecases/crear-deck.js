import _ from 'underscore'

// export const miNombre = 'jos';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta  Ejemplo: 'C','D','H','S'
 * @param {Array<String>} tiposEspeciales Ejemplo: 'A','J','Q','K'
 * @returns {Array<String>}  retorna un nuevo deck de cartas
 */

// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta === 0){
        throw new Error('Tipos de carta es obligatorio como un arreglo de String')
    } 

    if (!tiposEspeciales || tiposEspeciales === 0){
        throw new Error('Tipos especiales es obligatorio como un arreglo de String')
    } 

    let deck = [];

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

export default crearDeck;