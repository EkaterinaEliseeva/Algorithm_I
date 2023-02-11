import { moveZeroes } from './index';

const array = [0, 0, 0, 1, 2, 5, 6, 3];

moveZeroes(array);

console.log(JSON.stringify(array) === JSON.stringify([1, 2, 5, 6, 3, 0, 0, 0]));
