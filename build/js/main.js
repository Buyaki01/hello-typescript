"use strict";
//Type Aliases
//interface postId = stringOrNumber //It will result into an error, you cannot do this with interfaces. 
// stringOrNumber only refers to a type, but is being used as a value here
// Literal Types/ Specific Assignment
let myName; //myName is of type Dave
// myName = 'Ritta' //Will result to an error, type Ritta is not assignable to type Dave
let userName;
userName = 'Ritta';
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
// logMsg(add('a',3)) //TypeScript will cause an error
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (e, f) {
    return e * f;
};
logMsg(multiply(2, 2));
// Optional Parameters
const addAll = (a, b, c) => {
    //a + b + c //if you leave it there, there will be an error on c, c is possibly undefined as its optional. Therefore need a type card
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// Default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, currValue) => prev + currValue);
};
logMsg(total(1, 2, 3, 4));
const totalAmount = (a, ...nums) => {
    return a + nums.reduce((prev, currValue) => prev + currValue);
};
logMsg(totalAmount(10, 2, 3));
