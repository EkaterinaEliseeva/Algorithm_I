export function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const currColor = image[sr][sc];

  if (color !== currColor) {
    fill(image, sr, sc, color, currColor);
  }

  return image;
}

const fill = (image: number[][], sr: number, sc: number, color: number, currColor: number) => {
  if (image[sr][sc] === currColor) {
    image[sr][sc] = color;

    if (sr - 1 >= 0) {
      fill(image, sr - 1, sc, color, currColor);
    }

    if (sr + 1 < image.length) {
      fill(image, sr + 1, sc, color, currColor);
    }

    if (sc - 1 >= 0) {
      fill(image, sr, sc - 1, color, currColor);
    }

    if (sc + 1 < image[0].length) {
      fill(image, sr, sc + 1, color, currColor);
    }
  }
};
