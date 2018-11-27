import { reverseString } from './string-reverse';

describe('reverseString', () => {
  it('expects reverseString to be a function', () => {
    expect(reverseString).toBeInstanceOf(Function);
  });
});
