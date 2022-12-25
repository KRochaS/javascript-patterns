// Creational Patterns 

// What is a creational pattern in Javascript?

// Control the creating process of an object
// Applicable to many languages
// Patterns explored - classes, constructor, singleton, factory, and abstract factory


// Constructor Pattern

class SUV extends Car {
    constructor(doors, engine, color) {
        super(doors, engine, color);
        this.wheels = 4;
    }
}

const cx5 = new SUV(4, "V8", 'red');

console.log(cx5);