/**
 Do not return anything, modify s in-place instead.
 */
export function reverseString(s: string[]): void {
  for (let i = 0; i < Math.ceil(s.length / 2); i++) {
    const item = s[s.length - 1 - i];
    s[s.length - 1 - i] = s[i];
    s[i] = item;
  }
}
