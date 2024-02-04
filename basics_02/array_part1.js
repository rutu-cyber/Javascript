// Array is a collection of different data types
// declaration
const myArr = [0,1,2,3,4,5]
const myHeros = ['Hulk', 'flash', 'ironman']
const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[1]); // op - 2

// array methods -
myArr.push(6);
console.log(myArr); // op [0, 1, 2, 3,4, 5, 6]
//pop- pop will remove last element of array
myArr.pop();
console.log(myArr); // op [ 0, 1, 2, 3, 4, 5 ]

//unshift- add eelement in the start of array
myArr.unshift(9)
console.log(myArr); // op [9, 0, 1, 2, 3, 4, 5 ]

// shift - remove the first element of array
myArr.shift()
console.log(myArr); // op [ 0, 1, 2, 3, 4, 5 ]

console.log(myArr.includes(9)); //op false
console.log(myArr.indexOf(3)); // op 3

const newArr = myArr.join()
console.log(myArr); // op [ 0, 1, 2, 3, 4, 5 ]
console.log(newArr); // op 0,1,2,3,4,5
//because its string
console.log(typeof newArr); // string

// slice and splice
// slice - returns a copy of a section of an array
// difference between slice and splice
// slice return original array but splice manipulate or change array

console.log("A ", myArr);
//slice
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);
//splice
const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);

// output
// A  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// B  [ 0, 1, 2, 3, 4, 5 ]
// C  [ 0, 4, 5 ]
// [ 1, 2, 3 ]