/*
Link: https://youtu.be/lhNdUVh3qCc
*/

document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [
        {
            latin_name: 'd-z',
            cyrillic_name: '',
            folder: '1-latin',
            img: 'img/1-latin/uc/d-z.png'
        },
        {
            latin_name: 'n',
            cyrillic_name: '',
            folder: '1-latin',
            img: 'img/1-latin/uc/n.png'
        },
        {
            latin_name: 'r',
            cyrillic_name: '',
            folder: '1-latin',
            img: 'img/1-latin/uc/r.png'
        },
        {
            latin_name: 's-accent',
            cyrillic_name: '',
            folder: '1-latin',
            img: 'img/1-latin/uc/s-accent.png'
        },
        {
            latin_name: 'v',
            cyrillic_name: '',
            folder: '1-latin',
            img: 'img/1-latin/uc/v.png'
        },
        {
            latin_name: 'b',
            cyrillic_name: 'v',
            folder: '2-dif',
            img: 'img/2-dif/uc/b_or_v.png'
        },
        {
            latin_name: 'b',
            cyrillic_name: 'v',
            folder: '2-dif',
            img: 'img/2-dif/uc/b_or_v.png'
        },
        {
            latin_name: 'c',
            cyrillic_name: 's',
            folder: '2-dif',
            img: 'img/2-dif/uc/c_or_s.png'
        },
        {
            latin_name: 'c',
            cyrillic_name: 's',
            folder: '2-dif',
            img: 'img/2-dif/uc/c_or_s.png'
        },
        {
            latin_name: 'c',
            cyrillic_name: 's',
            folder: '2-dif',
            img: 'img/2-dif/uc/c_or_s.png'
        },
        {
            latin_name: 'c-accent',
            cyrillic_name: 's-accent',
            folder: '2-dif',
            img: 'img/2-dif/uc/c-accent_or_s-accent.png'
        },
        {
            latin_name: 'c-accent',
            cyrillic_name: 's-accent',
            folder: '2-dif',
            img: 'img/2-dif/uc/c-accent_or_s-accent.png'
        },
        {
            latin_name: 'h',
            cyrillic_name: 'n',
            folder: '2-dif',
            img: 'img/2-dif/uc/h_or_n.png'
        },
        {
            latin_name: 'h',
            cyrillic_name: 'n',
            folder: '2-dif',
            img: 'img/2-dif/uc/h_or_n.png'
        },
        {
            latin_name: 'p',
            cyrillic_name: 'r',
            folder: '2-dif',
            img: 'img/2-dif/uc/p_or_r.png'
        },
        {
            latin_name: 'p',
            cyrillic_name: 'r',
            folder: '2-dif',
            img: 'img/2-dif/uc/p_or_r.png'
        },
        {
            latin_name: 's',
            cyrillic_name: 'd-z',
            folder: '2-dif',
            img: 'img/2-dif/uc/s_or_d-z.png'
        },
        {
            latin_name: 's',
            cyrillic_name: 'd-z',
            folder: '2-dif',
            img: 'img/2-dif/uc/s_or_d-z.png'
        },
        {
            latin_name: 's',
            cyrillic_name: 'd-z',
            folder: '2-dif',
            img: 'img/2-dif/uc/s_or_d-z.png'
        },
        {
            latin_name: '',
            cyrillic_name: 'b',
            folder: '3-cyrillic',
            img: 'img/3-cyrillic/uc/b.png'
        },
        {
            latin_name: '',
            cyrillic_name: 'c',
            folder: '3-cyrillic',
            img: 'img/3-cyrillic/uc/c.png'
        },
        {
            latin_name: '',
            cyrillic_name: 'c-accent',
            folder: '3-cyrillic',
            img: 'img/3-cyrillic/uc/c-accent.png'
        },
        {
            latin_name: '',
            cyrillic_name: 'h',
            folder: '3-cyrillic',
            img: 'img/3-cyrillic/uc/h.png'
        },
        {
            latin_name: '',
            cyrillic_name: 'p',
            folder: '3-cyrillic',
            img: 'img/3-cyrillic/uc/p.png'
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
            var latin = document.createElement('latin_name')
            var cyrillic = document.createElement('cyrillic_name')
            var folder = document.createElement('folder')
            card.setAttribute('src', 'img/blank.png')
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
        alert("cardsChosenId[0]: " + optionOneId)
        alert("cardsChosenId[1]: " + optionTwoId)
        if(cardsChosen[0] === cardsChosen[1]){
            alert("You got a match!")
            cards[optionOneId].setAttribute('src', 'img/white.png')
            cards[optionTwoId].setAttribute('src', 'img/white.png')
            cardsWon.push(cardsChosen)
        } else {
            alert("Oops, try again.")
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionTwoId].setAttribute('src', 'img/blank.png')
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
        cardsChosen.push(cardArray[cardId])
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }
    
    createBoard()
})