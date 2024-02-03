// variable and constants declaration
const accoundId = 45672;
let accountEmail = 'rutu@gmail.com'
var accoundPass = '12345'
accountCity = 'Thane' // not good practice
let accountState; // o/p undefined its just declared value is not assigned

// accoundId = 90876; //const cannot be changed
// let and var can be changed
accountEmail = 'rd@gmail.com'
accoundPass = '23456'
accountCity = 'Mumbai'
console.table([accoundId,accountEmail,accoundPass,accountCity, accountState]);

/*
Prefer not to use var
because of issue in block scope and functiona scope
*/