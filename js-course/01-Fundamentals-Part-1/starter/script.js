/*
let js = "amazing";

console.log(40 + 8 + 23 - 10);
console.log("JOnas");
console.log(23);

let firstName = "Matilda"
console.log(firstName)


let myFirstJob = 'Programmer'
let myCurrentJob = 'Teacher'

let job1 = 'programmer';
let job2 = 'teacher'

console.log(myCurrentJob)
console.log(myFirstJob)

//2.11 Primitive Data Types
// Floating Point Numbers
let agee = 23;
// Strings
let LastXName = 'MyName';
// Boolean let fullAge = true;
// Undefinied let children; (means empty value, undefinied)
// Null

// JS has dynamic typing
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun)

console.log(typeof true);
console.log(typeof javascriptIsFun)
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun)

let year;
console.log(year)
console.log(typeof year)
year = 1991;
console.log(typeof year)
*/

/*
// Let, Const and Var
let age = 38;
age = 31;
now = age;

const birthYear = 1991;

// 13. Basic Operators
const ageMichal = 2000 - 1994;
const ageSarah = 2037 - 2018;
console.log(ageSarah)
console.log(ageMichal)
console.log(ageMichal, ageSarah);

console.log(ageMichal * 2, ageMichal / 2, ageMichal ** 2)

const firstName = 'Jonas';
const lastName = 'Grycki';
console.log(firstName + ' ' + lastName)


//Assigement Operators
let x = 10 + 5;
x += 10 // = 25
console.log(x)
x += 10 // x = x + 10 // = 35
console.log(x)
x *= 4; // 140
console.log(x)
x++; // 141
console.log(x)
x--; // 140
console.log(x)

// Coparsion Operators
console.log(ageMichal > ageSarah); // >, <, >=, <=
console.log(ageMichal >= 19);

const isFullAge = ageMichal >= 18;
console.log(isFullAge)

console.log(now - 1991)
console.log(now - 2018)
console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;
const ageMichal = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);


console.log(25 - 10 - 5);
let x, y;
x = 0;
y = 0;
x = y = 25 - 10 - 5;
console.log(x, y)

//Average
let averageAge = ageMichal + ageSarah / 2
console.log(ageMichal, ageSarah)
console.log(ageSarah / 2) // 9.5
console.log(ageMichal) // 46
console.log(averageAge) // 55.5

averageAge = (ageMichal + ageSarah) / 2
console.log(averageAge)

// Challenge 1

let massMark, heightMark, massJohn, heightJohn;
massMark = 78;
heightMark = 1.69;
massJohn = 92;
heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn)

let markHigherBMI = (BMIMark > BMIJohn)
console.log(markHigherBMI)
*/
/*
const firstName = 'Michal';
const job = 'teacher';
const birthYear = 1994;
const year = 2037;

const michal = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'
console.log(michal)

// Template String - passing argument
const michalNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(michalNew);

console.log(`Stringg`);

console.log(`String
multiple
lines`)
*/

/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`Is old enough`)
} else {
    const yearsLeft = 18 - age
    console.log(`Not old enough, years left ${yearsLeft}`)
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century)
*/

/*
// Type Conversion
const inputYear = '1991';
console.log(Number(inputYear))
console.log(Number(inputYear) + 18)

// Failed case
console.log(Number(`Jonas`))

console.log(String(23), 23);

// Type Coercion - automatically converts to string behinds the scenes
console.log(`I am ` + 23 + ' years old')

// Minus work as numeric operation, but + not, + joining
console.log('23' - '10' - 3);

let n = '1' + 1;
n = n - 1
console.log(n)
*/

/*
// Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(''));

const money = 0;
// if money=0 then money is false
if (money) {
    console.log("Dont spend it all")
} else {
    console.log('You should get  sjob')
}

let height = 0;
if (height) {
    console.log('YAY GOOD')
} else {
    console.log('crap')
}
*/

/*
// Equality Operators
// Difference between === and == is that === is strict operator, doesnt perform coercion and == perform coercion
const age = '18';
if (age === 18) {
    console.log('Yes 18 (strict)')
}


if (age == 18) {
    console.log('Yes 18 (loose)')
}

const fav = Number(prompt("What ur fav number?"))
console.log(fav)

if (fav === 23) { // '23' == 23, if we use === then results will be failed. We should use always ===
    console.log('Cool 23 is amazing')
} else if (fav === 18) {
    console.log('Cool its 18')
}

if (fav !== 23) {
    console.log('Why not 23')
}
*/


/* Booleans */
/*
const hasDrivesLicense = true;
const hasGoodVision = true;

console.log(hasDrivesLicense && hasGoodVision)
console.log(hasDrivesLicense || hasGoodVision)



// if (shouldDrive) {
//     console.log('Sarah can drive')
// } else {
//     console.log('Someone else should drive')
// }

const isTired = false;
console.log(hasDrivesLicense && hasGoodVision && isTired)

const shouldDrive = hasDrivesLicense && hasGoodVision && !isTired

if (shouldDrive) {
    console.log('Sarah can drive')
} else {
    console.log('Someone else should drive')
}
*/

/*
let scoreDolphins = (96 + 108 + 89) / 3
let scoreKoalas = (88 + 91 + 110) / 3

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy');
} else if (scoreKoalas === scoreDolphins) {
    console.log('Both win the trophy');
}
*/

//Switch
/*
const day = prompt('Enter day');

switch (day) {
    case 'monday': // does strict comparsion day === 'monday'
        console.log('PLan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples 2 days');
        break;
    case 'friday':
        console.log('REcord videos');
        break;
}
*/


// Statements and Operators

/*
// Conditional Operator
const age = 17;

// if condition is true then first part is executed, if false then we execute what's after : this is called ternary operator
age >= 18 ? console.log('I like wine') : console.log('I like to drink water')

const drink = age >= 18 ? 'wine' : 'water'
console.log(drink)

// Inserting value
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)
*/


const bill = 275;
let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)