// let myName = "Vedantha"

// console.log(myName.trueLength);

let myHeros = ["Thor","SpiderMan"]

let heroPower = {
    Thor: "Hammer",
    spiderman:"Web",
    getSpiderPower: function(){
        console.log(`Hero Power: ${this.spiderman}`)
    }
}

Object.prototype.vedantha = function(){
    console.log(`The Object has the power not arrays or functions separately.`)
}

Array.prototype.arrayaccess = function(){
    console.log("Array has the only access")
}

//heroPower.vedantha()
//myHeros.arrayaccess()

// Inheritance
const User = {
    name: "Vedantha",
    email:"ved@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment:'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "TripleV       "

String.prototype.trueLength = function(){
    //console.log(`${this}`)
    console.log(`True Length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"vedantha".trueLength()