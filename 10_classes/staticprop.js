class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createID(){
        return `123`
    }
}

const vedantha = new User("vedantha")
// console.log(vedantha.createID())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","iphone@gmail.com")
console.log(iphone.createID())