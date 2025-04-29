class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    logMe(){
        console.log(`Username is: ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai","chai@gmail.com","123")
chai.addCourse()

const masalaChai = new User("masalachai")
masalaChai.logMe()
chai.logMe()

console.log(chai instanceof Teacher)