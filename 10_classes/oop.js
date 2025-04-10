const user = {
    username: "Vedantha",
    loginCount: 0,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from DB")
        //console.log(`Username: ${this.username}`)
        //console.log(this)
    }
}

//console.log(user.username)
//console.log(user.getUserDetails())
//console.log(this)

function User(username, loginCount, isloggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn
    return this

    this.greeting = function(){
        console.log(`Hello ${this.username}`)
    }
}

const userOne = new User("Vedantha",1, true)
const userTwo = new User("Chai Aur Code",2,false)
console.log(userOne)
//console.log(userTwo)
