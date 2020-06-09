import { Sorter } from "./Sorter";
import { NumbersCollectoin } from "./NumbersCollectoin";
import {LinkedList} from "./LinkedList";

const numbers = new NumbersCollectoin([10, 3, -5, 1000]);

const linkedList = new LinkedList();

linkedList.add(2);
linkedList.add(-19);
linkedList.add(342);
linkedList.add(8);

linkedList.print();
linkedList.sort();
linkedList.print()

numbers.sort()
console.log(numbers.data)