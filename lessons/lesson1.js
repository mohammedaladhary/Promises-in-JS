// let firstName = "mohammed"
// let lastName = "aladhary"
// let age = 25
// console.log(`My first name is ${firstName[0].toUpperCase()}${firstName.slice(1)} and last name ${lastName[0].toUpperCase()}${lastName.slice(1)} and im ${age} old`)
// alert(`Hello ${firstName} ${lastName}`)
// prompt("Are you excitrd for JS")

//function declaration
// function sayMyName() {
//     // info could come from an API
   
//     const firstName = "Mohammed";
//     const lastName = "Al Adhary";
   
//     return {
//       firstName,
//       lastName,
//     };
//   }
//   const userInfo = sayMyName();
//   console.log(`My name is ${userInfo.firstName} ${userInfo.lastName}`);

// //function expression
// function getStudentData() {
//     const name = "Mohammed";
//     const age = 12;
//     const city = "Muscat";
   
//     return {name, age, city};
// }

// const student = getStudentData();
// console.log(`The name is ${student.name}`);

//    function study(what,callback) {
//     //  setTimeout(function()
//       console.log(`I am studying ${what}`);
//       callback();
//       // },3000);
//   }

// //----------------------------------------------
// function chill() {
//     console.log("and now chilling")
//  }

//  study("JavaScript",chill)

 // Arrow Functions

// function expression syntax
// const greeting = function (name) {
//     console.log(`Hello, ${name}!`);
//   };
  
//   // arrow function syntax
//   const greeting = (name) => {
//     return name;
//   };
  
//   // If we have only one return we can remove the return statement
//   const greeting = (name) => `Hello, ${name}!`;
  
//   // In case no parameters
//   const greeting = () => console.log("Hello there!");
  