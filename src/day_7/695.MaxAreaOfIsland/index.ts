export function maxAreaOfIsland(grid: number[][]): number {
  let largestIsland = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        const area = recursive(grid, i, j);

        if (area > largestIsland) {
          largestIsland = area;
        }
      }
    }
  }

  return largestIsland;
}

function recursive(grid: number[][], i: number, j: number) {
  let count = 0;

  if (grid[i][j] === 0) {
    return count;
  }

  if (grid[i][j] === 1) {
    grid[i][j] = 0;
    count++;
  }

  if (i > 0) {
    count += recursive(grid, i - 1, j);
  }

  if (i < grid.length - 1) {
    count += recursive(grid, i + 1, j);
  }

  if (j > 0) {
    count += recursive(grid, i, j - 1);
  }

  if (j < grid[0].length - 1) {
    count += recursive(grid, i, j + 1);
  }

  return count;
}
