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
