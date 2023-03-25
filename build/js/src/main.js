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
