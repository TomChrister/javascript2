// why typescript

let num : number = 4;
let word : string = "five";

console.log(word, num);

function add (num1:number, num2:number) {
    return num1 + num2;
}

add(num, 9);



class Humans {
    id: number = 4;
    name: string;
    nickName: string;

    constructor(id:number, name: string, nickName: string) {
        this.id = id;
        this.name = name;
        this.nickName = nickName;
    }
}

const duck2 = new Humans(1, "Tom", "Marius")
console.log(duck2);



// Types
type Person = {
    name: string,
    age: number,
    isStudent: boolean
}

function createPerson(name: string, age: number, isStudent: boolean): Person {
    return {name, age, isStudent};
}

const person1 = createPerson("Marius", 30, true);
const person2 = createPerson("Tom", 29, true);
const person3 = createPerson("Dean", 40, false)

function greetPerson(person:Person): string {
    const studentStatus = person.isStudent ? "a student." : "not a student.";
    return `Hello ${person.name}! You are ${person.age} years old and you are ${studentStatus}`
}
console.log(greetPerson(person1));
console.log(greetPerson(person2));
console.log(greetPerson(person3));
