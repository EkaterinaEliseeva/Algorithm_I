export function orangesRotting(grid: number[][]): number {
  let freshCount = 0;
  let minutes = 0;
  let index = 2;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        freshCount++;
      }
    }
  }

  while (freshCount > 0) {
    let adjacent = false;

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === index) {
          if (i > 0 && grid[i - 1][j] === 1) {
            grid[i - 1][j] = index + 1;
            freshCount--;
            adjacent = true;
          }

          if (i < grid.length - 1 && grid[i + 1][j] === 1) {
            grid[i + 1][j] = index + 1;
            freshCount--;
            adjacent = true;
          }

          if (j > 0 && grid[i][j - 1] === 1) {
            grid[i][j - 1] = index + 1;
            freshCount--;
            adjacent = true;
          }

          if (j < grid[0].length - 1 && grid[i][j + 1] === 1) {
            grid[i][j + 1] = index + 1;
            freshCount--;
            adjacent = true;
          }

          grid[i][j] = -1;
        }
      }
    }

    if (adjacent) {
      minutes++;
      index++;
    } else {
      break;
    }
  }

  return freshCount > 0 ? -1 : minutes;
}
