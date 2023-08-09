// const stringEcho = (arg: string): string => arg //This only accepts data type of string
const echo = <T>(arg: T): T => arg // works with any type we would pass into this function

const isObj = <T>(arg: T): boolean => {
  return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null) //null and array also returns type of object
}

console.log(isObj(true))
console.log(isObj('John'))
console.log(isObj([1,2,3]))
console.log(isObj({ name: 'John' }))
console.log(isObj(null))

//Indication of when you need a generic: is when your function has to do some logic, some thinking about what it needs to return 

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {//!arg.length - checks if its not an empty array. Normally an empty array or object would be true
    return { arg, is: false }
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {// !Object.keys(arg as keyof T).length - Checking to ensure that the Object is not empty
    return { arg, is: false }
  }
  return { arg, is: !!arg } //use a double banger to return truthy or falsy, basically it checks to see whether !arg(like 0, false, null, undefined, or an empty string) is truthy or falsy and then the other exclamation mark means if it's falsy change it to truthy and vice versa
}

console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(true))
console.log(isTrue(1))
console.log(isTrue('Dave'))
console.log(isTrue(''))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue({}))
console.log(isTrue({ name: 'Dave' }))
console.log(isTrue([]))
console.log(isTrue([1,2,3]))
console.log(isTrue(NaN))
console.log(isTrue(-0))

interface BooleanCheck<T> {
  value: T,
  is: boolean
}

const checkBooleanValue = <T>(arg: T): BooleanCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false }
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false }
  }
  return { value: arg, is: !!arg }
}
