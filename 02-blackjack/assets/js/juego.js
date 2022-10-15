/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck        = [];
const cardsType = ['C', 'D', 'H', 'S'];
const specials  = ['A', 'J', 'Q', 'K'];

let playerPoints = 0, puntosComputadora = 0;

//Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const smallTag = document.querySelector('small')
const playerCardsDiv = document.querySelector('#jugador-cartas');

/**
 * Esta función crea una nueva baraja
 */
const createDeck = () => {

    for (let i = 2; i < 10; i++) {
        deck.push( i + 'C');
        for (let cardType of cardsType) {
            deck.push(i + cardType);
        }
    }

    for(let cardType of cardsType) {
        for(let special of specials) {
            deck.push(special + cardType);
        }
    }
    
    deck = _.shuffle(deck);
}
createDeck();


/**
 * Esta función me permite tomar una carta
 */
const requestCard = () =>{
    // const randCardIndex = Math.floor(Math.random() * deck.length);
    // console.log(randCardIndex);
    // const card = deck[randCardIndex];
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }

    const card = deck.pop();
    //carta debe ser de la baraja.
    console.log(card);
    return card;
}

// requestCard();

const cardValue = ( card ) => {
    const value = card.substring(0, card.length -1);
    
    return (isNaN(value)) 
    ? (value === 'A') ? 11 : 10
    : value * 1;
}

//Computer Turn


const value = cardValue(requestCard());

//Eventos
btnPedir.addEventListener('click',() => {
    const card = requestCard();

    playerPoints += cardValue( card );
    smallTag.innerText = playerPoints;
    
    // <img class="carta" src="./assets/cartas/2C.png">
    const imgCard = document.createElement('img');
    imgCard.src = `./assets/cartas/${card}.png`;
    imgCard.classList.add('carta')

    playerCardsDiv.append( imgCard );

    if( playerPoints > 21 ){
        console.warn('Lo siento Mucho Perdiste');
        btnPedir.disabled = true;
    }else if( playerPoints === 21 ){
        console.warn('21, Genial');
        btnPedir.disabled = true;
    }
});