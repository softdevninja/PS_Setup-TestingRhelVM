/**
 * @fileoverview Testing out javascript files on Rhel VM by calling a couple of functions from calculator.js
 * @author Doug Zuniga <doug.biz@outlook.com>
 * @version 1.0.0
 * @license N/A
 */

const { add, subtract } = require('./calculator.js');

console.log("Hello World");

console.log(add(5, 10));
console.log(subtract(10, 5));
