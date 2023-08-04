type One = string
type Two = string | number
type Three = 'hello'

// Type assertions allow you to tell the TypeScript compiler that you know more about the type of a variable than it does
// You can use either angle brackets or the as keyword for type assertions
//convert to more or less specific
let a: One = 'hello'
let b = a as Two // less specific
console.log(b)
let c = a as Three // more specific

let d = <One>'World'
console.log(d)
let e = <string | number>'World' // when working with React, using type assertions like this is not a common practice


