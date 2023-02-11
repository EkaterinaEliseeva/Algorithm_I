export function checkInclusion(s1: string, s2: string): boolean {
  let start = 0;
  let end = s1.length - 1;

  while (end <= s2.length - 1) {
    if (isPermutation(s1, s2, start, end)) {
      return true;
    }

    start++;
    end = start + s1.length - 1;
  }

  return false;
}

const isPermutation = (s1: string, s2: string, start: number, end: number) => {
  const letters = {};

  for (let i = 0; i < s1.length; i++) {
    if (!letters[s1[i]]) {
      letters[s1[i]] = 1;
    } else {
      letters[s1[i]]++;
    }
  }

  for (let i = start; i <= end; i++) {
    if (letters[s2[i]]) {
      letters[s2[i]]--;
    }
  }

  let is = true;

  for (const key in letters) {
    if (letters[key]) {
      is = false;
    }
  }

  return is;
};
