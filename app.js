// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

const rulesDisplay = document.getElementById('rules');
const guessInput = document.getElementById('input');
const button = document.getElementById('button');
const randomDisplay = document.getElementById('random');
const resultDisplay = document.getElementById('hint');
const guessesLeftOutput = document.getElementById('guesses-left');
const winOutput = document.getElementById('rounds-won');
const lossOutput = document.getElementById('rounds-lost');

// initialize state
let guessesLeft = 4;
let correctNumber = Math.ceil(Math.random() * 20);
let wins = 0;
let attempts = 0;
let losses = attempts - wins; 

// set event listeners to update state and DOM
button.addEventListener ('click', () => {


    let guess = Number(guessInput.value);
    let guessEval = compareNumbers(guess, correctNumber);

    console.log(guess);
    console.log(correctNumber);
    console.log(guessEval);
    console.log(guessesLeft);
    console.log(wins);
    console.log(attempts);

    if (guessEval === -1) {
        resultDisplay.classList.remove('hidden');
        resultDisplay.textContent = 'too low';
        guessesLeft--;
    }
    if (guessEval === 1) {
        resultDisplay.classList.remove('hidden');
        resultDisplay.textContent = 'too high';
        guessesLeft--;
    }    
    if (guessEval === 0) {
        button.disabled = true;
        resultDisplay.classList.remove('hidden');
        resultDisplay.textContent = 'correct';
        guessesLeft = 0 ;
        wins++;
    }

    if (guessesLeft === 0) {
        randomDisplay.textContent = correctNumber;
        attempts++;
        button.disabled = true;

    }

    guessesLeftOutput.textContent = guessesLeft;
    winOutput.textContent = wins;
    lossOutput.textContent = (attempts - wins);

});