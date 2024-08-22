class Duck {
    // fields / properties
    #id;
    #name;
    #temperament;
    #key = "Duck are great";
    static duckObserver = "Paul";

    // constructor
    constructor(id, name) {
        this.#id = id;
        this.#name = name;
        this.#temperament = "Uncertain";
    }

    // methods
    //#region getters and setters

    set temperament(value) {
        this.#temperament = value;
    }

    get temperament() {
        return this.#temperament;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    setName(value, secretKey) {
        if (this.#key === secretKey) {
            this.#name = value;
        } else {
            console.log("Access denied");
        }
    }

    //#endregion
    Quack() {
        console.log(`${this.#name} is totally quacking`);
        this.#SomeSecretOperation();
    }

    #SomeSecretOperation() {
        console.log("shh");
    }

    static MoveDucks() {
        console.log("Move that duck!!");
    }
}

class Calculator {
    static add(num1, num2) {
        return num1 + num2;
    }
}

Calculator.add(2, 6);


const duck2 = new Duck(2, "Maximus");

console.log(`${duck2.name}`)

class CodeGenerator {
    static generateCode() {}
}
CodeGenerator.generateCode();



class Mallard extends Duck {
    MallardMatingCall(){
        console.log('Quack')
    }
}

const mallardDuck = new Mallard();
console.log(mallardDuck);












// Person class example

class Person {

    #firstName;
    #lastName;

    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    introduce(){
        console.log(`Hello i am ${this.firstName} ${this.lastName}`);
    }

    get firstName(){
        return this.#firstName;
    }

    // Setter for firstName
    set firstName(value) {
        this.#firstName = value;
    }

    // Getter for lastName
    get lastName(){
        return this.#lastName;
    }

    // Setter for lastName
    set lastName(value) {
        this.#lastName = value;
    }
}

const person1 = new Person('Ola', 'Nordmann');

person1.firstName = 'Ola';
person1.lastName = 'Nordmann';

person1.introduce();
