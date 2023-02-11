import { rotate } from './index';

const array = [1, 2, 3, 4, 5, 6, 7];

rotate(array, 3);

console.log(JSON.stringify(array) === JSON.stringify([5, 6, 7, 1, 2, 3, 4]));
