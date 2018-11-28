/**
 * @param {string} string
 * @returns {string}
 */
export function reverseString(string) {
  let reversed = '';

  for (const character of string) {
    reversed = character + reversed;
  }

  return reversed;
}
