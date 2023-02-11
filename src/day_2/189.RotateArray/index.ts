/**
 Do not return anything, modify nums in-place instead.
 */

export const rotate = (nums: number[], k: number): void => {
  const deleted = nums.splice(nums.length - (k % nums.length));

  nums.unshift(...deleted);
};
