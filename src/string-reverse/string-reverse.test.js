import { reverseString } from './string-reverse';

describe('reverseString', () => {
  it('expects reverseString to be a function', () => {
    expect(reverseString).toBeInstanceOf(Function);
  });

  it('should return "dsa" when giving in "asd"', () => {
    expect(reverseString('asd')).toBe('dsa');
  });

  it('should return "otta" when givin in "atto"', () => {
    expect(reverseString('atto')).toBe('otta');
  });
});
