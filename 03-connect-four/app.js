document.addEventListener('DOMContendLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrent = document.querySelector('#current-player')
    let currentPlayer = 1

    for (var i=0, len = squares.length; i < len; i++)

    (function(index){
        // add an onclick to each square in your grid
        squares[i].onclick = function(){
            // if the square below your current square is taken, you can go on top of it
            if(squares[index + 7].classList.contains('taken')) {
                if (currentPlayer === 1){
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-one')
                    // change to player 2
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer
                } else if (currentPlayer === 2){
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-two')
                    // change to player 1
                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer
                }
                // if the square below your current square is not taken, you can't go here
            } else alert('can\'t go here')
        }
    }
})(i)