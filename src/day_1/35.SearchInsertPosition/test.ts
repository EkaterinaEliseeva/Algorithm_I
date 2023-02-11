import { searchInsert } from './index';

console.log(searchInsert([1, 3, 5, 6], 5) === 2);
console.log(searchInsert([1, 3, 5, 6], 2) === 1);
console.log(searchInsert([1, 3, 5, 6], 7) === 4);
