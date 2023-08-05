"use strict";
class Coder {
    constructor(name, music, age, //Private: can only be accessed inside of this class
    lang = 'Typescript' //protected: can be accessed inside of the class but it could also be accessed inside of derived classes
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave.getAge()); //while we can access a method that accesses the age value inside of the class, we can't access those properties directly outside of the class
console.log(Dave.age); //age is private and only accessible within class 'Coder'
console.log(Dave.lang); //lang is protected and only accessible within class 'Coder' and its subclasses
