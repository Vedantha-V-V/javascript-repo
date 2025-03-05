const max = 11
let number = parseInt(Math.random()*100+1)
const chances = document.querySelector('.chances')
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

console.log(number)
let numGuess = 1
let prevGuess = []
chances.innerHTML=`<span>${max-numGuess}</span>`

const p = document.createElement('p')

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        window.alert("Please enter a valid number")
    }
    else if(guess < 1 || guess > 100){
        window.alert("Entered number is out of bounds")
    }
    else{
        prevGuess.push(guess)
        if(numGuess >= 10){
            displayGuess(guess)
            displayMessage(`Game Over the Random Number was ${number}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === number){
        displayMessage("You guessed it right")
        endGame()
    }
    else if(guess > number){
        displayMessage("The number is high")
    }
    else{
        displayMessage("The number is low")
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++
    chances.innerHTML = `${max - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<button id="newGame">Start new Game</button>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGame = document.querySelector('#newGame')
    newGame.addEventListener('click',function(e){
        number = parseInt(Math.random()*100+1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        chances.innerHTML=`<span>${max-numGuess}</span>`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        lowOrHi.innerHTML=''
        playGame = true
    })
}
