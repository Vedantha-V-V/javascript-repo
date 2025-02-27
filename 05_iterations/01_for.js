// for

// for(let index=0;index < 5; index++){
//     const element = index;
//     console.log(element)
// }

for(let i = 1; i<=5;i++){
    for(let j=0;j<5;j++){
        //console.log(i+" * "+j+" = "+(i*j))
    }
}

let myArray = ["angular","react","svelte","vue"]
//console.log(myArray.length)
for(let i=0;i<myArray.length;i++){
    //console.log(myArray[i])
}

// break and continue

for(let i=1;i<=10;i++){
    if(i==2){
        console.log("Detected 2")
        continue;
    }
    if(i==7){
        console.log("Detected 5")
        break;
    }
    console.log(`Value of i is ${i}`)
}