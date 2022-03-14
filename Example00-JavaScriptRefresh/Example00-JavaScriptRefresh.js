var name = 'Max';
var age = 29;
var hasHobbies = true;

const sumarizeUser = (userName, userAge, userHasHobby) => {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby;
}

/*function sumarizeUser(userName, userAge, userHasHobby) {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby;
}*/

console.log(sumarizeUser(name, age, hasHobbies));


const person = {
    name: "David",
    age: 33,
    greet() {
        console.log("Hi, i am " + this.name);
    }
}

const printName = ({ name }) => {
    console.log(name);
}

printName(person);


console.log(person);
person.greet();


const hobbies = ['Sport', 'Cooking'];
for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}));