// // console.log("Raneem");

// // // variable declaration
// // let a;
// // //assigning value to a variable
// // a = "Five";

// // // Declaring variable and assigning it
// // let b = 5;
// // console.log("Value of b is " + b );

// // // Template Literals
// // //  ``
// // console.log(`Value of b is ${b} and value of a is ${a},
// // the sum is ${a+b} `);

// // // let and var 
// // // const = for a fix value 

// // const companyName = "SDA"; 
// // // companyName = "Ironhack";

// // // Naming Conventions for variable 
// // // let void;

// // // follow camelCasing or snakeCasing 
// // let myName; 
// // let student_name;

// // // single line comment
// // /*
// // * multi-line comment
// // */

// // // typeof operator  - use to identify the data type of the variable
// // console.log(typeof a);


// // let name = "Ana";
// // console.log(`Hello there, ${name}!`);

// // console.log(`${name} has ${4+1} devices including mobile phone and laptop`)


// // --------------------------------------------------------

// // String Methods

// // let bootcamp = "Java Full stack";
// // console.log(bootcamp);
// // console.log(bootcamp.length);
// // console.log(bootcamp.toUpperCase());
// // console.log(bootcamp.charAt(3));
// // console.log(bootcamp.charAt(20));
// // // - start index will be considered as 0
// // console.log(bootcamp.substring(-1));
// // console.log("Index of F is " + bootcamp.indexOf("F"));
// // console.log(bootcamp.startsWith("Java"));
// // console.log(bootcamp.endsWith("Java"));

// // console.log(bootcamp.includes("Full"));
// // console.log(bootcamp.includes("Hello"));


// // let firstName = "raneem";
// // let LastName = "muhammad";
// // console.log("Using slice and charAt:" + firstName.charAt(0).toUpperCase()  + firstName.slice(1));
// // console.log("Using substring and charAt:" + firstName.charAt(0).toUpperCase()  + firstName.substring(1));
// // console.log("Using substring and index number: " + firstName[0].toUpperCase()  + firstName.substring(1));

// let myNumber = 5;
// myNumber++;  // 6
// console.log(myNumber); // 6

// myNumber += 10; // myNumber = myNumber + 10 = 16
// console.log(myNumber); // 16

// myNumber -= 2; //16 - 2
// console.log(myNumber); // 14

// // String is in immutable in nature
// const course = "Java with spring boot";
// let newCourse = course.substring(10);
// console.log(course.substring(10));
// console.log(course);
// console.log(newCourse);


// let email; 
// console.log(email);

// let email2 = "";
// console.log(email2);


// == and ===
 // === same data type and value
 // == just the value 

// console.log ( 7 == 7);
// console.log (7 === 7);

// console.log(7 == "5"); // == loose equality operator 
// console.log( 7 === "7"); // === strict equality operator 



// console.log(true && false); // ==>
// //false


// console.log(11 % 3 === 2); // ==> ?
// //true 

// console.log(false || true); // ==> ?
// //true

// console.log(!true || false); // ==> ?
// //false

// console.log(17 == "17"); // ==> ?
// //true


// console.log(123 === "123"); // ==> ?
// //false

 
// let statement = "I love JavaScript!";
// let subStatement = statement.substr(2, 9);
// console.log(statement); // ==> I love JavaScript!
 
// statement[0].toLowerCase();
// console.log(statement); // ==> ? I love JavaScript! 

// let str = "hello,dear.friend! nice,to.see you!";
 
// // version 1:
// let newStr = "";
// for (let char of str) {
//   if (char === "." || char === ",") {
//     char = " ";
//   }
//   newStr += char;
// }
// console.log(newStr); // hello dear friend! nice to see you!
 
// console.log("-----------------------------------------------");
 
// // version 2:
// let stringy = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === "." || str[i] === ",") {
//     stringy += " ";
//   } else {
//     stringy += str[i];
//   }
// }
// console.log(stringy); // hello dear friend! nice to see you!
 
// console.log("----------------------------------------------------");
 
// // version 3:
 
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === "," || str[i] === ".") {
//     str = str.substr(0, i) + " " + str.substr(i + 1);
//   }
// }
 
// console.log(str); // hello dear friend! nice to see you!


// Arrays Methods 

const names = ["Saleh", "Shahad", "Nouf", "Nawaf"]
console.log(names.length);

names.push("dua");
console.log(names);
// unshift adds element to the first index
names.unshift("Anoud");
console.log(names);

//shift removes element from first index
console.log(names.shift());
console.log(names);

console.log(names.pop());

// 3. spread operator
const originalArr = "Nawaf Otayf";
console.log(`originalArr: ${originalArr}`); // originalArr: 1,3,5
const copyOfOriginal = [...originalArr];
console.log(`copyOfOriginal: ${copyOfOriginal}`); // copyOfOriginal: 1,3,5


const fruits = ["apple", "plum", "strawberries"];

// 1
for (let i = 0; i < fruits.length; i++) {
  console.log(i + fruits[i]);
}

// apple
// plum
// strawberries

// 2
fruits.forEach((oneFruit, index) => console.log(index, oneFruit));

// 0 'apple'
// 1 'plum'
// 2 'strawberries'