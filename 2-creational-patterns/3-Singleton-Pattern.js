// Creational Patterns 

// What is a creational pattern in Javascript?

// Control the creating process of an object
// Applicable to many languages
// Patterns explored - classes, constructor, singleton, factory, and abstract factory


// Singleton Pattern

// Check for instance of that class car and if there's already one
// then just return the instance that we have.
// Otherwise, you can go ahead and create a new one.

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
