"use strict";
// const stringEcho = (arg: string): string => arg //This only accepts data type of string
const echo = (arg) => arg; // works with any type we would pass into this function
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null); //null and array also returns type of object
};
console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'John' }));
console.log(isObj(null));
//Indication of when you need a generic: is when your function has to do some logic, some thinking about what it needs to return 
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) { //!arg.length - checks if its not an empty array. Normally an empty array or object would be true
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) { // !Object.keys(arg as keyof T).length - Checking to ensure that the Object is not empty
        return { arg, is: false };
    }
    return { arg, is: !!arg }; //use a double banger to return truthy or falsy, basically it checks to see whether !arg(like 0, false, null, undefined, or an empty string) is truthy or falsy and then the other exclamation mark means if it's falsy change it to truthy and vice versa
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Dave'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: 'Dave' }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBooleanValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: 'Dave' }));
// console.log(processUser({ name: 'Dave' })) // Result in an error. Argument of type '{ name: string; }' is not assignable to parameter of type 'HasID'. Object literal may only specify known properties, and 'name' does not exist in type 'HasID'
// (users: T[], key: K): This is the function's parameter list. It's expecting an array of users and a key
// : T[K][] =>: This part is the return type of the function. It's saying that the function will return an array of values of type T[K]. In simple terms, it means you're going to get an array of a specific property (key) from the list of users
// users.map(user => user[key]): Inside the function, it's using the .map function to go through each user in the users array. For each user, it's accessing the property defined by the key and creating a new array with those property values
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    }
];
console.log(getUsersProperty(usersArray, "email")); // Outputs: ['Sincere@april.biz', 'Shanna@melissa.tv']
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
// store.state = 12 // Results into an error because instantly after we assign John, TypeScript inferred that's the type of our state and it's not going to accept another type
const myState = new StateObject([15]);
myState.state = (['Dave', 42, true]);
console.log(myState.state);
