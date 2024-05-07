// Carrega todos os elementes contidos dentro desse bloco ao carregar a página
document.addEventListener("DOMContentLoaded", () => {

    const cards = [
        {
            name: 'img-1',
            img: 'img/img-1.png',
        },
        {
            name: 'img-2',
            img: 'img/img-2.jpeg',
        },
        {
            name: 'img-3',
            img: 'img/img-3.jpeg',
        },
        {
            name: 'img-4',
            img: 'img/img-4.jpeg',
        },
        {
            name: 'img-5',
            img: 'img/img-5.jpeg',
        },
        {
            name: 'img-6',
            img: 'img/img-6.jpeg',
        },
        {
            name: 'img-7',
            img: 'img/img-7.jpeg',
        },
        {
            name: 'img-8',
            img: 'img/img-8.jpeg',
        },
        {
            name: 'img-9',
            img: 'img/img-9.jpeg',
        },
        {
            name: 'img-10',
            img: 'img/img-10.jpeg',
        },
        {
            name: 'img-11',
            img: 'img/img-11.jpeg',
        },
        {
            name: 'img-12',
            img: 'img/img-12.jpeg',
        },{
            name: 'img-1',
            img: 'img/img-1.png',
        },
        {
            name: 'img-2',
            img: 'img/img-2.jpeg',
        },
        {
            name: 'img-3',
            img: 'img/img-3.jpeg',
        },
        {
            name: 'img-4',
            img: 'img/img-4.jpeg',
        },
        {
            name: 'img-5',
            img: 'img/img-5.jpeg',
        },
        {
            name: 'img-6',
            img: 'img/img-6.jpeg',
        },
        {
            name: 'img-7',
            img: 'img/img-7.jpeg',
        },
        {
            name: 'img-8',
            img: 'img/img-8.jpeg',
        },
        {
            name: 'img-9',
            img: 'img/img-9.jpeg',
        },
        {
            name: 'img-10',
            img: 'img/img-10.jpeg',
        },
        {
            name: 'img-11',
            img: 'img/img-11.jpeg',
        },
        {
            name: 'img-12',
            img: 'img/img-12.jpeg',
        }
    ]

    // embaralhas todas as cartas
    cards.sort(() => 0.5 - Math.random());

    // carregar elementos html no script
    const board = document.querySelector('.board');
    const resultView = document.querySelector('#result');

    let cardsChosen = [] //cartas escolhidas
    let cardsChosenId = [] //id das cartas escolhidas
    let cardsChosenWon = [] //cartas combinadas
    let cardsWon = [] //cartas combinadas

    //checagem de combinações
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        //verificar clique na mesma imagem
        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'img/img-board.jpeg');
            cards[optionTwoId].setAttribute('src', 'img/img-board.jpeg');
            alert('Você clicou na mesma imagem');
        }

        //verificar combinação se click em imagens diferentes
        else if(cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'img/img-check.jpeg');
            cards[optionTwoId].setAttribute('src', 'img/img-check.jpeg');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
            alert('Par encontrado!');
        } else {
            cards[optionOneId].setAttribute('src', 'img/img-board.jpeg');
            cards[optionTwoId].setAttribute('src', 'img/img-board.jpeg');
            alert('Você errou! Tente novamente!');
        }

        cardsChosen = [];
        cardsChosenId = [];
    
        // mostar placar
        resultView.textContent = 'Pares encontrados: ' + cardsWon.length;
        if(cardsWon.length === cards.length / 2) {
            resultView.textContent = 'Parabéns, você encontrar todos os pares!';
        }
    }


    //criar o quadro de castas
    function createBoard() {
        for(let i = 0; i < cards.length; i++){
            const card = document.createElement('img');
            card.setAttribute('src', 'img/img-board.jpeg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            board.appendChild(card);
        }
    }

    function flipCard(){
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cards[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cards[cardId].img);

        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }
    
    
createBoard();
    
});