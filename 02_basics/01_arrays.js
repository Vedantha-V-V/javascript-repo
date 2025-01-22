//Arrays
const myArr = [1,2,3,4,5]
console.log(myArr[0])

//Array Methods
myArr.push(6)
console.log(myArr)

myArr.pop()
console.log(myArr)

myArr.unshift(0)
myArr.shift()
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(9))

console.log(myArr.join())

console.log("A: ",myArr);
console.log("B: ",myArr.slice(1,3))

myn1 =myArr.splice(1,3);
console.log("C: ",myArr);