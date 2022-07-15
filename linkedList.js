const { normalize } = require("path");

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index, value) {
        const newNode = new Node(value);
        // repeat this code index times
        // this inserts new node at index 1
        /* newNode.next = this.head.next;
        this.head.next = newNode;
        this.length++; */

        // how to add item at nth index, say 2
        /* newNode.next = this.head.next.next
        this.head.next.next = newNode;
        this.length++; */
        if (index === 0) {
            this.prepend(value);
        } else {
            let currentNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            const leaderNode = currentNode;
            const holdingPointer = leaderNode.next;
            leaderNode.next = newNode;
            newNode.next = holdingPointer;
            this.length++;
        }


    }
    remove(index) {
        let currentNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            currentNode = currentNode.next;
        }
        const leaderNode = currentNode;
        const holdingPointer = leaderNode.next;
        currentNode.next = holdingPointer.next;
        this.length--;
    }
}

const l1 = new LinkedList(9);
l1.append(5);
l1.append(6);

const l2 = new LinkedList(9);
l2.append(4);
// l2.append(5);

console.log(l1.printList());
console.log(l2.printList());

function addTwoNumbers(l1, l2) {

    // prepare the linked lists
    if (l1.length > l2.length) {
        let cnt = l1.length - l2.length;
        while (cnt) {
            l2.prepend(0);
            cnt--;
        }
    } else if (l2.length > l1.length) {
        let cnt = l2.length - l1.length;
        while (cnt) {
            l1.prepend(0);
            cnt--;
        }
    }

    function recursiveAddition(l1, l2) {
        // base case
        if (l1.head.next == null || l2.head.next == null) {
            let carry = 0;
            const x = l1 ? l1.head.value : 0;
            const y = l2 ? l2.head.value : 0;
            let sum = x + y;
            carry = Math.floor(sum / 10);
            const result = new LinkedList(sum % 10);
            return [result, carry];
        }

        //recursive case
        let carry = 0;
        const x = l1 ? l1.head.value : 0;
        const y = l2 ? l2.head.value : 0;
        l1.head = l1.head.next; l1.length --;
        l2.head = l2.head.next; l2.length --;
        const resultArray = recursiveAddition(l1, l2);
        let sum = x + y + resultArray[1];
        carry = Math.floor(sum / 10);
        resultArray[0].prepend(sum % 10);
        resultArray[0].printList();
        return [resultArray[0], carry];
    }

    return recursiveAddition(l1,l2);

}

const response = addTwoNumbers(l1,l2);
if(response[1]) {
    response[0].prepend(response[1]);
}
console.log(response[0].printList());

