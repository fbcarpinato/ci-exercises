/**
 *
 * @param {string} string
 */
export function palindrone(string) {
  const halfStringLength = Math.round(string.length / 2);
  let isPalindrome = true;
  for (let i = 0; i < halfStringLength; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}
