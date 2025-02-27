//for of

let myArray = ["angular","react","svelte","vue"]
for(const i of myArray){
    //console.log(i)
}

const greetings = "Hello World"
for(const greet of greetings){
    //console.log(`Each char is ${greet}`)
}

//Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

//console.log(map);

for(const [key,value] of map){
    //console.log(key,"->",value);
}