document.addEventListener('DOMContentLoaded', (event) => {

  const cardArray = [
    {
      name: 'Tringle',
      img: 'images/Tringle.png'
    },
    {
      name: 'circle',
      img: 'images/circle.png'
    },
    {
      name: 'Frog',
      img: 'images/Frog.png'
    },
    {
      name: 'troll',
      img: 'images/troll.png'
    },
    {
      name: 'Light',
      img: 'images/Light.png'
    },
    {
      name: 'fish',
      img: 'images/fish.png'
    },
    {
      name: 'Tringle',
      img: 'images/Tringle.png'
    },
    {
      name: 'circle',
      img: 'images/circle.png'
    },
    {
      name: 'Frog',
      img: 'images/Frog.png'
    },
    {
      name: 'troll',
      img: 'images/troll.png'
    },
    {
      name: 'Light',
      img: 'images/Light.png'
    },
    {
      name: 'fish',
      img: 'images/fish.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let clicked = []
  let selectedcardsId = []
  let winning = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function check() {
    const cards = document.querySelectorAll('img')
    const First = selectedcardsId[0]
    const second = selectedcardsId[1]
    
    if(First == second) {
      cards[First].setAttribute('src', 'images/blank.png')
      cards[second].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (clicked[0] === clicked[1]) {
      alert('Its a Match')
      cards[First].setAttribute('src', 'images/Empty.png')
      cards[second].setAttribute('src', 'images/Empty.png')
      cards[First].removeEventListener('click', flipCard)
      cards[second].removeEventListener('click', flipCard)
      winning.push(clicked)
    } else {
      cards[First].setAttribute('src', 'images/blank.png')
      cards[second].setAttribute('src', 'images/blank.png')
      alert('Unlucky, Please try again')
    }
    clicked = []
    selectedcardsId = []
    resultDisplay.textContent = winning.length
    if  (winning.length === cardArray.length/2) {
      resultDisplay.textContent = 'Hurray! you have won the game!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    clicked.push(cardArray[cardId].name)
    selectedcardsId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (clicked.length ===2) {
      setTimeout(check, 100)
    }
  }

  createBoard()
})