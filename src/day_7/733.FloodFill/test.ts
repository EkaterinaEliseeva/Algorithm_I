import { floodFill } from './index';

console.log(
  JSON.stringify(
    floodFill(
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      2
    )
  ) ===
    JSON.stringify([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ])
);
