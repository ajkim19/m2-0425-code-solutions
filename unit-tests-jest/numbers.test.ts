import { evenNumbers } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numArray = [2, 4, 5, 10, 11, 456];
    const result = evenNumbers(numArray);
    expect(result).toStrictEqual([2, 4, 10, 456]);
  });
});
