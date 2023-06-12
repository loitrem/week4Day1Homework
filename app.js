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

// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
    for (i=0;i<=100;i++){
        if (i%5===0){
            console.log("I found a " + i + " High five!");
        } else {
            console.log(i);
        }
            
    }

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three 
// For numbers divisible by both three and five, be sure your code prints both messages
    for (i=0;i<=100;i++){

        if (i%3===0&&i!=0&&i%5===0){
            console.log("I found a " + i + " Three is a crowd. High Five!");
        } else if (i%3===0&&i!=0){
            console.log("I found a " + i + " Three is a crowd");
        } else if (i%5===0&&i!=0){
            console.log("I found a " + i + " High five!");
        } else {
            console.log(i);
        }
            
    }

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
let bank_account = 0;
for (i=1;i<=10;i++){
    bank_account += i;
    
}

// Check your work! Your bank_account should have $55 in it.
console.log("bank account total is $" + bank_account);

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
    bank_account = 0;
    for (i=1;i<=100;i++){
        bank_account += (i*2);
        
    }
// Check your work! Your bank_account should have $10,100 in it.
console.log("bank account total is $" + bank_account);

// What are the things in an array called?
    //objects

// Do Arrays guarantee those things will be in order?
    // yes
// What real-life thing could you model with an array?
 // to do list

//  Create an array that contains three quotes and store it in a variable called quotes
    let quotes = ["quote 1", "quote 2", "quote 3"];

// Given the following array const randomThings = [1, 10, "Hello", true]
    const randomThings = [1, 10, "Hello", true];

// How do you access the 1st element in the array?
    randomThings[0];

// Change the value of "Hello"to "World"
    randomThings[2] = "World";
    

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
    console.log(randomThings);

// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// What would you write to access the 3rd element of the array?
    ourClass[2];

// Change the value of "Github" to "Octocat"
    ourClass[4] = "Octocat";

// Add a new element, "Cloud City" to the array
    ourClass.push("Cloud City");
    console.log(ourClass);

// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: const myArray = [5, 10, 500, 20]
const myArray = [5, 10, 500, 20];

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
    myArray.push("Aegon");
    myArray.push("End of");

// Remove the 5from the beginning of the array.
    myArray.shift();

// Add the string "Bob Marley"to the beginning of the array.
    myArray.unshift("Bob Marley");

// Remove the string of your choice from the end of the array.
//    delete myArray[myArray.indexOf("Aegon")];
myArray.splice(myArray.indexOf("Aegon"),1);
console.log(myArray);

// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
    myArray.reverse();
    console.log(myArray);

//     Create a variable that contains an integer.

// Write an if ... elsestatement that:

// console.log()s "little number" if the number is entered is less than 100
    let num = 50;
    if (num<100){
        console.log("little number");
    } else {
        console.log("big number");
    }

// console.log()s big numberif the number is greater than or equal to 100.
num = 150;
if (num>100){
    console.log("big number");
} else {
    console.log("little number");
}

// Write an if ... else if ... elsestatement:

// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
    number = [7,2,15];
    console.log("===============================================");

    for (let i = 0;i<number.length;i++) {
        let num = number[i];
       if (num<5){
        console.log("little number");
        } else if (num > 10) {
            console.log("big number");
        }
        else {
            console.log("Monkey");
        } 
    };
    ////////////////////////////////////////////////////////////////////

    const kristynsCloset = [
        "left shoe",
        "cowboy boots",
        "right sock",
        "Per Scholas hoodie",
        "green pants",
        "yellow knit hat",
        "marshmallow peeps"
      ];
      
      // Thom's closet is more complicated. Check out this nested data structure!!
      const thomsCloset = [
        [
          // These are Thom's shirts
          "grey button-up",
          "dark grey button-up",
          "light blue button-up",
          "blue button-up",
        ],[
          // These are Thom's pants
          "grey jeans",
          "jeans",
          "PJs"
        ],[
          // Thom's accessories
          "wool mittens",
          "wool scarf",
          "raybans"
        ]
      ];

// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
      console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
      kristynsCloset.splice(kristynsCloset.indexOf("yellow knit hat"+1),0, "raybans");
      console.log(kristynsCloset);

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
    kristynsCloset[kristynsCloset.indexOf("yellow knit hat")] = "stained yellow knit hat";
    console.log(kristynsCloset);

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
      console.log("thom should wear : ",thomsCloset[0][0]);
    

// In the same way, access one item from Thom's pants array.
    console.log("thom should wear : ",thomsCloset[1][0]);

// Access one item from Thom's accessories array.
console.log("thom should wear : ",thomsCloset[2][0]);


// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is looking fierce in a " + thomsCloset[1][0] + ", " + thomsCloset[1][0] + " and " + thomsCloset[1][0] + "!");

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset[1]);

// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

// Like so?

// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!

// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.

let printGreeting = (name) => {
    return `Hello there, ${name}!`;
}

console.log(printGreeting("Erik"));

// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";

let printCoolthat = (name) => {
    console.log(`${name} is cool`);
}