export function updateMatrix(mat: number[][]): number[][] {
  const max = mat.length * mat[0].length;
  const res = Array.from({ length: mat.length }).map(_ => Array.from({ length: mat[0].length }).map(_ => max));

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] == 0) {
        res[i][j] = 0;
      } else {
        if (i > 0) {
          res[i][j] = Math.min(res[i][j], res[i - 1][j] + 1);
        }

        if (j > 0) {
          res[i][j] = Math.min(res[i][j], res[i][j - 1] + 1);
        }
      }
    }
  }

  for (let i = mat.length - 1; i >= 0; i--) {
    for (let j = mat[0].length - 1; j >= 0; j--) {
      if (i < mat.length - 1) {
        res[i][j] = Math.min(res[i][j], res[i + 1][j] + 1);
      }

      if (j < mat[0].length - 1) {
        res[i][j] = Math.min(res[i][j], res[i][j + 1] + 1);
      }
    }
  }

  return res;
}
