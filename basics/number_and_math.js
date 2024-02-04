// declaration 

// const score = 400
// console.log(score) // O/P 400

// const balance = new Number(100)
// console.log(balance); // O/P 100

// //converting to string
// console.log(balance.toString()); // O/P 100
// // output is same but its type is string

// console.log(balance.toString().length); // o/p 3
// // because 100 has 3 charcters

// console.log(balance.toFixed(2)); // o/p 100.00

// // const otherNumber = 23.8976
// // console.log(otherNumber.toPrecision(3)); // o/p 23.9

// const otherNumber = 123.8976
// console.log(otherNumber.toPrecision(3)); // o/p 124

// const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // o/p 1,000,000
// // by default its US standards
// console.log(hundreds.toLocaleString('en-IN')); // o/p 10,00,000


// MATHS ---
// its a by default js liabrary
console.log(Math); // op object [Math] {}

// abs - it converts negative to positive but positive is positive
console.log(Math.abs(-4)); // op 4
console.log(Math.abs(4)); // op 4

// round -it round of value 
console.log(Math.round(5.3)); // op - 5
// if you want a control to choose upper or lower
//ceil - for upper
console.log(Math.ceil(5.3)); // op 6
// floor - for lower
console.log(Math.floor(5.3)); // op 5

console.log(Math.min(4,7,2,8)); // op 2
console.log(Math.max(4,7,2,8)); // op 8

// _____ important ______
// random- Math.random always returns value between 0to1
console.log(Math.random()); // op - 0.7655371153791382
console.log(Math.random()*10); // op - 5.306181882845431
// but it gives 0 also soo
console.log(Math.random()*10 + 1); // op 6.048965419553029
console.log(Math.random()*10 + 1); // op - 5.062634699013295 7.873240558226028

// trik
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min + 1))+min); //op-17
