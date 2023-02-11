import { orangesRotting } from './index';

console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]) === -1
);

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]) === 4
);
