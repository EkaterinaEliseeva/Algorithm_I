export const searchInsert = (nums: number[], target: number): number => {
  let min = 0;
  let max = nums.length - 1;

  while (min <= max) {
    const mid = Math.floor(min + (max - min) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      if (mid === 0 || nums[mid - 1] < target) {
        return mid;
      }

      max = mid - 1;
    }

    if (nums[mid] < target) {
      if (mid + 1 === nums.length || nums[mid + 1] > target) {
        return mid + 1;
      }

      min = mid + 1;
    }
  }

  return min;
};
