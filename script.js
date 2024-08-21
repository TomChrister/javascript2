/*class Duck {
    // Declare private fields
    #id;
    #name;
    #temperament;

    constructor(id, name) {
        this.#id = id;
        this.#name = name;
        this.#temperament = "Temp is";
    }

    set temperament(value) {
        this.#temperament = value;
    }

    get temperament() {
        return this.#temperament; // Access private field with #
    }

    get id () {
        return this.#id; // Access private field with #
    }

    get name () {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    Quack (){
        console.log(`${this.name} is quacking`);
    }

    Hundred (){
        console.log(`${this.temperament} is hundred`);
    }
}

const duck1 = new Duck (1, "Tom");

const duck2 = new Duck (2, "Marius");

duck1.Quack();

duck2.Quack();

duck1.Hundred();

duck2.Hundred();*/



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
