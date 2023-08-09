"use strict";
// const stringEcho = (arg: string): string => arg //This only accepts data type of string
const echo = (arg) => arg; // works with any type we would pass into this function
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null); //null and array also returns type of object
};
console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'John' }));
console.log(isObj(null));
