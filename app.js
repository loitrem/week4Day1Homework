// How do we assign a value to a variable?
let aa = 1;

// How do we change the value of a variable?
aa = 2;

// How do we assign an existing variable to a new variable?
let bb = aa;

// Remind me, what are declare, assign, and define?
// declare is using let to assign something as a variable, assign is using = to assign that variable a value, defining is once its been declared in the current scope

// What is pseudocoding and why should you do it?
// pseudocoding is using comments to describe what the code should be doing

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// as much as needed?

// Create a variable called firstVariable
    let firstVariable;

// Assign it the value of the string "Hello World"
    firstVariable = "Hello World";

// Change the value of this variable to some number
    firstVariable = 1;

// Store the value of firstVariablein a new variable called secondVariable
    let secondVariable = firstVariable;

// Change the value of secondVariableto any string.
    secondVariable = "any string";

// What is the value of firstVariable?
// 1

// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

let yourName = "Erik";
console.log(`Hello, my name is ${yourName}`);

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a < b < c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a <= a < d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== '48');

// Declare a variable animal. Set it to be either "cow" or something else
    let animal = "cow";

// Write code that will print out "mooooo" if the it is equal to cow
    if (animal === 'cow'){
        console.log('mooooo');
    }
    
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
    if (animal === 'cow'){
        console.log('mooooo');
    }
    else {
        console.log("Hey! You're not a cow.");
    }

// Make a variable that holds a person's age; be semantic
    let person = {
        age: 16
    }
    //?

// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
    if (person.age >= 16) {
        console.log("Here are the keys!");
    } else {
        console.log("Sorry, you're too young.");
    }

// Remember: USE let when you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)
    
// This is NO GOOD: for(i = 0; i < 100; i++)

// Write a loop that will print out all the numbers from 0 to 10, inclusive
    for (i=0;i<=10;i++){
        console.log(i);
    }

// Write a loop that will print out all the numbers from 10 up to and including 400
    for (i=10;i<=400;i++){
        console.log(i);
    }

// Write a loop that will print out every third number starting with 12 and going no higher than 4000
    for (i=12;i<=4000;i+=3){
        console.log(i);
    }

// Print out the numbers that are within the range of 1 - 100
    for (i=1;i<=100;i++){
        console.log(i);
    }

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
    for (i=1;i<=100;i++){
        if (i%2===0){
            console.log(i + " <-- is an even number");
        } else {
            console.log(i);
        }
            
    }
