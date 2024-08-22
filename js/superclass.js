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
}

class Chelsea extends FootballTeams {
    constructor(id, players, number) {
        super(id, players, number);
    }

    fieldPosition() {
        console.log('Winger');
    }

    age(){
        console.log('30');
    }
}

const Lampard = new Chelsea(1, 'Lampard', '8');
const Essien = new Chelsea(2, 'Essien', '5');
const Drogba = new Chelsea(3, 'Drogba', '11');

Essien.age();
Lampard.fieldPosition();

console.log(Lampard);
console.log(Essien);
console.log(Drogba);


class Arsenal extends FootballTeams {
    constructor(id, players, number) {
        super(id, players, number);
    }
}

const Henry = new Arsenal(1, 'Henry', '14');
const Viera = new Arsenal(2, 'Viera', '4');
const Gallas = new Arsenal(3, 'Gallas', '5');
console.log(Henry);
console.log(Viera);
console.log(Gallas);

