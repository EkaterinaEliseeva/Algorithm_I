import { updateMatrix } from './index';

console.log(
  JSON.stringify(
    updateMatrix([
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ])
  ) ===
    JSON.stringify([
      [0, 0, 0],
      [0, 1, 0],
      [1, 2, 1],
    ])
);
