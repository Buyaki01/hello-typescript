// Index Signatures
// They are useful when you are creating an object but you don't know the exact names of the object keys but you do know the shape of the object and you can declare the type of the keys and the types of the values
// TypeScript requires an index signature if you attempt to access an object property dynamically 


interface TransactionObj { //This interface would allow other properties to be added to an object that was created with this interface, however this interface will also require Pizza, Books and Job
  readonly [index: string]: number,
  Pizza: number,
  Books: number,
  Job: number
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Dave: 42 // Added Dave which was not a key in the TransactionObj because of the index signature: [index: string]: number
}

console.log(todaysTransactions.Pizza)//Output -10
console.log(todaysTransactions['Pizza']) //Output -10

//The below code won't work because we are not using the index signature
// let prop: string = 'Pizza'
// console.log(todaysTransactions[prop])

// const todaysNet = (transactions: TransactionObj): number => {
//   let total = 0
//   for (const transaction in transactions) {
//     total += transactions[transaction]
//   }
//   return total
// }


// Implementing the index signature, when you don't know the name of the keys that you would want to use in an object
interface TransactionObject {
  readonly [index: string]: number
}

const transactionsOfToday: TransactionObject = {
  Pizza: -10,
  Books: -5,
  Job: 50
}

// transactionsOfToday.pizza = 40 // result into an error because TransactionObject only permits reading

let prop: string = 'Pizza'
console.log(transactionsOfToday[prop])

const todaysNetIncome = (transactions: TransactionObject): number => {
  let total = 0
  for (const transaction in transactions) {
    total += transactions[transaction]
  }
  return total
}

console.log(todaysNetIncome(transactionsOfToday))

//TypeScript has no problem with it because it has no way to know what names we would give the keys because our interface just says it's going to be and an [index: string]: number
// Thus Index Signature is not entirely safe as this does open up the possibility for you to try to access a key that does not exist on an object
console.log(transactionsOfToday['Dave']) //Typescript does not give us an error message yet property Dave does not exist, it's going to return undefined because it doesn't exist on the object

interface Student {
  name: string
  GPA: number,
  classes?: number[]
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200]
}

// console.log(student.test) //Results in an error because property test does not exist on type 'Student'
