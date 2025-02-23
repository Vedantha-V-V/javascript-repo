const tinderUser = new Object()

tinderUser.id = "001"
tinderUser.name = "Ved"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email:"user@google.com",
    fullname:{
        firstname:"Ved",
        lastname:"V"
    }
}

//console.log(regularUser.fullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"c"}
const obj3 = Object.assign({},obj1, obj2)
//console.log(obj3)

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
//console.log(tinderUser.hasOwnProperty("isLoggedIn"))

const course = {
    coursename:"JS in Hindi",
    price:"999",
}

const {coursename:cname} = course

//console.log(cname)