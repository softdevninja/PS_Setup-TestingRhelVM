/**
 * Purpose: Testing out javascript files on Rhel VM by calling a couple of functions from calculator.js
 */
const { add, subtract } = require('./calculator.js');

console.log("Hello World");

console.log(add(5, 10));
console.log(subtract(10, 5));