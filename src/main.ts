let stringArr = ['one', 'hey', 'Dave'] // string[]

let guitars = ['Strat', 'Les Paul', 5150] // (string | number)[]

let mixedData = ['EVH', 1984, true] // (string | number | boolean)[]

stringArr[0] = 'Ritta'
// stringArr.push(42) //Will result in an error because Argument of type Number is not assignable to parameter of type string
stringArr.push('hey')


guitars[0] = 1984 //There is no error even though we had string data in the first position of the array, as long as is string data or number data 
//Typescript has no problem with us switching around
// It is not locked into being only a string in position one and position two for example

guitars.unshift('Jim')
// guitars.unshift(true) //Will have an error because it is not of type string or number, it is Boolean

// stringArr = guitars // stringArr is only type string array, and guitars is of type string and number making the union not assignable
guitars = stringArr //This works because guitars array accepts both string and number Array

// guitars = mixedData // (string | number)[] is NOT assignable to (string | number | boolean)[]
mixedData = guitars 

let test = []
let bands: string[] = []
bands.push('Adawange')

// Tuple - used when you want to make array more strict in terms of order of data types
let myTuple: [string, number, boolean] = ['Dave', 42, true] // [string, number, boolean]

let mixed = ['John', 1, false] // (string | number | boolean)[]

mixed = myTuple
// myTuple = mixed // (string | number | boolean)[] is not assignable to [string, number, boolean]

// myTuple[3] = 4 //There is no 4th position in the array, myTuple only accepts 3
myTuple[1] = 42

// Objects
let myObj: object 
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
  prop1: 'Dave',
  prop2: true
}

// exampleObj.prop2 = 42 // Results into an error because prop2 is Boolean
exampleObj.prop2 = false
exampleObj.prop1 = 'John'

type Guitarist = {
  name: string,
  active: boolean,
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
  name: 'Jimmy',
  active: true,
  albums: ['I', 'II', 'IV']
}

evh = jp

type Drummer = {
  name: string,
  active?: boolean, //active is optional
  albums: (string | number)[]
}

interface Violinist { //use interface when defining something I would think of like a class & ofcourse you might have methods on a class
  name: string,
  active?: boolean, //active is optional
  albums: (string | number)[]
}

let zh: Drummer = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812']
}

let gh: Drummer = {
  name: 'Jimmy',
  albums: ['I', 'II', 'IV']
}

zh = gh

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name}!`
}

console.log(greetGuitarist(jp))