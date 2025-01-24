class DynamicArray {
    constructor() {
        this.data = new Array(5);
        this.nextIndex = 0;
        this.capacity = 5;
    }
    static copy(dynamicArray) {
        const newArray = new DynamicArray();
        newArray.data = [...dynamicArray.data];
        newArray.nextIndex = dynamicArray.nextIndex;
        newArray.capacity = dynamicArray.capacity;
        return newArray;
    }
    add(element) {
        if (this.nextIndex === this.capacity) {
            const newData = new Array(this.capacity * 2);
            for (let i = 0; i < this.capacity; i++) {
                newData[i] = this.data[i];
            }
            this.data = newData;
            this.capacity *= 2;
        }
        this.data[this.nextIndex] = element;
        this.nextIndex++;
    }
    addAt(index, element) {
        if (index < this.nextIndex) {
            this.data[index] = element;
        } else if (index === this.nextIndex) {
            this.add(element);
        }
    }
    get(index) {
        return index < this.nextIndex ? this.data[index] : -1;
    }
    print() {
        console.log(this.data.slice(0, this.nextIndex).join(" "));
    }
}

// Example usage
const d1 = new DynamicArray();
d1.add(10);
d1.add(20);
d1.add(30);
d1.add(40);
d1.add(50);
d1.add(60);

d1.print();

const d2 = DynamicArray.copy(d1); // Copy constructor
const d3 = DynamicArray.copy(d1); // Assignment simulation

d1.addAt(0, 100);

d2.print();
d3.print();
