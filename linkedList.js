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
        let currentNode = this.head;
        for (let i = 0; i < index-1; i++){
            currentNode =  currentNode.next;
        }
        const leaderNode = currentNode;
        const holdingPointer = leaderNode.next;
        leaderNode.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
    }
    remove(index){
        
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(7);
myLinkedList.insert(2, 99);
myLinkedList.insert(2, 179);

console.log(myLinkedList);