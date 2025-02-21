// singleton
//Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Vedantha",
    [mySym]:"mykey1",
    age:"20",
    location:"Bengaluru",
    isLoggedIn:false
}

console.log(JsUser["name"])
console.log(JsUser.age)
console.log(JsUser[mySym])

//Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log(`Hello ${this.name}`)
}

console.log(JsUser.greeting())