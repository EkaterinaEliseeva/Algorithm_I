export function reverseWords(s: string): string {
  let indexStart = 0;
  let resultStr = '';

  for (let i = 0; i <= s.length - 1; i++) {
    if (s[i] === ' ') {
      resultStr += reverseWord(s, indexStart, i - 1) + ' ';
      indexStart = i + 1;
    }

    if (i === s.length - 1) {
      resultStr += reverseWord(s, indexStart, i);
    }
  }

  return resultStr;
}

function reverseWord(s: string, indexStart: number, indexEnd: number) {
  let reverseStr = '';

  for (let i = indexEnd; i >= indexStart; i--) {
    reverseStr += s[i];
  }

  console.log(reverseStr);

  return reverseStr;
}
