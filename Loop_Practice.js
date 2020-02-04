'use strict';



// 1. Use a do...while loop to console.log the numbers from 1 to 1000.

let i = 0;
do {
    i += 1;
    console.log("This is number " + i + " in 1000");
} while (i < 1000);

// 2. Create an object (an array with keys and values) called person with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"

const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
};

// 3. Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.

const birth = () => {

for (const i in person) {
    if (i == "birthDate") {
        let birthYear = parseInt(person["birthDate"].slice(-4))
    if (birthYear % 2 !== 0) {
        console.log(person["firstName"] + " was born on an odd year " + person["birthDate"]);
    }
    }
}
} 
    birth();

// 4. Create an arrayOfPersons that contains multiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

const arrayOfPersons = [
    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female"
    },
    {
        firstName: "John",
        lastName: "Doe",
        birthDate: "Jan 5, 1920",
        gender: "male"
    },
]

// 5. Use .map() to map over the arrayOfPersons and console.log() their information.

const arrayMap = arrayOfPersons.map((people) => {
    return people;
});
console.log(arrayMap);

// 6. Use .filter() to filter the persons array and console.log only males in the array.

const males = arrayOfPersons.filter((male) => {
    return male.gender == 'male';
});
console.log(males);

// 7. Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

const oldFolks = arrayOfPersons.filter((seniors) => {
    return seniors["birthDate"].slice(-4) < "1990";
});
console.log(oldFolks);