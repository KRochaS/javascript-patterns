// What is a callback and its role?

// is a function that is called inside of another function
// in other words, whenever you pass a function in the arguments
// and run it inside the function you're doing the callback pattern

const calc = () => {
    return 4 * 4;
}

const printCalc = (callback) => {
    console.log(callback());
}

printCalc(calc);