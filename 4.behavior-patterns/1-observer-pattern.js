// Observer Pattern 

// Is one where we maintain a list of objects based on 
// events, an is typically done with updating data based 
// on these events.

// It is implemented for example, with the subscribe methods 
// in MeteorJS

class Car {
    constructor(gas) {
        this.gas = gas;
    }

    setGasLevel(val) {
        this.gas = val;
        this.notifyAll();
    }

    register(observer) {
        this.actions.push(observer);
    }

    unregister(observer) {
        this.actions.remove.filter(function(el) {
            return el !== observer;
        });
    }

    notifyAll() {
        return this.actions.forEach(function(el) {
            el.update(this);
        }.bind(this));
    }
}

class consumption {
    update(car) {
        car.gas = car.gas + 1;
    }
}
