// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function addNumbers() {
  // Local free variable
  let x = 1;

  function sumNumbers() {
    let y = 2;
    console.log(`The new sum is: ${x + y}`);
  }

  // Here shows the global variable can be manipulated outside the environment record
  x++;

  return sumNumbers;
}

let z = addNumbers();
z();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.

  let counter = 0;

  function countUp() {
    counter++;
    console.log(`The new count is: ${counter}`);
  }

  return countUp;
};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

let plusCounter = counter();
plusCounter();
plusCounter();

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  return {
    increment: function() {
      let result = counter++;
      return result;
    },
    decrement: function() {
      let result = counter--;
      return result;
    }
  };
};

let number = counterFactory();
number.increment();
number.increment();
number.increment();
number.decrement();
console.log(`The new stretch number count is: ${number.increment()}`);
