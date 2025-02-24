// function addNum(num1,num2){
//     console.log(num1+num2)
// }

// addNum(10,20)

function addNum(num1,num2){
    //console.log(num1+num2)
    return num1+num2
}
    
const result = addNum(10,20)

//console.log("Result: ",result)

function loginUserMessage(username = "Sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("Vedantha"))

function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200,300,400))

function handleObject(anyobject){
    console.log(anyobject.username)
}

const user = {
    username: "Vedantha"
}

//handleObject(user)
//handleObject({ username:"Ram"})

const myNewArray = [100,200,300]

function returnSecond(getArray){
    return getArray[2];
}

//console.log(retSec(myNewArray))
console.log(returnSecond([1,2,3,4]))