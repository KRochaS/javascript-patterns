// Strategy Pattern

// A way to encapsulate different algorithms or 
// functions and then at runtime practically use the same code
// o run different scenarios.
// and we've used this approach in some of the code we've written thus far.

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class SUV extends Car {
    constructor(doors, engine, color) {
        super(doors, engine, color);
        this.wheels = 4;
    }
}

// reusing the classes to create new cars 
const civic = new Car(4, 'V6', 'grey');
const cx5 = new SUV(4, "V8", 'red');

console.log(civic);
console.log(cx5);
