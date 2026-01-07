/**
 * @fileoverview Testing out javascript files on Rhel VM by creating a Calulator class and calling it in index.js
 * @author Doug Zuniga <doug.biz@outlook.com>
 * @version 1.0.0
 * @license N/A
 */

/**
 * Add function: Takes a & b as a parameters and adds them together prior to returning the results.
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function add(a, b) {
    return a + b;
}

/**
 * Add function: Takes a & b as a parameters and subtracts them together prior to returning the results.
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function subtract(a, b) {
    return a - b
}

// Allows functions to be accessible outside of file.
module.exports = {
    add,
    subtract
}
