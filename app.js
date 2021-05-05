// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

const rulesDisplay = document.getElementById('rules');
const guessInput = document.getElementById('input');
const button = document.getElementById('button');
const randomDisplay = document.getElementById('random');
const guessHintOutput = document.getElementById('hint');
const guessOutput = document.getElementById('guesses-left');
const winOutput = document.getElementById('rounds-won');
const lossOutput = document.getElementById('rounds-lost');

// initialize state
let guessesLeft = 4;
let correctNumber = Math.ceil(Math.random() * 20);
let score = 0;
let attempts = 0;

// set event listeners to update state and DOM
button.addEventListener ('click', () => {
    guessesLeft--;

    let guess = Number(guessInput.value);
    let guessEval = compareNumbers(guess, correctNumber);

    console.log(guess);
    console.log(correctNumber);
    console.log(guessEval);
});