/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */



 /********************************************************************
  *
  * Fourth problem: Sum of first 12 even Fibonacci numbers
  *
  ********************************************************************/
// first we get the HTML for the button
var getFibSum = document.getElementById("sumFib");

//then we set the event handler for when the button is clicked
getFibSum.onclick = function(){
               document.getElementById("sumFibResult").innerHTML = twelveEvenFibonacciSum();
 }

 /*
  *  twelveEvenFibonacciSum - calulates the sum of the first 12 even fibonacci numbers, with 0, 1 being the first two numbers of the sequence
  *
  *            @returns {integer} The sum of the first 12 even Fibonacci numbers
  */

function twelveEvenFibonacciSum(){
 /// WRITE YOUR CODE HERE

 //create Fibonacci array and declare variables
  fib = []; 
  fib [0] = 0;
  fib [1] = 1;
  var evens = 0;

//create for loop to iterate through Fibonacci numbers, include first 12 even numbers
  for (var i = 2; i<=33; i++){
    fib[i] = fib[i-2] + fib[i-1]; 
    console.log(fib[i]);
// assign array to a variable to use in equation
    var fibSequence = fib[i];
//find even numbers of array
      if (fibSequence % 2 == 0) { 
//add even numbers  
  var sumEvens = evens += fib[i];
}
}
return sumEvens;
}