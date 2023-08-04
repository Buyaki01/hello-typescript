type One = string
type Two = string | number
type Three = 'hello'

// Type assertions allow you to tell the TypeScript compiler that you know more about the type of a variable than it does
// You are basically overruling TypeScript
// You can use either angle brackets or the as keyword for type assertions
//convert to more or less specific
let a: One = 'hello'
let b = a as Two // less specific
console.log(b)
let c = a as Three // more specific

let d = <One>'World'
console.log(d)
let e = <string | number>'World' // when working with React, using type assertions like this is not a common practice

// Use assertions for narrowing
const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if (c === 'add') return a + b
  return '' + a + b
}

// let myVal: string = addOrConcat(2, 2, 'concat') //Will result in an error because myVal is a string and yet addOrConcat is a union of number | string
let myVal: string = addOrConcat(2, 2, 'concat') as string

// Be careful Ts sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number

//Double casting and the unknown type
// 10 as string // Will result into an error and TypeScript recommends, if you are intentional about what you are doing, convert the expression to unknown first

(10 as unknown) as string //double assertions, double casting

// The DOM
// const img = document.querySelector('img') // Infers that it is: HTMLImageElement | null
// img.src // Result in an error because img is possibly null

const img = document.querySelector('img') as HTMLImageElement
img.src

const mymg = document.querySelector('#img') // TS infers that mymg is Element | null, not so specific, it just infers element

// const myImg = document.getElementById('#img') // TS infers that myImg is HTMLElement | null, at least more specific
// myImg.src // Will result in an error because myImg could be null

// const myImg = document.getElementById('#img')! // The ! at the end of the statement is a non-null assertions
// myImg.src //there will be no error on myImg after adding the ! mark. There will be an error on the .src because myImg is an HTMLElement and .src does not exist on type HTMElement

// const myImg = document.getElementById('#img')! as HTMLImageElement // We can now remove the !, non-null assertion
// myImg.src // You don't need to use both the !, the non-null assertion and the as HTMLImageElement

const myImg = document.getElementById('#img') as HTMLImageElement // We can now remove the !, non-null assertion
const nextImg = <HTMLImageElement>document.getElementById('#img') // Though this way will not work in tsx files for React
myImg.src

