export function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let right = 0;
  let str = '';
  let longest = 0;

  while (s.length && right <= s.length - 1) {
    if (!contains(str, s[right])) {
      str += s[right];

      if (longest < str.length) {
        longest = str.length;
      }

      right++;
    } else {
      str = str.slice(1);
      left++;
    }
  }

  return longest;
}

const contains = (str: string, symbol: string) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === symbol) {
      return true;
    }
  }

  return false;
};
