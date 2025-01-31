import {pedirCarta, valorCarta, crearCartaHtml} from './'


// turno de la computador4
/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck 
 * @param {HTMLElement} puntosHTML ELEMENTOS HTML PARA MOSTRAR LOS PUNTOS
 * @param {HTMLElement} divCartasComputadora ELEMENTOS HTML PARA MOSTRAR LOS PUNTOS


 */


export const turnoComputadora = ( puntosMinimos,puntosHTML, divCartasComputadora, deck = [] ) => {

    if (!puntosMinimos) throw new Error('puntos minimos son necesario')
    if(!puntosHTML) throw new Error('Argumentos puntosHTML es necesario')

        let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
       const imgCarta = crearCartaHtml(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

