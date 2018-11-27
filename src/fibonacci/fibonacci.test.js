import { fibonacci } from './fibonacci';

describe('fibonacci', () => {
  it('expects fibonacci to be a function', () => {
    expect(fibonacci).toBeInstanceOf(Function);
  });

  it('calculates the correct value for 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  it('calculates the correct value for 2', () => {
    expect(fibonacci(2)).toBe(1);
  });

  it('calculates the correct value for 3', () => {
    expect(fibonacci(3)).toBe(2);
  });

  it('calculates the correct value for 10', () => {
    expect(fibonacci(10)).toBe(55);
  });

  it('calculates the correct value for 99', () => {
    expect(fibonacci(99)).toBe(218922995834555200000);
  });
});
