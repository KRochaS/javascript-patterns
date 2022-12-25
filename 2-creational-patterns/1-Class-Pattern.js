// Creational Patterns 

// What is a creational pattern in Javascript?

// Control the creating process of an object
// Applicable to many languages
// Patterns explored - classes, constructor, singleton, factory, and abstract factory

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}


const civic = new Car(4, 'V6', 'gray');

console.log(civic);