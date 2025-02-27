const myObject = {
    game1:"NFS",
    game2:"Minecraft"
}

for(const key in myObject){
    //console.log(`${key} for ${myObject[key]}`);
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

for(key in map){
    console.log(key)
}

const arr =["py","cpp","c","js","html"]

for(key in arr){
    //console.log(arr[key])
}
