/**
 * @param {number} steps
 * @returns {string}
 */
export function steps(steps) {
  let currentStep = 1;

  while(currentStep <= steps) {
    console.log(
      (new Array(steps))
        .fill('#')
        .map((_, step) => step + 1 <= currentStep ? '#' : ' ')
        .join('')
    )

    currentStep = currentStep + 1;
  }
}
