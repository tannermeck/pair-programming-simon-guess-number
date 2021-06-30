// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

// initialize state
const btn = document.getElementById('btn-id');
const resultsSpan = document.getElementById('span-id');
const triesLeftSpan = document.getElementById('triesSpan-id');
const highOrLowSpan = document.getElementById('highOrLowSpan-id');
const userGuess = document.getElementById('user-guess-id');
let guessesRemaining = 4; 
// console.log(userGuess);
const targetNumber = Math.floor(Math.random()*20);


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

btn.addEventListener('click', ()=> {
  
  guessesRemaining--;
  const guessValue = userGuess.value;
  let numberGuess = Number(guessValue);
  console.log(targetNumber, numberGuess);

  if (guessesRemaining === 0) {
    resultsSpan.textContent = 'NO MORE';
    btn.disabled = true;
  }
  if (numberGuess === targetNumber) {
    resultsSpan.textContent = 'you guessed right!';
  }
  else if (numberGuess < targetNumber) {
    highOrLowSpan.textContent = 'Your guess is too LOW.';
  } 
  else if (numberGuess > targetNumber) {
    highOrLowSpan.textContent = 'Your guess is too HIGH.';
  } else {
    resultsSpan.textContent = "keep guessing..";
  }
})