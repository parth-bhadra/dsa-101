class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1]
        this.length--
        return lastItem;
    }

    delete(index) {
        const deletedItem = this.data[index];
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1];
        this.length--;
        return deletedItem;
    }
}

const newArray = new MyArray();


newArray.push('Hi');
newArray.push('you');
newArray.push('are not');
console.log(newArray.delete(2));
newArray.push('are');
newArray.push('nice');
console.log(newArray);

