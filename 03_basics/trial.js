console.log('Hello World');
let name = 'Ved';
let age = 30;
let isApproved = false;
let firstName = undefined;
let selectedColor = null;

let person = {
    name: 'Ved',
    age: 30
}

person.name='John';

let selection = 'name';
person[selection] = 'Sid';

console.log(person.name);

let selectedColors = ['red','blue'];

function greet(){
    console.log('Hello World');
}

greet();

let username
username=window.prompt('What is your username');

//Password Generator
function generate(length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){
    const lowercaseChars ="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars ="0123456789";
    const symbolChars ="!@#$%&";

    let allowedChars = "";
    let password = "";

    allowedChars+=includeLowerCase ? lowercaseChars : "";
    allowedChars+=includeUpperCase ? uppercaseChars : "";
    allowedChars+=includeNumbers ? numberChars : "";
    allowedChars+=includeSymbols ? symbolChars : "";

    for(let i=0;i<length;i++){
        const randomIndex = Math.floor(Math.random()*allowedChars.length);
        password +=allowedChars[randomIndex];
    }
    return password;
}

const passwordLength = 8;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generate(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols);

console.log(`Generated password: ${password}`);