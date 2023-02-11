export function sortedSquares(nums: number[]): number[] {
  const result = [];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const squareLeft = nums[left] * nums[left];
    const squareRight = nums[right] * nums[right];

    if (squareLeft > squareRight) {
      result.unshift(squareLeft);
      left++;
    } else {
      result.unshift(squareRight);
      right--;
    }
  }

  return result;
}
