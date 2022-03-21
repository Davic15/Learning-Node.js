/** 
 * Section 02 - JavaScript - A quick refresher
*/

const name = 'David';
let age = 33;
let hasHobbies = true;

//* Pure function.
function sumarizeUser(userName, userAge, userHasHobby) {
    return (
        'Name is ' + 
        userName + 
        ', age is ' + 
        userAge + 
        ' and the user has hbbies: ' + 
        userHasHobby
    );
}

console.log(sumarizeUser(name, age, hasHobbies));

//* let and const.
//* let defindes a variable, const defines a variable and the value never change.

//* Arrow functions. They are a new feature in JavaScript.
//* this keyword, arrow function help us with it.
//* Arrow function with one statement (return) can omit {} and and the return
//* const add = (a, b) => a + b;
//* Arrow function with one argument you can omit the () surround it
//* const addOne = a => a + 1;
//* Arrow function with no arguments you should define ()
//* const addRandome = () => 1 + 2;
const sumarizeUserArrow = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' + 
        userName + 
        ', age is ' + 
        userAge + 
        ' and the user has hbbies: ' + 
        userHasHobby
    );
}

console.log(sumarizeUserArrow(name, age, hasHobbies));

//* Working with Objects
//* key/valuepair
//* For a method inside an object, just write function keyword or the function name and ()
const person = {
    name: 'David',
    age: '33',
    hobbies: true,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();
console.log(person);

//* Arrays and Array Methods
const hobbies = ['Sport', 'Cooking'];
for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);

//* Arrays, Objects & Reference Types
//* Primitive and referece data type 
//* We can add more element in an array even if we defined it as const.
hobbies.push('Programming');
console.log(hobbies);

//* Understanding Spread and Rest Operators
//* Spread Operator 
//* Create a new array with the values from another array
const copiedArray = hobbies.slice();
console.log(copiedArray);

const copiedArrayTwo = [...hobbies];
console.log(copiedArrayTwo);

const copiedPerson = {...person};
console.log(copiedPerson);

//* Rest operator -> used for functions
const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 4));


//* Destructuring
//* Object destructuring
const printName = (person) => {
    console.log(person.name);
}

printName(person);

const printNameTwo = ({ name }) => {
    console.log(name);
}
printNameTwo(person);


//* Async code & Promises
//* Async code does not finish immediately, it takes time
//* Execute Sync code first and Async code later.
//* Call back function are common un Node.js
console.log('Hi');
setTimeout(() => {
    console.log('Timer is done!');
}, 2000);
console.log('Bye');