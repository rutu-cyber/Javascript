let score = 33
// console.log(typeof score) // number
// console.log(typeof (score)); // number another way

// let score = "33"
// console.log(typeof score); // string

//  =================== string to number conversion =============
let valueInNumber = Number(score)
// console.log(typeof score); // number

// what if coder dont know value actually a right number or not suppose

// let score = "33rd";
// let valueInNumber = Number(score)
// console.log(typeof score); // O/P number
// console.log(valueInNumber); //O/P NaN

// // what if its null
// let score = null;
// let valueInNumber = Number(score)
// console.log(typeof score); // O/P number
// console.log(valueInNumber); // O/P 0

// what if its undefined
// let score = undefined;
// let valueInNumber = Number(score)
// console.log(typeof score); // O/P number
// console.log(valueInNumber); // O/P NaN

// // what if its boolean
// let score = true;
// let valueInNumber = Number(score)
// console.log(typeof score); // O/P number
// console.log(valueInNumber); // O/P 1 
// for false its 0

// what if its string
// let score = 'rutu';
// let valueInNumber = Number(score)
// console.log(typeof score); // O/P number
// console.log(valueInNumber); // O/P NaN

//  ================= Number to Boolean Conversion ============

let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // O/P true

// empty string
// let isLoggedIn = "";
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // O/P false

// //string
// let isLoggedIn = 'rutu';
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // O/P true

/* ============ string to Number conversion  =========== */
let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(stringNumber); // OP- 33
// console.log(typeof stringNumber); // string

// ============ Operations ============
//basic operations

let value = 3
let negValue = -value
// console.log(negValue); // op- -3

// console.log(2+2); //add
// console.log(2-2); //sub
// console.log(2*2); //multiplication
// console.log(2**3); //power
// console.log(2/2); //divide
// console.log(2%2); //remender

let str1 = 'hello'
let str2 = ' rutu'
let str3 = str1 + str2
console.log(str3); // hello rutu

console.log("1" + 2); // OP 12 consider as string
console.log(1 + "2"); // OP 12 consider as string
console.log("1" + 2 + 2); // OP 122 consider as string
console.log(1 + 2 + "2"); // OP 32 first add then consider as string

// imp
// if string first then all treat as string or if string last then fisrt do the conversion and the treat as string

//bad practice just for questions
console.log(true); // true
console.log(+true); // 1
console.log(+""); // 0
