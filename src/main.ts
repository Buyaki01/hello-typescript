class Coder {

  secondLang!: string

  constructor(
    public readonly name: string, 
    public music: string, 
    private age: number, //Private: can only be accessed inside of this class
    protected lang: string = 'Typescript' //protected: can be accessed inside of the class but it could also be accessed inside of derived classes
  ) {
    this.name = name
    this.music = music
    this.age = age
    this.lang = lang
  }

  public getAge() {
    return `Hello, I'm ${this.age}`
  }
}

const Dave = new Coder('Dave', 'Rock', 42)
console.log(Dave.getAge()) //while we can access a method that accesses the age value inside of the class, we can't access those properties directly outside of the class
// console.log(Dave.age) //age is private and only accessible within class 'Coder'
// console.log(Dave.lang) //lang is protected and only accessible within class 'Coder' and its subclasses

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age)
    this.computer = computer
  }

  public getLang() {
    return `I write ${this.lang}`
  }
}

const Ritta = new WebDev('Mac', 'Ritta', 'soft music', 27)
console.log(Ritta.getLang())
// console.log(Ritta.age)
// console.log(Ritta.lang)

interface Musician {
  name: string,
  instrument: string,
  play(action: string): string
}

class Guitarist implements Musician {
  name: string
  instrument: string

  constructor(name: string, instrument: string) {
    this.name = name
    this.instrument = instrument
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`
  }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'))

class Peeps {
  // static applies directly to the class and not to any specific object that you instantiate with the class
  static count: number = 0 //static means count does not apply to any instantiation of the class it applies to the class directly itself.
  // we'll be keeping track of count in the class not in any one instance of the class 
  static getCount(): number {
    return Peeps.count // notice here we don't use the keyword this, we refer to the class itself, Peeps.count
  }

  public id:number

  constructor(public name:string) {
    this.name = name
    this.id = ++Peeps.count
  }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Amy.id)
console.log(Steve.id)
console.log(John.id)
console.log(Peeps.count)
