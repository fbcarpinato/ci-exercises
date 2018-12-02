/**
 * @param {number} integer
 */
export function reverseInteger(number) {
  let reversedNumber = number.toString();
  const numberSign = Math.sign(number);
  reversedNumber = +reversedNumber
    .split('')
    .reverse()
    .join('')
    .substring(0, reversedNumber.length + numberSign);
  return reversedNumber * numberSign;
}
