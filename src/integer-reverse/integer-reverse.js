/**
 * @param {number} integer
 */
export function reverseInteger(number) {
  let reversedNumber = number.toString();
  const isNegative = reversedNumber.charAt(0) === '-';
  reversedNumber = reversedNumber
    .split('')
    .reverse()
    .join('');
  return +(isNegative
    ? '-' + reversedNumber.substring(0, reversedNumber.length - 1)
    : reversedNumber);
}
