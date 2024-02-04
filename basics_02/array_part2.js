const marvel_heros = ['thar','ironman','spiderman']
const dc = ['superman','flash','batman']

marvel_heros.push(dc)
console.log(marvel_heros);
// output
//[ 'thar', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//it return array within array

console.log(marvel_heros[3][1]); // flash

const allHeros = marvel_heros.concat(dc)
console.log(allHeros);
//output
//['thar', 'ironman','spiderman',[ 'superman', 'flash', 'batman' ],'superman','flash','batman']

// another easy way spread operator (...)-
const all_new_heros = [...marvel_heros, ...dc]
console.log(all_new_heros);
//output
//['thar', 'ironman','spiderman',[ 'superman', 'flash', 'batman' ],'superman','flash','batman']

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
//output
// [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

// useful is data scrapping
console.log(Array.isArray('rutu')); // op false
console.log(Array.from('rutu')); // op [ 'r', 'u', 't', 'u' ]

console.log(Array.from({name:'rutu'})) // op []

let score1 = 100
let score2 = 200
let score3 = 300
// of - returns a new array from a set of elements
console.log(Array.of(score1,score2,score3));
// op [ 100, 200, 300 ]