// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

const rulesDisplay = document.getElementById('rules');
const guessInput = document.getElementById('input');
const evalButton = document.getElementById('button');
const playAgainButton = document.getElementById('play-again');
const resetButton = document.getElementById('reset');
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

// set event listeners to update state and DOM
evalButton.addEventListener ('click', () => {
    let guess = Number(guessInput.value);
    let guessEval = compareNumbers(guess, correctNumber);
    console.log(correctNumber);
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
        evalButton.disabled = true;
        resultDisplay.classList.remove('hidden');
        resultDisplay.textContent = 'correct';
        guessesLeft = 0 ;
        wins++;
    }

    if (guessesLeft === 0) {
        randomDisplay.textContent = correctNumber;
        attempts++;
        evalButton.disabled = true;
    }
    let losses = attempts - wins;
    guessesLeftOutput.textContent = guessesLeft;
    winOutput.textContent = wins;
    lossOutput.textContent = losses;
});

playAgainButton.addEventListener ('click', () => {
    //generate new random number
    correctNumber = Math.ceil(Math.random() * 20);

    //reset guesses
    guessesLeft = 4;

    //reset DOM display
    resultDisplay.classList.add('hidden');
    randomDisplay.textContent = '?';
    evalButton.disabled = false;
    guessInput.value = '';
    guessesLeftOutput.textContent = guessesLeft;
});

resetButton.addEventListener ('click', () => {
    //generate new random number
    correctNumber = Math.ceil(Math.random() * 20);

    //reset scoring variables
    attempts = 0;
    wins = 0;
    guessesLeft = 4;

    //reset DOM display
    resultDisplay.classList.add('hidden');
    randomDisplay.textContent = '?';
    evalButton.disabled = false;
    guessInput.value = '';
    guessesLeftOutput.textContent = guessesLeft;
    winOutput.textContent = wins;
    lossOutput.textContent = 0;
});