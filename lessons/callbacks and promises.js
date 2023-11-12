// // Example 1:

// function func1(callback) {
//     // The `callback` parameter represents a function
//     console.log("Hi");
  
//     callback();
//   }
  
//   function func2() {
//     console.log("Goodbye!");
//   }
  
//   func1(func2);
  
//   // Example 2:
  
//   const directions = [
//     "Starting point: Ironhack Miami",
//     "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
//     "➔ Turn right onto S Miami Ave",
//     "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
//   ];
  
//   function getDirections(step, callback, errorCallback) {
//     // setTimeout(() => {
//     console.log(directions[step]);
  
//     if (!directions[step]) errorCallback("Instructions not found.");
//     else callback();
//     // }, 2000);
//   }
//   // Callbacks in sequence - Callback hell, hard to read, hard to main code, error-prone.
  
//   getDirections(0, () => {
//     getDirections(1, () => {
//       getDirections(2, () => {
//         getDirections(3, () => {
          
//           console.log("You arrived at your destination!");
//           // getDirections(4, () => {}, (err) => console.log(err) ) ;
//         }, (err) => console.log(err));
//       }, (err) => console.log(err));
//     }, (err) => console.log(err));
//   }, (err) => console.log(err))

// Example using callback hell:
// const directions = [
//     "Starting point: Ironhack Madrid",
//     "➔ Turn right toward P. de la Chopera",
//     "← At the roundabout, take the 1st exit onto P. de la Chopera",
//     "* Lune Creperie P. de la Chopera 33, Madrid",
//   ];
  
//   function obtainDirections(step) {
//     return new Promise(function (resolve, reject) {
//       // setTimeout(() => {
//       console.log(directions[step]);
  
//       if (!directions[step]) reject("Instructions not found.");
//       else resolve();
//       // }, 2000);
//     });
//   }
  
//   obtainDirections(0)
//     .then(() => obtainDirections(1))
//     .then(() => obtainDirections(2))
//     .then(() => obtainDirections(3))
//     .then(() => console.log("You arrived at your destination!"))
//     .catch((err) => console.log(err));

//Task using callbacks

// function startTask1(callback) {
//     console.log("Task 1 started");
//     setTimeout(() => {
//       console.log("Task 1 completed");
//       callback();
//     }, 1000);
//   }
  
//   function startTask2(callback) {
//     console.log("Task 2 started");
//     setTimeout(() => {
//       console.log("Task 2 completed");
//       callback();
//     }, 1000);
//   }
  
//   function startTask3(callback) {
//     console.log("Task 3 started");
//     setTimeout(() => {
//       console.log("Task 3 completed");
//       callback();
//     }, 1000);
//   }
  
//   function startTask4(callback) {
//     console.log("Task 4 started");
//     setTimeout(() => {
//       console.log("Task 4 completed");
//       callback();
//     }, 1000);
//   }
  
//   function performTasks() {
//     startTask1(() => {
//       startTask2(() => {
//         startTask3(() => {
//           startTask4(() => {
//             console.log("All tasks are completed!");
//           });
//         });
//       });
//     });
//   }
  
//   performTasks();

//Task using promises
function startTask1() {
    return new Promise((resolve) => { // you will add this line - 1
        console.log("Task 1 started");
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve();               // to close the promises - 2
        }, 1000);
    });
}

function startTask2() {
    return new Promise((resolve) => {
        console.log("Task 2 started");
        setTimeout(() => {
            console.log("Task 2 completed");
            resolve();
        }, 1000);
    });
}

function startTask3() {
    return new Promise((resolve) => {
        console.log("Task 3 started");
        setTimeout(() => {
            console.log("Task 3 completed");
            resolve();
        }, 1000);
    });
}

function startTask4() {
    return new Promise((resolve) => {
        console.log("Task 4 started");
        setTimeout(() => {
            console.log("Task 4 completed");
            resolve();
        }, 1000);
    });
}

//using promises
// function performTasks() {
//     startTask1()
//         .then(() => startTask2())
//         .then(() => startTask3())
//         .then(() => startTask4())
//         .then(() => console.log("All tasks are completed!"))
//         .catch((error) => console.error("An error occurred:", error));
// }

//using async/await
async function performTasks() {
    try {
        // Starting task 1
        await startTask1();

        // Starting task 2
        await startTask2();

        // Starting task 3
        await startTask3();

        // Starting task 4
        await startTask4();

        // All tasks are completed
        console.log("All tasks are completed!");

    } catch (e) {
        // Error handling
        console.error("An error occurred:", e);
    }
}
performTasks();