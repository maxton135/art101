/**
 * Author:    Maxton Lenox and Izetta Evans
 * Created:   5.2.2022
 * Assignment: Lab 8
 *
 **/

// Create variable of output div
var outputEl = document.getElementById("output");

// Create an array of numbers and assign it to a variable
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
outputEl.innerHTML += "The original array of numbers is: " + numbers + "<br /><br />";

// Log array for testing purposes
console.log("The original array of numbers is,", numbers);

// Create a function that will take a single parameter and do a calculation on it and return the Results
function squareNums(x) {
  return x*x;
}

// Test the function
console.log("5 squared is,", squareNums(5));
console.log("12 squared is,", squareNums(12));
console.log("34 squared is,", squareNums(34));

// Call the mapping function on array of numbers
var result = numbers.map(squareNums);

// Check if result is what it should be
console.log("Squareing original array becomes,", result);

outputEl.innerHTML += "The result of calling the map function with the squaring function is: " + result + "<br /><br />";

// Create new anonymous function as a callback with map that subtracts 10 from number
var result = numbers.map(function(x) {
  return x-10;
})

// Check result, should return [-9, -8, -7, -6, -5, -4, -3, -2, -1,  0]
console.log("Subtracting 10 results in,", result);

outputEl.innerHTML += "The result of calling the map function and the anon function that subtracts 10 from each number is: " + result;
