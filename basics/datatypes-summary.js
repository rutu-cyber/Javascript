// primitive or call by value

// 7 types:
// string, number , boolean, null, undefined, bigInt, symbol

const score = 100
const scoreValue = 100.8

const isLoggedIn = false
const outsideTemp = null //empty
let userEmail; //undefined

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); //op - false

// non primitive or reference type or call by reference
// Array, Object, Function

// Array-
const heros = ['ironman', 'hulk', 'spiderman']

//objects
let myObj = {
    name: 'rutu',
    age: 24
}

// function
const myFunction = function() {
    console.log('Hello');
}