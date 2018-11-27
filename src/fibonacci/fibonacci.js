/**
 * Helper function that uses memoization for the fibonacci calculation
 *
 * @param {number} value
 * @param {Array<number>} memo
 */
function helper(value, memo) {
  if (value < 2) {
    return value;
  }

  if (memo[value]) {
    return memo[value];
  }

  memo[value] = helper(value - 2, memo) + helper(value - 1, memo);

  return memo[value];
}

/**
 * Calculates the fibonacci value for a given number
 *
 * @param {number} value
 */
export function fibonacci(value) {
  return helper(value, new Array(value));
}
