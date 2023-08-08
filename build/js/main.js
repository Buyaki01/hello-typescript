"use strict";
// Index Signatures
// They are useful when you are creating an object but you don't know the exact names of the object keys but you do know the shape of the object and you can declare the type of the keys and the types of the values
// TypeScript requires an index signature if you attempt to access an object property dynamically 
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
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
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
