//var c = 300
let a = 30

if (true){
    let a = 10
    const b = 20
    console.log("Local Scope: ",a)
}

console.log("Global Scope: ",a)

function one(){
    const username = "vedantha"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website) <-- Throws an error
    two()
}

one()

if(true){
    const username = "vedantha"
    if(username === "vedantha"){
        const website = " youtube"
        console.log(username + website)
    }
    //console.log(website) <--- error
}

//console.log(username) <--- error

