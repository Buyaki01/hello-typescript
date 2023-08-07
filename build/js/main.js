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
// console.log(Dave.age) //age is private and only accessible within class 'Coder'
// console.log(Dave.lang) //lang is protected and only accessible within class 'Coder' and its subclasses
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Ritta = new WebDev('Mac', 'Ritta', 'soft music', 27);
console.log(Ritta.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
class Peeps {
    // we'll be keeping track of count in the class not in any one instance of the class 
    static getCount() {
        return Peeps.count; // notice here we don't use the keyword this, we refer to the class itself, Peeps.count
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
// static applies directly to the class and not to any specific object that you instantiate with the class
Peeps.count = 0; //static means count does not apply to any instantiation of the class it applies to the class directly itself.
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Amy.id);
console.log(Steve.id);
console.log(John.id);
console.log(Peeps.count);
// Getters and Setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Agape Gospel', 'Adawange'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'Timiza'];
console.log(MyBands.data);
MyBands.data = ['Uwezo'];
