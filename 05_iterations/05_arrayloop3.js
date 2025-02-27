//forEach loop
const arr =["py","cpp","c","js","html","java","css"]

arr.forEach(function greet(val) {
    //console.log(val);
});

arr.forEach((val)=>{
    //console.log(val);
})

arr.forEach((val, index, arr)=>{
    //console.log(val," ",index);
})

const myObject = [
    {
        game1:"Minecraft",
        lang:"Java"
    },
    {
        game:"Fall Guys",
        lang:"Unity"
    },
]

myObject.forEach((key)=>(
    console.log(key.game)
))

