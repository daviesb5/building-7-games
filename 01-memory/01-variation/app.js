/*
Link: https://youtu.be/lhNdUVh3qCc
*/

document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [
        {
            name: 'letter-a',
            img: 'img-1/letter-a.png'
        },
        {
            name: 'letter-b',
            img: 'img-1/letter-b.png'
        },
        {
            name: 'letter-c',
            img: 'img-1/letter-c.png'
        },
        {
            name: 'letter-d',
            img: 'img-1/letter-d.png'
        },
        {
            name: 'letter-e',
            img: 'img-1/letter-e.png'
        },
        {
            name: 'letter-f',
            img: 'img-1/letter-f.png'
        },
        {
            name: 'letter-a',
            img: 'img-2/letter-a.png'
        },
        {
            name: 'letter-b',
            img: 'img-2/letter-b.png'
        },
        {
            name: 'letter-c',
            img: 'img-2/letter-c.png'
        },
        {
            name: 'letter-d',
            img: 'img-2/letter-d.png'
        },
        {
            name: 'letter-e',
            img: 'img-2/letter-e.png'
        },
        {
            name: 'letter-f',
            img: 'img-2/letter-f.png'
        }
    ]

    // randomize
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++){
            // alert("i: " + i);
            var card = document.createElement('img')
            card.setAttribute('src', 'img-1/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    // check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        // alert("cardsChosenId[0]" = cardsChosenId[0]);
        if(cardsChosen[0] === cardsChosen[1]){
            alert("You got a match!")
            cards[optionOneId].setAttribute('src', 'img-1/white.png')
            cards[optionTwoId].setAttribute('src', 'img-1/white.png')
            cardsWon.push(cardsChosen)
        } else {
            alert("Oops, try again.")
            cards[optionOneId].setAttribute('src', 'img-1/blank.png')
            cards[optionTwoId].setAttribute('src', 'img-1/blank.png')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congrats, you found them all!'
        }
    }

    // flip your card
    function flipcard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }
    
    createBoard()
})