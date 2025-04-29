// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `91${this.password}`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmail.com","123")

// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `91${this.password}`
}

const tea = new User("tea", "tea@gmail.com","789")

console.log(tea.encryptPassword())
