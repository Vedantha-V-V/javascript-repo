// Immediately Invoked Function Expression (IIFE)

(function chai(){
    //Named IIFE
    console.log(`DB Connected`);
})();

((name)=>{
    console.log(`DB Connected by ${name}`)
})('Vedantha')