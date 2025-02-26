const userEmail = "ved@ai"

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have the username")
}

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value
//"0", 'false', " ", [], {}, function(){}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 22

console.log(val1)

//Ternary Operation
// (condition)? true : false

const iceTea = 100
iceTea >= 80 ? console.log("Expensive") : console.log("Cheap")