"use strict";
// Type assertions allow you to tell the TypeScript compiler that you know more about the type of a variable than it does
// You are basically overruling TypeScript
// You can use either angle brackets or the as keyword for type assertions
//convert to more or less specific
let a = 'hello';
let b = a; // less specific
console.log(b);
let c = a; // more specific
let d = 'World';
console.log(d);
let e = 'World'; // when working with React, using type assertions like this is not a common practice
// Use assertions for narrowing
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
// let myVal: string = addOrConcat(2, 2, 'concat') //Will result in an error because myVal is a string and yet addOrConcat is a union of number | string
let myVal = addOrConcat(2, 2, 'concat');
// Be careful Ts sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
//Double casting and the unknown type
// 10 as string // Will result into an error and TypeScript recommends, if you are intentional about what you are doing, convert the expression to unknown first
10; //double assertions, double casting
// The DOM
// const img = document.querySelector('img') // Infers that it is: HTMLImageElement | null
// img.src // Result in an error because img is possibly null
const img = document.querySelector('img');
img.src;
const mymg = document.querySelector('#img'); // TS infers that mymg is Element | null, not so specific, it just infers element
// const myImg = document.getElementById('#img') // TS infers that myImg is HTMLElement | null, at least more specific
// myImg.src // Will result in an error because myImg could be null
const myImg = document.getElementById('#img');
myImg.src;
