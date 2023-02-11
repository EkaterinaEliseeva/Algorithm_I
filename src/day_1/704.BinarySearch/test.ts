import { index } from './index';
export const testBinarySearch = () => {
  console.log(index([-1, 0, 3, 5, 9, 12], 9) === 4);

  console.log(index([-1, 0, 3, 5, 9, 12], 2) === -1);

  console.log(index([5], 5) === 0);
};
