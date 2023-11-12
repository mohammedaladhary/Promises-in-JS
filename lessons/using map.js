// We will be working on the following array:

const arr = [1, 2, 3];
console.log(`original: ${arr}`); // original: 1,2,3
const updatedArr = arr.map((e) => e*2);
console.log(`updated array: ${updatedArr}`);
// updated array: 2,4,6
// // `.forEach()` return "undefined"

// const newArr = arr.forEach((el) => el * 3);
// console.log(newArr); // undefined

// // If we want to double each number in the `arr` without making changes to it, we have to create a new empty array and push changed elements in it:

// const someNewArr = [];
// arr.forEach((el) => someNewArr.push(el * 2));
// console.log(`forEach-pushed: ${someNewArr}`); // forEach-pushed: 2,4,6

// // If we want for any reason to mutate the original array:

// arr.forEach((el, i) => (arr[i] = el * 2));
// console.log(`forEach-mutated: ${arr}`); // forEach-mutated: 2,4,6

// // Example with using `.map()`

// // The only proper way of going through an array and making changes to it without actually changing the original array is using `.map()`:

// const updatedArr = arr.map((el) => el * 2);
// console.log(`mapped: ${updatedArr}`); // mapped: 4,8,12

// // In case you are wondering how we got 4, 8 and 12, remember we mutated the original array earlier.
 
const prices = [4, 5, 6];
 
// Let's write fake reduce using `for` loop or `.forEach()` method:
 
let sum1 = 0;
prices.forEach((el) => {
  return (sum1 += el);
});
 
console.log(`using for loop: ${sum1}`); // 15
 
// Let's do the same as above using `.reduce()` method:
 
const sum2 = prices.reduce((accum, currValue) => {
  return accum + currValue;
}, 0); // <== this 0 means that at the very beginning, sum iz zero
 
// this can be written in one line:
// const sum2 = prices.reduce((accum, currValue) => accum + currValue, 0);
 
console.log(`using .reduce: ${sum2}`); // 15

const numbers = [1, 60, 112, 123, 100, 99, 73];

const notEvenNums = numbers.filter((num) => {
    if (num % 2 === 1) return num;
  });

  const reversedArray = numbers.slice().reverse();
  const sortedArray = numbers.slice().sort((a,b) => a-b);

console.log(`\nnot even numbers array: ${notEvenNums}`);
console.log(`Original array: ${numbers}`);
console.log(`Reversed array: ${reversedArray}`);
console.log(`S orted array: ${sortedArray}`);