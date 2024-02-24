// objects singleton or using contrsuctor
//declareation
// const tinderUser = {} // op empty object non singleton object
// const tinderUser = new Object() // op return empty object single ton obejct 
// diffrence is one is singleton object and other is non single ton object
// const tinderUser = new Object() 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = 'Sam'
tinderUser.isLoggedIn = false
// console.log(tinderUser);

// object within object
const regularUser = {
    email: 'someone@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'rutu',
            lastname: 'devkar'
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

// optional chaining
// after some time

// object combining
const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}

// const obj3 = {obj1, obj2} // object within object problem
// const obj3 = Object.assign(obj1, obj2) // perfect
// const obj3 = Object.assign({}, obj1, obj2) // good practice both return same output

// bestes way latest
const obj3 = {...obj1, ...obj2}
// console.log(obj3); 

// when value come from db most used syntax

const users = [
    {
        id: 1,
        email: 'r@gmail.com'
    }
]
// users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //data type array important 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // array within array return every key value pair become array less use

// if you want to check proprty exist or not
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
console.log(tinderUser.hasOwnProperty('isLogIn')); //false