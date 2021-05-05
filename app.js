// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

// const rulesDisplay = document.getElementById('rules');
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
    console.log(correctNumber + '... hey, no peeking!');

    //wrong guess, low
    if (guessEval === -1) {
        resultDisplay.classList.remove('hidden');
        resultDisplay.textContent = 'Oh, too low. Try again.';
        guessesLeft--;
        //check if guesses are left, if not, display lose msg, increase attempts, disable game
        if (guessesLeft === 0) {
            resultDisplay.textContent = 'Sorry, that\'s not right. Game Over.';
            randomDisplay.textContent = correctNumber;
            attempts++;
            evalButton.disabled = true;
        }
    }

    //wrong guess, high
    if (guessEval === 1) {
        resultDisplay.classList.remove('hidden');
        resultDisplay.textContent = 'Oh, that\'s too high. Try Again.';
        guessesLeft--;
                //check if guesses are left, if not, display lose msg, increase attempts, disable game
        if (guessesLeft === 0) {
            resultDisplay.textContent = 'Sorry, that\'s not right. Game Over.';
            randomDisplay.textContent = correctNumber;
            attempts++;
            evalButton.disabled = true;
        } 
    }

    //correct guess, display win msg, increase score, disable game
    if (guessEval === 0) {
        evalButton.disabled = true;
        resultDisplay.classList.remove('hidden');
        resultDisplay.textContent = 'That\'s it! Congratulations, you won this round!';
        randomDisplay.textContent = correctNumber;
        guessesLeft = 0 ;
        attempts++;
        wins++;
    }

    //display attempts remaining + new score
    guessesLeftOutput.textContent = guessesLeft;
    winOutput.textContent = wins;
    lossOutput.textContent = attempts - wins;
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
    winOutput.textContent = 0;
    lossOutput.textContent = 0;
});