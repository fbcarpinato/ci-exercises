import { palindrone } from './palindrome';

describe('palindrone', () => {
  it('expects palindrone to be a function', () => {
    expect(palindrone).toBeInstanceOf(Function);
  });

  it('should return true for abba', () => {
    expect(palindrone('abba')).toBe(true);
  });

  it('should return false for abbaasdasdsa', () => {
    expect(palindrone('abbaasdasdsa')).toBe(false);
  });
});
