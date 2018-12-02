import { reverseInteger } from './integer-reverse';

describe('reverseInteger', () => {
  it('expects reverseInteger to be a function', () => {
    expect(reverseInteger).toBeInstanceOf(Function);
  });

  it('should return a integer', () => {
    expect(typeof reverseInteger(4)).toBe('number');
  });

  it('should return 4', () => {
    expect(reverseInteger(4)).toBe(4);
  });

  it('should return 129', () => {
    expect(reverseInteger(921)).toBe(129);
  });

  it('should return 1222', () => {
    expect(reverseInteger(2221)).toBe(1222);
  });
});
