'use strict';
const diceImage = document.querySelector('.dice-img');
const p1Score = document.querySelector('.p1-score');
const p2Score = document.querySelector('.p2-score');
const p1Current = document.querySelector('.p1Value');
const p2Current = document.querySelector('.p2Value');
const p1Screen = document.querySelector('.p1screen');
const p2Screen = document.querySelector('.p2screen');
const hold = document.querySelector('.hold');
const rollDice = document.querySelector('.roll-dice');
const newGame = document.querySelector('.new-game');
const buttons = document.querySelectorAll('button');
const p1ID = document.querySelector('.player-id1');
const p2ID = document.querySelector('.player-id2');

let player = true;
let randRoll;
let p1TotalScore;
let p2TotalScore;
let activePlayer;

function btnDisable(bool) {
  hold.disabled = bool;
  rollDice.disabled = bool;
  if (bool) {
    rollDice.style.backgroundColor = '#c7365f';
    hold.style.backgroundColor = '#c7365f';
    newGame.style.backgroundColor = '#c7365f';
  } else {
    rollDice.style.backgroundColor = 'rgba(238, 222, 222, 0.61)';
    hold.style.backgroundColor = 'rgba(238, 222, 222, 0.61)';
    newGame.style.backgroundColor = 'rgba(238, 222, 222, 0.61)';
  }
}
//hold
hold.addEventListener('click', () => {
  randRoll = 0;
  p1Score.textContent =
    Number(p1Score.textContent) + Number(p1Current.textContent);
  p2Score.textContent =
    Number(p2Score.textContent) + Number(p2Current.textContent);

  if (player === 'p1') {
    player = 'p1';
    p1Current.textContent = 0;
    activePlayer = p2Current;
    p1Screen.style.backgroundColor = '#bd7a94';
    p2Screen.style.backgroundColor = '#dcaeb9';
    p1TotalScore = Number(p1Score.textContent);
  } else {
    player = 'p2';
    p2Current.textContent = 0;
    activePlayer = p1Current;
    p1Screen.style.backgroundColor = '#dcaeb9';
    p2Screen.style.backgroundColor = '#bd7a94';
    p2TotalScore = Number(p2Score.textContent);
  }
  player = player === 'p2' ? 'p1' : 'p2';

  if (player === 'p1') {
    p1ID.classList.add('increase-font');
  }
  if (player === 'p2') {
    p1ID.classList.remove('increase-font');
  }
  if (player === 'p2') {
    p2ID.classList.add('increase-font');
  }
  if (player === 'p1') {
    p2ID.classList.remove('increase-font');
  }

  if (p1TotalScore >= 100) {
    btnDisable(true);
    p1TotalScore = 0;
    p1Screen.style.backgroundColor = '#2f2f2f';
    p1ID.style.color = '#c7365f';
  } else if (p2TotalScore >= 100) {
    p2TotalScore = 0;

    p2Screen.style.backgroundColor = '#2f2f2f';
    p2ID.style.color = '#c7365f';
    btnDisable(true);
  }
});
//Start with player 1
player = 'p1';
//Roll Dice
rollDice.addEventListener('click', () => {
  randRoll = Math.round(Math.random() * 5 + 1);
  //Dice image
  if (diceImage.classList.contains('visibility')) {
    diceImage.classList.remove('visibility');
  }
  diceImage.setAttribute('src', `dice-${randRoll}.png`);

  if (player === 'p1') {
    if (randRoll === 1) {
      p1Current.textContent = 0;
    } else {
      p1Current.textContent = randRoll + Number(p1Current.textContent);
    }
  }
  if (player === 'p2') {
    if (randRoll === 1) {
      p2Current.textContent = 0;
    } else {
      p2Current.textContent = randRoll + Number(p2Current.textContent);
    }
  }
});

newGame.addEventListener('click', () => {
  p1Screen.style.backgroundColor = '#bd7a94';
  p2Screen.style.backgroundColor = '#dcaeb9';
  p1ID.style.color = 'inherit';
  p2ID.style.color = 'inherit';
  btnDisable(false);
  p1Current.textContent = 0;
  p2Current.textContent = 0;
  p1Score.textContent = 0;
  p2Score.textContent = 0;
  diceImage.classList.add('visibility');
});
