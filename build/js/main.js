"use strict";
// Type assertions allow you to tell the TypeScript compiler that you know more about the type of a variable than it does
// You can use either angle brackets or the as keyword for type assertions
//convert to more or less specific
let a = 'hello';
let b = a; // less specific
console.log(b);
let c = a; // more specific
let d = 'World';
console.log(d);
let e = 'World'; // when working with React, using type assertions like this is not a common practice
