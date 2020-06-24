class ArryayOfNumbers {
    constructor(public collection: number[]) {
    }

    get(index: number): number{
        return this.collection[index]
    }
}
class ArryayOfStrinsg {
    constructor(public collection: string[]) {
    }

    get(index: number): string{
        return this.collection[index]
    }
}


class ArreyOfAnything<T> {
    constructor(public collection: T[]) {
    }
    get(index: number): T{
        return this.collection[index]
    }
}


const arr = new ArreyOfAnything(['a','d','v']);


// Generics this functions

function printString(arr: string[]):void {
    for (let i=0; i<arr.length; i++) {
        console.log(arr[i])
    }
}

function printNumber(arr: number[]):void  {
    for (let i=0; i<arr.length; i++) {
        console.log(arr[i])
    }
}

function printAnuthing<T>(arr: T[]): void {
    for (let i=0; i<arr.length; i++) {
        console.log(arr[i])
    }
}

printAnuthing<string>(['a','s','a']);

// Generic constrain

class Car {
    print(){
        console.log('Im a car')
    }
}

class House {
    print(){
        console.log('Im a House')
    }
}

interface Printable {
    print(): void;
}

function print<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}

print<House>([new House()])