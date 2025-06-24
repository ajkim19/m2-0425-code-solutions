import { evenNumbers, toDollars, divideBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [2, 4, 5, 10, 11, 456];
    const result = evenNumbers(numbers);
    expect(result).toEqual([2, 4, 10, 456]);
  });
});

describe('toDollars', () => {
  it('returns the dollar amount as a string', () => {
    const amount = 19;
    const result = toDollars(amount);
    expect(result).toEqual('$19.00');
  });
});

describe('divideBy', () => {
  it('returns the divided numbers', () => {
    const numbers = [3, 6, 9, 27, 45];
    const divisor = 3;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([1, 2, 3, 9, 15]);
  });
});
