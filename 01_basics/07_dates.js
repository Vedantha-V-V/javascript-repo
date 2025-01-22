// Dates
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

//let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("01-14-2025")

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myDate.getMonth());

console.log(myDate.toLocaleString('default',{
    weekday: "long",
}))