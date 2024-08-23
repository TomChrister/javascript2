class FootballTeams {

    id;
    players;
    number;

    constructor(id, players, number) {
        this.id = id;
        this.players = players;
        this.number = number;
    }

    fieldPosition() {
        console.log('Striker');
    }

    age() {
        console.log('30');
    }
}


// Child 1
class Chelsea extends FootballTeams {
    constructor(id, players, number) {
        super(id, players, number);
        this.playerPosition = 'Midfielder';
        this.playerAge = '42';
    }

    fieldPosition() {
        console.log(this.fieldPosition);
    }

    age(){
        console.log(this.age);
    }
}

const Lampard = new Chelsea(1, 'Lampard', '8');
Lampard.age();
Lampard.fieldPosition();
console.log(Lampard);

const Drogba = new Chelsea('Drogba', 'Forward', '11');
console.log(Drogba);


// Child 2
class United extends FootballTeams {
    constructor(id, players, number) {
        super(id, players, number);
        this.playerAge = '29';
        this.playerPosition = 'Striker';
    }

    fieldPosition(){
        console.log(this.playerPosition);
    }

    age(){
        console.log(this.playerAge);
    }
}

const Ronaldo = new United(1, 'Ronaldo', '7');
Ronaldo.age();
Ronaldo.fieldPosition();



// Lesson task
class Animal {
    #name;
    #sound;

    constructor(name, sound) {
        this.#name = name;
        this.#sound = sound;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }

    getSound() {
        return this.#sound;
    }

    setSound(sound) {
        this.#sound = sound;
    }

    makeSound() {
        console.log(`${this.#name} makes sound ${this.#sound}`);
    }
}

// Instantiate an Animal object
const animalObject = new Animal('Dog', 'Woof');
console.log(animalObject.getName());
animalObject.makeSound();

const animalObject2 = new Animal('Cat', 'Meow');
console.log(animalObject2.getSound());

animalObject.setName('Cat');
animalObject.setSound('Meow');
console.log(animalObject.getName());
animalObject.makeSound();


