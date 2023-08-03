//Type Aliases

type stringOrNumber = string | number

type stringorNumberArray = (string | number)[]

type Violinist = { 
  name: string,
  active: boolean,
  albums: stringorNumberArray
}

type userId = stringOrNumber

//interface postId = stringOrNumber //It will result into an error, you cannot do this with interfaces. 
// stringOrNumber only refers to a type, but is being used as a value here

// Literal Types/ Specific Assignment
let myName: 'Dave' //myName is of type Dave

// myName = 'Ritta' //Will result to an error, type Ritta is not assignable to type Dave

let userName: 'Dave' | 'Ritta' | 'Sweta'

userName = 'Ritta'

// functions
const add = (a:number,b:number): number => {
  return a + b
}

const logMsg = (message: any): void => { //function has nothing to return, therefore it has a void type of return data
  console.log(message)
}

logMsg('Hello!')
logMsg(add(2,3))
// logMsg(add('a',3)) //TypeScript will cause an error

let subtract = function(c: number, d: number): number {
  return c - d 
}

type mathFunction = (a: number, b: number) => number
interface mathsFunction{
  (a: number, b: number): number
}

let multiply: mathFunction = function (e,f) {
  return e * f
} 

logMsg(multiply(2,2))

// Optional Parameters
const addAll = (a: number, b: number, c?: number): number => {// if you have an optional parameter it has to be last in the list
  //a + b + c //if you leave it there, there will be an error on c, c is possibly undefined as its optional. Therefore need a type card
  if (typeof c !== 'undefined') {
    return a + b + c
  }
  return a + b
}

// Default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {// you cannot do type aliase with default values
  return a + b + c
}

logMsg(addAll(2,3,2))
logMsg(addAll(2,3))
logMsg(sumAll(2,3))
logMsg(sumAll(undefined, 3))

