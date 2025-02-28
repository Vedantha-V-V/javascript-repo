const myNums = [1, 2, 3]

const initialVal = 0
// const sum = myNums.reduce(function(sum,index){
//         return sum+index},
// initialVal)

const sum = myNums.reduce((sum,index)=>{
    return sum+index},
initialVal)

//console.log(sum)

const shoppingCart =[
    {
        itemName:"js course",
        price: 999
    },
    {
        itemName:"py course",
        price: 2999
    },
    {
        itemName:"ds course",
        price: 1299
    }
]

const itemName = shoppingCart.reduce((acc,item)=>item.price+acc,0)

console.log(itemName)