export function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      break;
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [left + 1, right + 1];
}