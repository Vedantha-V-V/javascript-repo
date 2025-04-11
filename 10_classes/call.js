function setUserName(username){
    //Complex DB calls
    this.username = username
}

function createUser(username,email, password){
    setUserName.call(this,username)
    this.email=email
    this.password=password
}

const Ved = new createUser("Vedantha","ved@fb.com",123)
console.log(Ved)