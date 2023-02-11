export const index = (nums: number[], target: number): number => {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);

    if (target > nums[middle]) {
      low = middle + 1;
    } else if (target < nums[middle]) {
      high = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};
