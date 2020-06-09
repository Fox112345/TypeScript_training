const apple: number = 5; 
const speed: string = 'fast';

let nothing: null = null;

// obj
let now: Date = new Date();

// arr
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3]

//classes
class Car{

}

let car: Car = new Car()

// Obj literal
let point: {x: number; y: number} = {
    x: 10,
    y: 20
}


// func
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
    
}



// When to use annotation
// 1) Func thst return the 'any' type
const json ='{"x": 10, "y": 20}'
const coords: {x: number; y: number} = JSON.parse(json);
console.log(coords);

// 2) Declare on one line and init it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i=0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// 3) Var whose type cant be inferred correctly
let numberss = [-10, -2, 3];
let numberAboveZero: boolean | number = false;

for (let i=0; i < numberss.length; i++) {
    if (numberss[i] > 0) {
        numberAboveZero = numberss[i];
    }
}

