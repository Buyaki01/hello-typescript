let myName: string = 'Dave'

let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName ='John'
meaningOfLife = 42
isLoading = true
album = 5150

const sum = (a: number, b: number) => {
  return a + b
}

let postID: string | number
let isActive: number | boolean | string

let re: RegExp = /\w+/g

let stringArr = ['one', 'hey', 'Dave']

let guitars = ['strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

let test = []
let bands: string[] = []

bands.push("Van Halen")

//Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true]

let mixed = ['John', 1, false]

mixed = myTuple

myTuple[1] = 42

//Objects
let myObj: object
myObj =[]
myObj = bands
myObj = {}

const exampleObj = {
  prop1: 'Dave',
  prop2: true,
}

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

interface Pionist {
  name: string,
  active?: boolean,
  albums: (string | number)[]
}

let eh: Pionist = {
  name: 'Piano', 
  albums: [1984, 5150, 'OU812']
}

const greetPionist = (pionist: Pionist) => {
  return `Hello ${pionist.name}!`
}

console.log(greetPionist(eh))

interface Violinist {
  name?: string,
  active: boolean,
  albums: (string | number)[]
}

let violin: Violinist = {
  active: true,
  albums: [1984, 5150, 'OU812']
}

const greetViolinist = (violinst: Violinist) => {
  if(violinst.name){
    return `Hello ${violinst.name.toUpperCase()}!`
  }
  return "Hello!"
}

console.log(greetViolinist(violin))

enum Grade{
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U) //starts from zero but in case you want it to start from 1, state U = 1