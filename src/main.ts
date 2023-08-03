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