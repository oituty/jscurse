/***********************
* Variables and data types
*/ 

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
*/

/***********************
* Variables mutation and type coercion
*/ 

// var firstName = 'John';
// var age = 28;

// // Type coercion
// console.log(firstName + ' ' + age)

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + 
// '. Is he married? ' + isMarried);

// // Variable mutation
// age = 'twenty eight'; 
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + 
// '. Is he married? ' + isMarried);
 
// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);


/***********************
* Basic operators
*/ 

// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// // Math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// // Logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// Typeof operator
// console.log(typeof johnOlder);
// console.log(typeof 'Mark is older tha John');
// var x;
// console.log(typeof x);

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// var ageJohn = now - yearJohn;
// var ageMark = 35;
// average = (ageJohn + ageMark) / 2;
// console.log(average);


// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 26

// console.log(x, y);

// // More operators
// x *= 2;
// console.log(x);  //x = x * 2

// x += 10;
// console.log(x); // x = x + 10

// x++; // x = x + 1;
// console.log(x);

/***********************
* Challenge
*/ 

// var massMark = 78;
// var heightMark = 1.69;

// var massJohn = 92;
// var heightJohn= 1.95;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn/ (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// var markHigherBMI = BMIMark > BMIJohn? 'BMI do Mark é maior' : 'BMI do John é menor';

// console.log(markHigherBMI);

/***********************
* If / else statements
*/ 

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var massMark = 78;
// var heightMark = 1.69;

// var massJohn = 92;
// var heightJohn= 1.95;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn/ (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//     console.log('Mark\' BMI is higher than John\s.');
// } else {
//     console.log('John\' BMI is higher than Marks\s.');
// }


// var markHigherBMI = BMIMark > BMIJohn? 'BMI do Mark é maior' : 'BMI do John é menor';

// console.log(markHigherBMI);

/***********************
* Boolean logic
*/ 

// var firstName = 'John';
// var age = 35;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {    
//     console.log(firstName + ' is a young man.');
// } else {    
//     console.log(firstName + ' is a man.');
// }

/***********************
* The ternary operator and switch statements
*/ 

// var firstName = 'John';
// var age = 16;

// age >= 18 ? console.log(firstName + ' drinks beer.')
// : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// if (drink = age >= 18) {
//     var drink = 'beer';
// } else { 
//     var drink = 'juice';
// }    
// console.log(drink);

// switch statement
// var job = 'teacher';

// switch (job) {
//     case 'teacher':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// }

// age = 56;

// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
//         break
// }

// var firstName = 'John';
// var age = 35;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {    
//     console.log(firstName + ' is a young man.');
// } else {    
//     console.log(firstName + ' is a man.');
// }


/***********************
* Truthy and Falsy values and equality operators
*/ 

// Falsy values: undefined, null, 0, '', NaN
// Truthy values: NOT falsy values

// var height;

// height = 23;

// if (height|| height === 0) {
//    console.log('Variable is defined');
// } else {
//    console.log('Variable   has NOT been defined');
// }

// Equality operators

// if (height == '23') {
//     console.log('The == operator does type coercion!');
// }


// var scoreJohn = (89 + 120 + 103) / 3;
// var scoreMike = (116 + 94 + 123) / 3;
// var scoreMary = (97 + 134 + 105) / 3;
// console.log(scoreJohn, scoreMike, scoreMary);

// if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
//     console.log('Time do John ganhou, sua média foi: ' + scoreJohn);
// } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
//     console.log('Time do Mike ganhou, sua média foi: ' + scoreMike);
// } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
//     console.log('Time da Mary ganhou, sua média foi: ' + scoreMary);
// } else if (scoreMike == scoreJohn && scoreMike > scoreMary) {
//     console.log('Mike e John empataram');
// } else if (scoreMike == scoreMary && scoreMike > scoreJohn) {
//     console.log('Mike e Mary empataram');
// } else if (scoreJohn == scoreMary && scoreJohn > scoreMike) {
//     console.log('John e Mary empataram');
// } else (console.log('Tivemos um empate triplo!!!'));

/***********************
* Functions
*/ 


// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);

// function yearUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired.');
//     }
    
// }

// yearUntilRetirement(1998, 'John');
// yearUntilRetirement(1958, 'Mike');
// yearUntilRetirement(1912, 'Jane');

/***********************
* Function Statements and Expressions
*/ 

// // function declaration
// function whatDoYouDo(job, firstName) {  
// }

// function expression
// var whatDoYouDo = function(job, firstName) {  
//     switch(job) {
//         case 'teacher':
//             return firstName + ' is a teacher';
        
//         case 'drive':
//             return firstName + ' is a driver';

//         case  'designer':
//             return firstName + ' is a designer';

//         default:
//             return firstName + ' does something else';
//     }
// }

// console.log(whatDoYouDo('teacher', 'Jhon'));
// console.log(whatDoYouDo('drive', 'Mike'));
// console.log(whatDoYouDo('designer', 'Jane'));

/***********************
* Arrays
*/ 

// Initialize new array
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names);
// console.log(names.length);

// // Mutate array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

// Different data types

// var john = ['John', 'designer', 1990, 'teacher', false];

// john.push('oi');
// john.unshift('Mr.');
// // console.log(john);

// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(1990));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
// console.log(isDesigner);

/***********************
* Challenge
*/ 

// function tipCalculator(bill) {
//     var percentage;
//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = .15;
//     } else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }   

// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]),
//             tipCalculator(bills[1]),
//             tipCalculator(bills[2])];


// var finalValues = [bills[0] + tips[0],
//                    bills[1] + tips[1],
//                    bills[2] + tips[2]];

// console.log(tips, finalValues);

