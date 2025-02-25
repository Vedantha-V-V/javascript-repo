const user = {
    username: "vedantha",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this)
    }
}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()
//console.log(this)

function tea(){
    let username = "vedantha"
    console.log(this.username)
}

//tea()

const chai = () =>{
    let username = "vedantha"
    console.log(this.username)
}

//chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

//const addTwo = (num1,num2) => num1 + num2

const addTwo = (num1,num2) => ({username:"vedantha"})

console.log(addTwo(3,4))