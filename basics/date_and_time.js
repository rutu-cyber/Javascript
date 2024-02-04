// date - Date object represent single moment on any platform. it starts from jan 1 1970.
// date calculate in mili seconds

// let myDate = new Date();
// console.log(myDate); // op 2024-02-04T22:47:15.091Z complicated
// console.log(myDate.toString()); 
// // O/P Sun Feb 04 2024 22:48:09 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());  // op Sun Feb 04 2024
// console.log(myDate.toLocaleString()); // op 2/4/2024, 10:49:48 PM
// console.log(typeof myDate); // object

// // to declare specific date 
// // month start from 0 
// let myCreateDate = new Date(2024,0,23)
// console.log(myCreateDate); // op 2024-01-23T00:00:00.000Z
// console.log(myCreateDate.toLocaleString()); // op 1/23/2024, 12:00:00 AM

// let myCreatedDate = new Date(2024,0,23,5,3)
// console.log(myCreatedDate.toLocaleString()); // op 1/23/2024, 5:03:00 AM

// let myDate = new Date('01-14-2024')
// console.log(myDate.toLocaleString());
// //op 1/14/2024, 12:00:00 AM

// // timestamp--
// let myTimeStamp = Date.now()
// console.log(myTimeStamp); // op 1707087471127
// console.log(myDate.getTime());
// // op 1707087523759 1705190400000

// // to convert seconds
// console.log(Math.floor(Date.now()/1000)); // op 1707087595

let newDate = new Date()
console.log(newDate.getMonth()); // op - 1
// because month start from 0 so for feb its 1
// to avoid this 
console.log(newDate.getMonth()+1); // op - 2
console.log(newDate.getDay()); // op 0

