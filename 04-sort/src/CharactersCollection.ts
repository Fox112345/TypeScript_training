import {Sorter} from "./Sorter";

export class CharactersCollection extends Sorter {
    constructor(public data: string){
        super();
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return (
            this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase()
        )
    }

    swap(leftIndex: number, rightIndex: number): void {
        const charactersData = this.data.split('');

        const leftHand = charactersData[leftIndex];
        charactersData[leftIndex] = this.data[rightIndex];
        charactersData[rightIndex] = leftHand;

        this.data = charactersData.join('')
    }

    get length(): number {
        return this.data.length
    }
}