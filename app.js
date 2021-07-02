import { compareNumbers, hints } from './utils.js';

const btn = document.getElementById('btn-id');
const resetBtn = document.getElementById('reset-id');
const resultsSpan = document.getElementById('span-id');
const triesLeftSpan = document.getElementById('triesSpan-id');
const highOrLowSpan = document.getElementById('highOrLowSpan-id');
const userGuess = document.getElementById('user-guess-id');
let guessesRemaining = 4; 

const targetNumber = Math.ceil(Math.random() * 20);

btn.addEventListener('click', ()=> {

    guessesRemaining--;
    const guessValue = userGuess.value;
    let numberGuess = Number(guessValue);

    const hintsReturn = hints(compareNumbers(numberGuess, targetNumber));
    resultsSpan.textContent = hintsReturn;
    highOrLowSpan.textContent = hintsReturn;

    if (numberGuess < 0 || numberGuess > 20) {
        alert('Please choose a number between 1 and 20.');
        triesLeftSpan.textContent = `You have ${guessesRemaining} guesses left`;
    }

    if (compareNumbers(numberGuess, targetNumber) === 0) {
        highOrLowSpan.style.display = 'none';
        triesLeftSpan.style.display = 'none';
        btn.disabled = true;
    }
    else if (guessesRemaining === 0) {
        resultsSpan.textContent = 'No more guesses! Game over!';
        triesLeftSpan.style.display = 'none';
        highOrLowSpan.style.display = 'none';
        btn.disabled = true;
    }
    else if (compareNumbers(numberGuess, targetNumber) === -1) {
        resultsSpan.textContent = 'Keep guessing..';
        triesLeftSpan.textContent = `You have ${guessesRemaining} guesses left`;
    } 
    else if (compareNumbers(numberGuess, targetNumber) === 1) {
        resultsSpan.textContent = 'Keep guessing..';
        triesLeftSpan.textContent = `You have ${guessesRemaining} guesses left`;
    } else {
        return;
    } 
});

resetBtn.addEventListener('click', ()=> {
    location.reload();
});


