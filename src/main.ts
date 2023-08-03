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
