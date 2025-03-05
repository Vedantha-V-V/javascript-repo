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