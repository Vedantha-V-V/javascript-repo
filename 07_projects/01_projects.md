# Projects related to DOM

## Solution code

## Project 1 (Color Changer)

```Javascript

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id=='grey'){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id=='blue'){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id=='yellow'){
            body.style.backgroundColor = e.target.id
        }
        else{
            body.style.backgroundColor = e.target.id
        }
    })
})

```

## Project 2 (BMI Calculator)

```Javascript

const form = document.querySelector('form')
//This use case will use empty value
//const height = int(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector("#result")
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please enter a valid value"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        console.log("Invalid input")
    }
    else{
        const val = Math.round(weight*(Math.pow(height,2)))
        console.log(val)
        result.innerHTML = `<spam>The BMI is ${val}</span>`
    }
})

```

## Project 3 (Digital Clock)

```Javascript

const clock = document.getElementById('clock')
//document.querySelector('#clock')

setInterval(function(){
    let date = new Date();
    clock.innerHTML=`<span>${date.toLocaleTimeString()}</span>`
},1000)

```

## Project 4 (Number Guesser)

```Javascript

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

```


## Project 5 (Key Checker)

```Javascript

const insert = document.getElementById('insert')
    window.addEventListener('keydown',(e)=>{
        insert.innerHTML =`<div class="color">
            <table>
            <tr>
                <th>Key</th>
                <th>Key Code</th>
                <th>Code</th>
            </tr>
            <tr>
                <th>${e.key === " "? "Space" : e.key}</th>
                <th>${e.keyCode}</th>
                <th>${e.code}</th>
            </tr>
            </table>
            </div>`
    })

```