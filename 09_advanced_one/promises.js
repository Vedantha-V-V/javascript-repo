const promiseOne = new Promise(function(resolve,reject){
    //Do an async taks
    //DB calls, cryptography, network calls
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Vedantha",email:
            "vedantha@gmail.com"
        })
    },1000);
})
PromiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"Vedantha",degree:"BE"})
        }
        else{
            reject('ERROR')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(err){
    console.log(err)
}).finally(()=>{
    console.log("The program was either resolved or rejected")
})

const promiseFive = new Promise(function(resolve,reject){
setTimeout(function(){
    let error=true
    if(!error){
        resolve({username:"javascript",password:"test"})
    }
    else{
        reject('ERROR JS went wrong')
    }
},1000)
})
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://api.github.com/users/Vedantha-V-V')
//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//         console.log(error)
//     }
    
// }
//getAllUsers()

fetch('https://api.github.com/users/Vedantha-V-V').then(function(user){
    return user.json()
})
.then((user)=>console.log(user.name))
.catch((error)=>console.log(error))