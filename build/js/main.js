"use strict";
// Index Signatures
// They are useful when you are creating an object but you don't know the exact names of the object keys but you do know the shape of the object and you can declare the type of the keys and the types of the values
// TypeScript requires an index signature if you attempt to access an object property dynamically 
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dave: 42 // Added Dave which was not a key in the TransactionObj because of the index signature: [index: string]: number
};
console.log(todaysTransactions.Pizza); //Output -10
console.log(todaysTransactions['Pizza']); //Output -10
const transactionsOfToday = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
// transactionsOfToday.pizza = 40 // result into an error because TransactionObject only permits reading
let prop = 'Pizza';
console.log(transactionsOfToday[prop]);
const todaysNetIncome = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNetIncome(transactionsOfToday));
//TypeScript has no problem with it because it has no way to know what names we would give the keys because our interface just says it's going to be and an [index: string]: number
// Thus Index Signature is not entirely safe as this does open up the possibility for you to try to access a key that does not exist on an object
console.log(transactionsOfToday['Dave']); //Typescript does not give us an error message yet property Dave does not exist, it's going to return undefined because it doesn't exist on the object
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test) // TypeScript will not have an isse with this because of the index signature, it will return undefined because property test does not exist
// console.log(student.test) //Results in an error if you don't include the time signature: [key: string]: string | number | number[] | undefined because property test does not exist on type 'Student'
