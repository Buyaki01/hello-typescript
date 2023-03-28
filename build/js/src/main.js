"use strict";
let myName = 'Dave';
let meaningOfLife;
let isLoading;
let album;
myName = 'John';
meaningOfLife = 42;
isLoading = true;
album = 5150;
const sum = (a, b) => {
    return a + b;
};
let postID;
let isActive;
let re = /\w+/g;
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
let test = [];
let bands = [];
bands.push("Van Halen");
//Tuple
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
mixed = myTuple;
myTuple[1] = 42;
//Objects
let myObj;
myObj = [];
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true,
};
exampleObj.prop1 = 'John';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
evh = jp;
let eh = {
    name: 'Piano',
    albums: [1984, 5150, 'OU812']
};
const greetPionist = (pionist) => {
    return `Hello ${pionist.name}!`;
};
console.log(greetPionist(eh));
let violin = {
    active: true,
    albums: [1984, 5150, 'OU812']
};
const greetViolinist = (violinst) => {
    if (violinst.name) {
        return `Hello ${violinst.name.toUpperCase()}!`;
    }
    return "Hello!";
};
console.log(greetViolinist(violin));
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U); //starts from zero but in case you want it to start from 1, state U = 1
//Literal Types
let yourName;
let userName;
userName = "Amy";
//Functions
const add = (a, b) => {
    return a + b;
};
//Function that does not have a return, has a void type
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
logMsg(add('c', 5));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
//Optional Parameters - they need to come last in the list
const addAll = (a, b, c) => {
    return a + b + c;
};
const addEveryThing = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
