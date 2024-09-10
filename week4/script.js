class queue {
    #queueOfPeople = [];

    addToQueue(ticket) {
        // add to the end of the array
        this.#queueOfPeople[this.#queueOfPeople.length] = ticket;
    }

    nextInLine() {
        // move the queue forward
        let nextInLine = this.#queueOfPeople[0];

        this.#queueOfPeople[0] = this.#queueOfPeople[1]

        for (let i = 0; i < this.#queueOfPeople.length; i++) {
            this.#queueOfPeople[i] = this.#queueOfPeople[i+1];
        }

        // return first in line
        return nextInLine;
    }
}

const UDIqueue = new queue()

UDIqueue.addToQueue("A1")
UDIqueue.addToQueue("A2")
UDIqueue.addToQueue("A3")

class numberPair {
    #numb1
    #numb2

    constructor(numb1, numb2) {
        this.#numb1 = numb1;
        this.#numb2 = numb2;
    }
}

class linkedList {
    startNode = {
        value: 0,
        nextNode: {}
    }

    add(value){
        if (this.startNode.value === 0) {
            this.startNode.value = value;
        }

        const newNode = {
            previousNode: this.startNode,
            nodeValue:value,
            nextNode: {}
        }
    }


    remove() {

    }
}

const numberLinkedList = new linkedList()

numberLinkedList.add(5)
numberLinkedList.add(10)
numberLinkedList.add(3)


