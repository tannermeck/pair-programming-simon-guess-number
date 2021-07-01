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

  if (compareNumbers(numberGuess, targetNumber) === 0) {
    resultsSpan.textContent = 'You guessed right!! Congrats!';
    highOrLowSpan.style.display = 'none';
    triesLeftSpan.style.display = 'none';
    btn.disabled = true;
  }
  if (guessesRemaining === 0) {
    resultsSpan.textContent = 'No more guesses! Game over!';
    triesLeftSpan.style.display = 'none';
    highOrLowSpan.style.display = 'none';
    btn.disabled = true;
  }
  else if (compareNumbers(numberGuess, targetNumber) === -1) {
    highOrLowSpan.textContent = 'Your guess is too LOW.';
    resultsSpan.textContent = "Keep guessing..";
    triesLeftSpan.textContent = `You have ${guessesRemaining} guesses left`;
  } 
  else if (compareNumbers(numberGuess, targetNumber) === 1) {
    highOrLowSpan.textContent = 'Your guess is too HIGH.';
    resultsSpan.textContent = "Keep guessing..";
    triesLeftSpan.textContent = `You have ${guessesRemaining} guesses left`;
  } else {
    return;
  }
})

  // ---------------------IF/ELSE CODE PRIOR TO REFACTORING, below..

  // if (numberGuess === targetNumber || guessesRemaining === 0) {
  //   resultsSpan.textContent = 'You guessed right!! Congrats!';
  //   highOrLowSpan.style.display = 'none';
  //   triesLeftSpan.style.display = 'none';
  //   btn.disabled = true;
  //   if (guessesRemaining === 0) {
  //     resultsSpan.textContent = 'No more guesses! Game over!';
  //     triesLeftSpan.style.display = 'none';
  //   }
  // }
  // else if (numberGuess < targetNumber) {
  //   highOrLowSpan.textContent = 'Your guess is too LOW.';
  //   resultsSpan.textContent = "Keep guessing..";
  //   triesLeftSpan.textContent = `You have ${guessesRemaining} guesses left`;
  // } 
  // else if (numberGuess > targetNumber) {
  //   highOrLowSpan.textContent = 'Your guess is too HIGH.';
  //   resultsSpan.textContent = "Keep guessing..";
  //   triesLeftSpan.textContent = `You have ${guessesRemaining} guesses left`;
  // } else {
  //   return;
  // }