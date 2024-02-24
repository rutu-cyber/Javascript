// declaration - There are two ways of object declaration literal and constructor
// singleton - when you create object using constrctor its a singleton its a only one object like that
// and if you create object using literal then that is not a singleton there are multipal instances 

// constructor method-
Object.create  // other way its a contructor method

//object literals -
// const JsUser = {}   // object created
// its a key value pair
const mySym = Symbol('key1')
const JsUser = {
    name: "Rutu", // its a by defalut string in key
    "full name": 'Rutu D.',
    // mySym: "mykey1", // it return but its data type is not symbol
    [mySym] : 'mykey1',
    age: 24,
    location: 'Thane',
    email: 'rutu@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ['Mon', 'Sat']
}

// access- both ways important for different cases
console.log(JsUser.email); // common and regular way
console.log(JsUser["email"]);
// for full name case there is no chance to access using . so for that case we have another way
console.log(JsUser["full name"]);

// for symbol data type
// take one symbol add that in object key and print that-
// console.log(typeof JsUser.mySym); // op mykey1 but data type string so its not the right way
console.log(JsUser[mySym]);
 
// how to change object value-
JsUser.email = 'rutuja@gmail.com' 
// if you dont want to change value of object then freeze the object
// Object.freeze(JsUser)
JsUser.email = 'Rutuja@google.com'
// console.log(JsUser);

// functions in object 
JsUser.greeting = function() {
    console.log('Hello Js User');
}
JsUser.greeting2 = function() {
    console.log(`Hello Js User,${this.name}`);
}
console.log(JsUser.greeting); // its op is undefined function is not executes but its reference return back op [Function (anonymous)]
console.log(JsUser.greeting()); 
console.log(JsUser.greeting2());