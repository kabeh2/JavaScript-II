// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/

////////////////////////////////////////////////////////////
/////////////// QUESTION 1

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function(length) {
  console.log(length);
});

////////////////////////////////////////////////////////////
/////////////// QUESTION 2

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, function(last) {
  console.log(last);
});

////////////////////////////////////////////////////////////
/////////////// QUESTION 3

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

sumNums(2, 3, function(sum) {
  console.log(sum);
});

////////////////////////////////////////////////////////////
/////////////// QUESTION 4

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(2, 3, function(total) {
  console.log(total);
});

////////////////////////////////////////////////////////////
/////////////// QUESTION 5

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

  console.log(cb(item, list));
}

// Better Solution
contains("Pencil", items, function check(x, y) {
  return `${y.includes(x)}: ${x} is in array [${y}]`;
});

///////////////////////////////
//////// WORSE SOLUTION
// contains("Pencil", items, function check(x, y) {
//   if (y.includes(x)) {
//     return true;
//   } else {
//     return false;
//   }
// });

////////////////////////////////////////////////////////////
/////////////// /* STRETCH PROBLEM */

const items2 = ["Pencil", "Notebook", "yo-yo", "Gum", "Notebook", "yo-yo"];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  console.log(cb(array));
}

///////////////////////////////////////
///////////// USING SETS

removeDuplicates(items2, function dups(array) {
  return [...new Set(array)];
});

///////////////////////////////////////
///////////// USING REDUCE

removeDuplicates(items2, function dups(array) {
  let newArr = array.slice();
  return newArr.reduce((a, b) => {
    if (a.indexOf(b) < 0) {
      a.push(b);
    }
    return a;
  }, []);
});
