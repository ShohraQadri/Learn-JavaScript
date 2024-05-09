const randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guess');
const guessSlot = document.querySelector('.guessFiled');
const remaining = document.querySelector('.lastresult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultparas');

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(guessSlot.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('plase enter a valis number')
    }
    else if (guess < 1) {
        alert('plase enter a number more than one')

    }
    else if (guess >= 100) {
        alert('plase enter a number inder 100')

    }
    else {
        prevGuess.push();
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`game over. Random number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }

    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`you guessed it right`)
        endGame()
    }
    else if (guess < randomNumber) {
        displayMessage(`number is too low`)
    }
    else if (guess > randomNumber) {
        displayMessage(`number is too high`)
    }
}


function displayGuess(guess) {
    guessSlot.value = ''
}

function displayMessage(Message) {

}

function endGame() {

}

function startGame() {

}