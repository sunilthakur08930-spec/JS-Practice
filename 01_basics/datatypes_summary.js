// Primitive //
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

// const bigNumber = 5466543123n

// Reference (Non-Primitive) //
//Array, Object, Functions, 

const heroes = ["Shaktiman", "Hanuman", "Spiderman"]
let myObj = {
    name: "Omnath",
    age: 14,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof myFunction);
console.log(typeof anotherId);

// Type of val      |       Result
// Undefined        |    "undefined"
// Null             |      "object"
// Boolean          |     "boolean"
// Number           |      "number"
// String           |      "string"

// +++++++++++++++++++++++++++++++++++++++++++ //

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Omnaththakurdotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "omnath@google.com"

console.log(userOne);
console.log(userTwo);