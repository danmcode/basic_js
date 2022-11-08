/**
 * Usando el
 * Patrón Modulo
 */

//Función anónima autoinvocada
const myModule = (() => {
    'use strict';

    let deck = [];
    const cardsType = ['C', 'D', 'H', 'S'];
    const specials = ['A', 'J', 'Q', 'K'];
    
    // let playerPoints = 0, computerPoints = 0;
    let playersPoints = [];
    
    //Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir'),
    btnStop = document.querySelector('#btnDetener'),
    btnNewGame = document.querySelector('#btnNuevo');
    
    const smallTag = document.querySelectorAll('small'),
          divCardsPlayers = document.querySelectorAll('.divCartas');
    
    /**
     * By defeault has two player computer and human
     * The last position in the playerPoints is the computer 
     * @param {*} numPlayers 
     */
    const initializeGame = ( numPlayers = 2 ) => {
        
        deck = createDeck();

        playersPoints = [];
        for(let i=0; i < numPlayers; i++){
            playersPoints.push(0);
        }

        smallTag.forEach( elemt => elemt.innerText = 0 );
        divCardsPlayers.forEach( elemt => elemt.innerHTML = '' );

        btnStop.disabled = false;
        btnPedir.disabled = false;

    };

    /**
     * Esta función crea una nueva baraja
     */
    const createDeck = () => {

        deck = [];

        for (let i = 2; i <= 10; i++) {
            for (let cardType of cardsType) {
                deck.push(i + cardType);
            }
        }

        for (let cardType of cardsType) {
            for (let special of specials) {
                deck.push(special + cardType);
            }
        }

        return _.shuffle(deck);
    }



    /**
     * Esta función me permite tomar una carta
     */
    const requestCard = () => {
        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }

    /**
     * This function return the card value
     */
    const cardValue = (card) => {
        const value = card.substring(0, card.length - 1);

        return (isNaN(value))
            ? (value === 'A') ? 11 : 10
            : value * 1;
    }

    /**
     * 
     */
    const accumulatePonits = ( card, turn ) => {

        playersPoints[ turn ] = playersPoints[ turn ] + cardValue(card);
        smallTag[ turn ].innerText = playersPoints[ turn ];

        return playersPoints[ turn ];
    }

    const createCard = (card, turn) =>{
        const imgCard = document.createElement('img');
        imgCard.src = `./assets/cartas/${card}.png`;
        imgCard.classList.add('carta');

        divCardsPlayers[turn].append( imgCard );
    }

    const determinateWinner = () => {

        const [minPoints, computerPoints] = playersPoints;

        setTimeout(() => {
            if (computerPoints === minPoints) {
                alert('Nadie gana :(');
            } else if (minPoints > 21) {
                alert('Computadora gana :(');
            } else if (computerPoints > 21) {
                alert('Jugador gana :)');
            } else {
                alert('Computadora gana')
            }
        }, 100);
    }

    /**
     * Computer turn
     * @param {*} minPoints 
     */
    const computerTurn = (minPoints) => {
        let computerPoints = 0;
        do {
            const card = requestCard();

            computerPoints = accumulatePonits( card, playersPoints.length - 1 );
            createCard(card, playersPoints.length - 1 );

            if (minPoints > 21) {
                break;
            }

        } while ((computerPoints <= minPoints) && (computerPoints < minPoints));

        determinateWinner();
    }

    // const value = cardValue(requestCard());

    //Eventos
    btnPedir.addEventListener('click', () => {
        const card = requestCard();

        const playerPoints = accumulatePonits(card, 0);
        createCard( card,  0)

        if (playerPoints > 21) {
            console.warn('Lo siento Mucho Perdiste');
            computerTurn(playerPoints);
            btnPedir.disabled = true;
            btnStop.disabled = true;

        } else if (playerPoints === 21) {

            console.warn('21, Genial');
            computerTurn(playerPoints);
            btnPedir.disabled = true;
            btnStop.disabled = true;

        }
    });

    btnStop.addEventListener('click', () => {
        // btnNewGame.disabled = true;
        btnStop.disabled = true;
        btnPedir.disabled = true;
        computerTurn(playersPoints[0]);
    });

    btnNewGame.addEventListener('click', () => {
        initializeGame();
    });

    return {
        newGame: initializeGame
    };

})();