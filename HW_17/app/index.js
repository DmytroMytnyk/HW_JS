// Randomizer function    
function getRandomInt() {
  let number = 0;
    number = Math.floor(Math.random() * 100) + 1;
    return number;
};
const randomInt = getRandomInt();

let playWindow = document.querySelector('.play-window');
let score = 0;
let bombsAmount = 0;

let sound = new Audio("./media/17 - DOM_ Events Advanced_homework_media_sample.mp3");
sound.loop = true;

// Create of square
function createSquare() {
  let div = document.createElement('div');
  div.classList.add('square');
  let number = getRandomInt();
  let square = new NewSquare(number);
  if(square.bomb === true){
    bombsAmount++;
  }

  document.querySelector('.game-info').innerText = `Bombs amount: ${bombsAmount}`;
  div.addEventListener('click', () => {
    if (square.bomb === true) {
      div.classList.add('square-bomb');

      let endGamePopUpEL = endGamePopUp('Game Over' + '</br>' + 'Your score:' + score + '</br>' + 'Press to start new game')
      endGamePopUpEL.classList.add('end-game-popup')
      playWindow.innerHTML = '';
      document.body.appendChild(endGamePopUpEL);
      endGamePopUpEL.addEventListener('click', () => {
        startGame();
        endGamePopUpEL.remove();
      })
    } else {
      div.classList.add('square-save');
      score++;
    }
  });
  return div;
}

//Bombs
function NewSquare(number) {
  this.clicked = true || false;
  this.bomb = number > 10 ? false : true;
}

function endGame() {
  playWindow.innerHTML = '';
  playWindow.addEventListener('click', () => {
    startGame();
  });
}

function startGame() {
  score = 0;
  bombsAmount = 0;
  for (let i = 0; i < 25; i++) {
    playWindow.appendChild(createSquare());
  }
}

function endGamePopUp(innerHTML) {
  let popup = document.createElement('div');
  popup.className = 'popup';
  popup.id = 'popup';

  let poopupBody = document.createElement('div');
  poopupBody.className = 'popup__body';
  popup.appendChild(poopupBody);

  let popupContent = document.createElement('div');
  popupContent.className = 'popup__content';
  poopupBody.appendChild(popupContent);
  popupContent.innerHTML = innerHTML;
  startGame();
  return popup;
}

startGame();