// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
const mashedPotatoesList = document.querySelector("#mashedPotatoes");

function executeStep(food, stepIndex) { // The executeStep function takes a callback function.
  getInstruction(food, stepIndex, (step) => {
    mashedPotatoesList.innerHTML += `<li>${step}</li>`; // The callback is defined here.
    if (stepIndex < mashedPotatoes.length - 1) {
      // Execute the next step
      executeStep(food, stepIndex + 1);
    }
  }, (error) => {
    console.error(error);
  });
}

executeStep('mashedPotatoes', 0);
//------------------------------------------------------------------------------
// Iteration 2 - using promises
function obtainInstruction(food, stepIndex) {
  // return a new promise
  return new Promise((resolve, reject) => {
     // call the getInstruction function with callbacks
     getInstruction(food, stepIndex, (step) => {
       // resolve the promise with the step
       resolve(step);
     }, (error) => {
       // reject the promise with the error
       reject(error);
     });
  });
 }
// Use the obtainInstruction function to fetch and display each step
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction('steak', 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
  })
  .catch((error) => {
    console.error(error);
  });

//------------------------------------------------------------------------------

// Iteration 3 using async/await
const broccoliList = document.querySelector("#broccoli");
async function makeBroccoli() {
  for (let stepIndex = 0; stepIndex < broccoli.length; stepIndex++) {
    const step = broccoli[stepIndex];
    broccoliList.innerHTML += `<li>${step}</li>`;
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay each step for 1 second
  }
}

// error handler
makeBroccoli().catch((error) => {
  console.error(error);
});
//------------------------------------------------------------------------------
// Bonus: Iteration 4 - Display the image
//from index.html . delete the "hidden" word from each image to show it.

// Bonus: Iteration 5 - Promise.all()
const brusselsSproutsList = document.querySelector("#brusselsSprouts");

// Display each step in the provided array
async function displaySteps(steps) {
  for (const step of steps) {
     brusselsSproutsList.innerHTML += `<li>${step}</li>`;
     await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
  }
 }

function displayFinalMessage() {
  brusselsSproutsList.innerHTML += `<li>Brussels sprouts are ready!</li>`;
}

// Defining asynchronous function
async function displayBrusselsSprouts() {
  try {
     // Awaiting the displaySteps function with a list of Brussels Sprouts steps
     await displaySteps([...brusselsSprouts]);
     // Displaying final message after all steps are completed
     displayFinalMessage();
     console.log("All steps are completed!");
  } catch (error) {
     // Catching any error that may occur during the process
     console.error(error);
  }
 }

displayBrusselsSprouts();

//------------------------------------------------------------------------------
