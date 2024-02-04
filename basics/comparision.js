// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

//++++++++++++++ diffrent datatype comparision+++++
console.log("2"> 1); // true
console.log("02">1); // true
// js convert 2 into number that why 

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true
//Comparision convert null to number treating it as 0
// thats why null>=0 is true and null>0 is false

//The reason is that an equality check == and comparision > < >= <= works differently.

console.log(undefined==0); //false

// === strict check
// it not only check value but it also check its data type

console.log("2"===2); //false beacause there datatype are different