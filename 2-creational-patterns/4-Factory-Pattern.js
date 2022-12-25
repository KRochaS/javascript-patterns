// Creational Patterns 

// What is a creational pattern in Javascript?

// Control the creating process of an object
// Applicable to many languages
// Patterns explored - classes, constructor, singleton, factory, and abstract factory


/// Factory Pattern

// To create a mechanism to create other objects
// Example: a factory for creating cars.
// handle most of your classes an then simply use
// this factory method to create your new objects

class Car {
    constructor(doors, engine, color) {
            this.doors = doors;
            this.engine = engine;
            this.color = color;
    }
}

class carFactory {
    createCar(type) {
        switch(type) {
            case 'civic':
                return new Car(4, 'V6', 'gray');
            case 'honda':
                return new Car(2, 'V8', 'red')
        }
    }
}

const factory = new carFactory();
const myHonda = factory.createCar('honda');
const myCivic = factory.createCar('civic');


// It creates anything we want based on the type
// that we're passing

// Example using User, the types of user that you want to create
// admin, customer, etc.

