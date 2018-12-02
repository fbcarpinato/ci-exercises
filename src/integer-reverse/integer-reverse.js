/**
 * @param {number} integer
 */
export function reverseInteger(number) {
  return +number
    .toString()
    .split('')
    .reverse()
    .join('');
}
