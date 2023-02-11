import { sortedSquares } from './index';

console.log(JSON.stringify(sortedSquares([-4, -1, 0, 3, 10])) === JSON.stringify([0, 1, 9, 16, 100]));
console.log(JSON.stringify(sortedSquares([-7, -3, 2, 3, 11])) === JSON.stringify([4, 9, 9, 49, 121]));
