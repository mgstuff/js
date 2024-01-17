// Strict mode can reserve some variables names
'use strict';

/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive')

*/

/*
// Functions
function logger() {
    console.log("Michal");
}

// Calling function
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice
}

const appleJuice = fruitProcessor(5, 6)
console.log(appleJuice)
console.log(fruitProcessor(5, 6))

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice)
*/

/*
// Function declaration
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age1 = calcAge1(1991)
console.log(calcAge1(1991));

// Function as expression, expressions product values
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

const age2 = calcAge2(1991)
console.log(age1, age2)
*/

/*
// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age
    return `${firstName} retires in ${retirement}`
}

console.log(yearsUntilRetirement(1991, 'Mike'))
*/


/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    console.log(apples, oranges)
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`
    return juice
}

console.log(fruitProcessor(4, 5))
*/
/*
// Creating variable using function and its return value

const calcAge = function (birthYear) {
    return 2037 - birthYear
}

console.log(calcAge(2011))

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 650 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement

    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }

    //return retirement
    //return `${ firstName } retires in ${ retirement } years`
}

console.log(yearsUntilRetirement(2035, 'Mike'))
console.log(yearsUntilRetirement(1970, 'Mike'))
*/

/*
const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
    return ((scoreOne + scoreOne + scoreThree) / 3)
}

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(44, 23, 71);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas) {
        return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas > avgDolphins) {
        return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        return console.log("No team wins...")
    }
}

*/
/*
// Arrays

const friends = ['Michaeal', 'Steve', 'Peter'];
console.log(friends)
const arr = [2, 3, 4, 5]

const years = new Array(1991, 2000, 333, 4444)
console.log(friends[0])
console.log(friends[1])
console.log(friends[2])

console.log(friends.length);
console.log(friends[friends.length - 1])

friends[2] = 'Jay';
console.log(friends)

const firstName = 'Jonas';
const jonas = [firstName, 'Grycki', 2037 - 1994, friends]

console.log(jonas)

// Excercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const anotherYears = [1990, 1967, 2002, 2010, 2018]

const age1 = calcAge(anotherYears[0]);
const age2 = calcAge(anotherYears[1]);
const age3 = calcAge(anotherYears[2]);

console.log(age1, age2, age3)

console.log(calcAge(anotherYears))

const ages = [calcAge(anotherYears[0]), calcAge(anotherYears[1])]
console.log(ages)

// Push is a method which adds element at the end of the array
const newLength = friends.push('Jay')
console.log(friends)
console.log(newLength)

// Adding at beggining
friends.unshift('John')
console.log(friends)

// Removing elements
friends.pop() //removing last element
friends.pop() //removing last element
console.log(friends)

// Removing first element
friends.shift();
console.log(friends)

console.log(friends.indexOf('Steve'))

// Checking of element exists in array
console.log(friends.includes('Bob'))
console.log(friends.includes('Steve'))

if (friends.includes('Steve')) {
    console.log('Steve is here')
}

// Coding Challenge 2
*/

/*
function calcTip(bill) {
    var tip = 0
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15
        tips.push(tip)
        totals.push(tip + bill)
    } else {
        tip = bill * 0.2
        tips.push(tip)
        totals.push(tip + bill)
    }
}
*/
/*
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44]
var tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
var totals = [[bills[0] + tips[0]], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals)
*/


// Objects
/*
const jonasArray = [
    'Jonas',
    'Michal',
    'Adam',
    2039 - 1994,
    ['Mike', 123]
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schetman',
    age: 2037 - 1994,
    job: 'Teacher',
    friends: ['Mike', 'Peter', 'Steven'],
    hasDriversLicense: true,

    //Expression
    calcAge: function (birthYear) {
        return 2037 - birthYear
    }
};

console.log(jonas)
// With . notation we have to use real exisitng properties
console.log(jonas.lastName)
console.log(jonas['lastName'])

// With bracket notation we dont need to use real properties, we can add nameKey
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey])

const interestedIn = prompt('What do you want to know about Jonas? Choose - firstName, lastName, age, job and friends')
// Now it checks for interestedIn and will try to locate it in the object to print it later
console.log(jonas[interestedIn])

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn])
} else {
    console.log(' Wrong request, try again')
}

// Adding elements to the object via . and bracket notation
jonas.location = 'Portugal'
jonas['twitter'] = '@johnas'
console.log(jonas)

// Challenge
console.log(`${jonas.firstName} has ${jonas.friends.length} firends and his best friend is called ${jonas.friends[0]}`)

*/
/*
// Object Methods

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schetman',
    birthYear: 1991,
    age: 2037 - 1994,
    job: 'Teacher',
    friends: ['Mike', 'Peter', 'Steven'],
    hasDriversLicense: false,

    //Expression
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear
    // }

    // using this. pointing to value from the object itself
    // calcAge: function () {
    //     return 2037 - this.birthYear
    // }

    // Calculated property and stored in object
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} old ${this.job} and he ${this.hasDriversLicense == true ? 'has a drivers license' : 'has no drives license'}`
    }
};


console.log(jonas.age)
//console.log(jonas['calcAge'](1991))

// Challenge
console.log(`${jonas.firstName} is a ${jonas.age} old ${jonas.job} and he ${jonas.hasDriversLicense == true ? 'has a drivers license' : 'has no drives license'}`)
const summaryValue = jonas.getSummary()
console.log(`SummaryValue: ${summaryValue}`)


//Coding Challenge #3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = (this.mass / (this.height * this.height))
        return this.bmi
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = (this.mass / (this.height * this.height))
        return this.bmi
    }
}

if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`)
} else {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`)
}
*/

// LOOPS
/*
for (let rep = 5; rep <= 10; rep++) {
    console.log(`Lift reps ${rep}`)
}
*/
/*
const jonasArray = [
    'Jonas',
    'Michal',
    'Adam',
    2039 - 1994,
    ['Mike', 123],
    true
];

const types = []

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof (jonasArray[i]))

    // FIlling types array
    // types[i] = typeof (jonasArray[i])
    types.push(typeof jonasArray[i])
}
console.log(types)

const years = [1991, 2003, 2020, 2023];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages[i] = 2037 - years[i]
}

console.log(ages)

// continue and break
// continue exit current loop and continues with next
// break exit completely loop

console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof (jonasArray[i]))
}

console.log('--- BREAK WHEN NUMBER FOUND ---')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof (jonasArray[i]))
}
*/


// Loops in loops, looping backward
const jonasArray = [
    'Jonas',
    'Schmit',
    2039 - 1994,
    'teacher',
    ['Mike', 'Peter', 'Steven'],
    true
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i])
}

for (let excercise = 1; excercise <= 3; excercise++) {
    console.log(`----- Starting excercise ${excercise}`)

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Doing rep ${rep}`)
    }
}

// While Loop
/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(rep, jonasArray[rep])
}
*/
let rep = 1;
while (rep <= 10) {
    console.log(rep)
    rep++;
}

// Challenge 4
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = []
let totals = []

for (var i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i])
    totals[i] = bills[i] + calcTip(bills[i])
}
