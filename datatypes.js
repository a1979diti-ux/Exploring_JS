//Primitive data types (7)- String, number, boolean, BigInt, null, undefined, Symbol
//Immutable
//Symbol- basically used to make things unique. It is primarily used as unique identifiers for object properties to avoid name collisions.
//These are call by value data types....any changes made are made to their copies...original cannot be changes

const num1=123
const str1="hello"
const loggedIn= false
const bigInt1= 293740374823503984n
const bigInt2=BigInt("1371947983")
console.log(typeof bigInt1=="bigint")        //true
console.log(typeof bigInt2=="bigint")        //true
console.log(typeof Object(1n)=="object")     //true      // bigint wrapped in object
const temp= null
let email //undefined                   
const id=Symbol("123")                
const id2=Symbol("123")
console.log(id==id2) //false
console.log(id===id2) //false

//Reference/ Non-primitive data types- objects, arrays, functions
//Mutable
//These are call by reference...any changes made are made to original value
const arr1=["neha","suman","meera"]      //object type
const obj1={                             //object type
    name:"nehu",
    age:27
}
const myfunt= function(){                //function type (function object)
    console.log("hello world")
}

//Javascript is dynamically typed language

//typeof operator
console.log(typeof bigInt1)
console.log(typeof arr1)
console.log(typeof obj1)
console.log(typeof myfunt)
