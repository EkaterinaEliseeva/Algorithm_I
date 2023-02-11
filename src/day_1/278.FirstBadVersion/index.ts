/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

export const firstBadVersion = function (isBadVersion: any) {
  return function (n: number): number {
    let minVersion = 1;
    let maxVersion = n;

    while (minVersion <= maxVersion) {
      const middle = Math.round(minVersion + (maxVersion - minVersion) / 2);
      const isBad = isBadVersion(middle);

      if (isBad) {
        maxVersion = middle - 1;
      } else {
        minVersion = middle + 1;
      }
    }

    return minVersion;
  };
};
