// Flyweight Pattern

// The flyweight pattern is a method to minimize recreating
// the same items twice, and thefore minimize 
// the memory impact on your systems.

// the flyweight patten uses a similar approach
// to the singleton.
// Create a new instance and preventing the 
// creating of more items into the memory of our 
// browsers.


let instance = null;

class Car {
    constructor(doors, engine, color) {
        if(!instance) {
            this.doors = doors;
            this.engine = engine;
            this.color = color;
            instance = this;
        } else {
            return instance
        }
    }
}


const civic = new Car(4, 'V6', 'gray');
const honda = new Car(2, 'V8', 'red')


console.log(civic);
console.log(honda);
