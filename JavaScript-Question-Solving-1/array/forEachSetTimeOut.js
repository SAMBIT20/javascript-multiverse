// Array - forEach , map , filter

// 🧠 *************** forEach ****************

console.log("🧠 *************** forEach **************** 🧠");
var a = [1, 2, 3, 4, 5, 6];

console.log(a[0]); // 1

// foreach is a loop which works on arrays
// for each is a higher order function
// A higher-order function in JavaScript is a function that can take one or more functions as arguments or return a function as its result.

a.forEach(function (value) {
  console.log(value + 2);
});

// 🔥 Use foreach to print hello before all members names

a.forEach(function (value) {
  console.log("Hello," + value);
});

// 🔥 Print those members who are greater than 2.

a.forEach((value) => {
  if (value >= 2) {
    console.log(value);
  }
});

// 🔥 sum of all members in array

let sum = 0;
a.forEach((value) => {
  sum = sum + value;
});
console.log("sum : " + sum);

// 🔥 Sum of all members in array if any member string then skip that member

const members = [1, 2, "3", "4", 5, 6];

let newSum = 0;
members.forEach((value) => {
  if (typeof value === "number") {
    newSum = newSum + value;
  }
});

console.log("New Sum: " + newSum);

// 🔥 🧠 Quizzes

var arr = [];

for (var i = 0; i < 10; i++) {
  arr.push(function () {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  });
}
for (var i = 0; i < 10; i++) {
  arr[i]();
}

// Ans -> 10 - 10 times

// 🔥 🧠 Why it's behaving like this lets understand

/*
The reason your code prints 10 ten times is due to a common JavaScript 
closure issue related to the use of var for variable declaration and 
the asynchronous behavior of setTimeout.

Fix 🧠 : 

To fix this issue and have each function print the value of i as expected, 
you can use let instead of var to declare i. The let keyword creates a new block scope 
for each iteration of the loop, ensuring that each function in the arr array captures the correct value of i:
*/

var arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(function () {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  });
}

for (var i = 0; i < 10; i++) {
  arr[i]();
}

// 🧠 Understand sync vs async

console.log(1);
console.log(2);
console.log(3);

setTimeout(() => console.log(4), 0);

console.log(5);

/*
Synchronous - synchronous code execute line by line and if first line is 
not resolved the code execution will not move to the next line .

Asynchronous - asynchronous code wait until synchronous code is not finished  
when the synchronous code finished  then asynchronous code 
starts it's execution.
As the asynchronous code means it's probably can have some delay, it also takes something called callback
*/

// Callback 🧠

/* A callback in JavaScript is a function that is passed as an argument to another 
function and is executed after the completion of an asynchronous task or in response to a specific event. 
Callbacks are used to ensure that a particular piece of code is executed when the task is done or when a 
condition is met, making them essential for working with asynchronous operations in JavaScript.
*/

function performTask(taskName, callback) {
  console.log(`Starting ${taskName}...`);
  // Simulate an asynchronous task
  setTimeout(function () {
    console.log(`${taskName} completed.`);
    callback(); // Call the provided callback function
  }, 2000);
}

function afterTask() {
  console.log("After the task is done.");
}

performTask("Example Task", afterTask);

/* 
IMPORTANT🧠 : is setTimeout is a Higher-order function ?? 

Yes, setTimeout is a Higher-Order Function. 
It takes another function as an argument and calls this particular function after a defined amount of time.

*/
// Object - access loop

// Freeze , this call apply bind
