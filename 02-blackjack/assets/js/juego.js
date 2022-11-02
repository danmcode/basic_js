/**
 * Usando el
 * Patrón Modulo
 */

//Función anónima autoinvocada
(() => {

    let deck = [];
    const cardsType = ['C', 'D', 'H', 'S'];
    const specials = ['A', 'J', 'Q', 'K'];

    let playerPoints = 0, computerPoints = 0;

    //Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir');
    const btnStop = document.querySelector('#btnDetener');
    const btnNewGame = document.querySelector('#btnNuevo');

    const smallTag = document.querySelectorAll('small')
    const playerCardsDiv = document.querySelector('#jugador-cartas');
    const computerCardsDiv = document.querySelector('#computadora-cartas');

    /**
     * Esta función crea una nueva baraja
     */
    const createDeck = () => {

        for (let i = 2; i < 10; i++) {
            deck.push(i + 'C');
            for (let cardType of cardsType) {
                deck.push(i + cardType);
            }
        }

        for (let cardType of cardsType) {
            for (let special of specials) {
                deck.push(special + cardType);
            }
        }

        deck = _.shuffle(deck);
    }

    createDeck();


    /**
     * Esta función me permite tomar una carta
     */
    const requestCard = () => {
        // const randCardIndex = Math.floor(Math.random() * deck.length);
        // console.log(randCardIndex);
        // const card = deck[randCardIndex];
        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }

        const card = deck.pop();
        
        //carta debe ser de la baraja.
        console.log(card);
        return card;
    }

    // requestCard();

    const cardValue = (card) => {
        const value = card.substring(0, card.length - 1);

        return (isNaN(value))
            ? (value === 'A') ? 11 : 10
            : value * 1;
    }

    //Computer Turn
    const computerTurn = (minPoints) => {

        do {
            const card = requestCard();

            computerPoints += cardValue(card);
            smallTag[1].innerText = computerPoints;

            // <img class="carta" src="./assets/cartas/2C.png">
            const imgCard = document.createElement('img');
            imgCard.src = `./assets/cartas/${card}.png`;
            imgCard.classList.add('carta')

            computerCardsDiv.append(imgCard);

            if (minPoints > 21) {

                break;
            }

        } while ((computerPoints <= minPoints) && (computerPoints < minPoints));

        setTimeout(() => {
            if (computerPoints === minPoints) {
                alert('Nadie gana :(');
            } else if (minPoints > 21) {
                alert('Computadora gana :(');
            } else if (computerPoints > 21) {
                alert('Jugador gana :(');
            } else {
                alert('Computadora gana')
            }
        }, 100);


    }

    const value = cardValue(requestCard());

    //Eventos
    btnPedir.addEventListener('click', () => {
        const card = requestCard();

        playerPoints += cardValue(card);
        smallTag[0].innerText = playerPoints;

        // <img class="carta" src="./assets/cartas/2C.png">
        const imgCard = document.createElement('img');
        imgCard.src = `./assets/cartas/${card}.png`;
        imgCard.classList.add('carta')

        playerCardsDiv.append(imgCard);

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
        computerTurn(playerPoints);
    });

    btnNewGame.addEventListener('click', () => {

        console.clear();
        deck = [];
        createDeck();

        playerPoints = 0, computerPoints = 0;

        smallTag[0].innerText = 0;
        smallTag[1].innerText = 0;

        playerCardsDiv.innerHTML = '';
        computerCardsDiv.innerHTML = '';

        btnStop.disabled = false;
        btnPedir.disabled = false;


    });

})();