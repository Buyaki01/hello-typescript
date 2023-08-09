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
  // [key: string]: string | number | number[] | undefined //undefined because we have classes as optional
  name: string
  GPA: number,
  classes?: number[]
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200]
}

// console.log(student.test) // TypeScript will not have an isse with this because of the index signature, it will return undefined because property test does not exist
// console.log(student.test) //Results in an error if you don't include the time signature: [key: string]: string | number | number[] | undefined because property test does not exist on type 'Student'

for (const key in student) {
  //key as keyof Student: creates a union type, union type can be string, number, boolean etc and it allows us to still loop through the object  
  console.log(`${key}: ${student[key as keyof Student]}`) // key as keyof Student, It's you telling TypeScript, "I'm confident that key is a valid property name that exists in the Student object."
}

Object.keys(student).map(key => {
  // We are using small letter student NOT Student
  console.log(student[key as keyof typeof student]) //use typeof in a case where you don't know the type of the object student
})

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'GPA') //Output: Student GPA: 3.5

// interface Incomes {
//  [key: 'salary']: number //Will result in an error because an index signature parameter type cannot be a literal type or generic type
// }

type Streams = 'salary' | 'bonus' | 'sidehustle' //string literals

// One drawback of using a Record Utility Type is that, one is unable to declare specifically the data type of a specific key, with Streams below it means that all of the keys will be either numbers or string, whereas you might wanted something like key Pizza to be specifically a string and not a number
type Incomes = Record<Streams, number | string> //whenever we want to use a string literal we can use Record utility type

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250
}

// Checking whether we can loop through Record Utility Type
for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes])
}
