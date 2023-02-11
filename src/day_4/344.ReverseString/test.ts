import { reverseString } from './index';

const array = ['h', 'e', 'l', 'l', 'o'];

reverseString(array);

console.log(JSON.stringify(array) === JSON.stringify(['o', 'l', 'l', 'e', 'h']));
