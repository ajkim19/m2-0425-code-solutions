import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [2, 4, 5, 10, 11, 456];
    const result = evenNumbers(numbers);
    const expected = [2, 4, 10, 456];
    expect(result).toEqual(expected);
  });
});

describe('toDollars', () => {
  it('formats integer to the dollar amount as a string', () => {
    const amount = 19;
    const result = toDollars(amount);
    const expected = '$19.00';
    expect(result).toEqual(expected);
  });
  it('formats decimals with just two digits, rounding up', () => {
    const amount = 5.3999;
    const result = toDollars(amount);
    const expected = '$5.40';
    expect(result).toEqual(expected);
  });
});

describe('divideBy', () => {
  it('divides all values of type number by divisor', () => {
    const numbers = [3, 6, 9, 27, 45];
    const divisor = 3;
    const result = divideBy(numbers, divisor);
    const expected = [1, 2, 3, 9, 15];
    expect(result).toEqual(expected);
  });
});

describe('multiplyBy', () => {
  it('multiplies all values of type number by multiplier', () => {
    const numbers = {
      a: 1,
      b: 2,
      c: 3,
      d: 'Hi',
      e: 15,
    };
    const multiplier = 3;
    const result = multiplyBy(numbers, multiplier);
    const expected = {
      a: 3,
      b: 6,
      c: 9,
      d: 'Hi',
      e: 45,
    };
    expect(result).toEqual(expected);
  });
});
