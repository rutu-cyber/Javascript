// let score = 33
console.log(typeof score) // number
console.log(typeof (score)); // number another way

// let score = "33"
// console.log(typeof score); // string

//  =================== string to number conversion =============
// let valueInNumber = Number(score)
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

// let isLoggedIn = 1;
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
// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(stringNumber); // OP- 33
// console.log(typeof stringNumber); // string
