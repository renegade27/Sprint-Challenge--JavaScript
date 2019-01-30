// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(var1, var2, callback) {
  return callback(var1, var2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = (var1, var2) => {
  return var1+var2
}

const multiply = (var1, var2) => {
  return var1*var2
}

const greeting = (var1, var2) => {
  return `Hello ${var1} ${var2}, nice to meet you!`
}

console.log(consume(1, 4, add));
console.log(consume(4, 4, multiply));
console.log(consume('Jacob', 'Ryans', greeting));

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
// nestedFunction is invoked on the same line that internal is declared on. Because of this, you can access it
// from within the nestedFunction scope.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();