export const moveZeroes = function (nums: number[]) {
  let left = 0;
  let right = 1;

  while (right < nums.length) {
    if (nums[left] === 0 && nums[right] !== 0) {
      nums[left] = nums[right];
      nums[right] = 0;
      left++;
    }
    if (nums[left] !== 0) {
      left++;
    }
    right++;
  }
};
