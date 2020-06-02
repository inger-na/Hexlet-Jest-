import getFunction from '../src/without.js';

const without = getFunction();

test('without', () => {
  expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
  expect(without([2, 'ab', 1, 'j', 2, 3], 1, 'j', 2)).toEqual(['ab', 3]);
  expect(without([], 1, 'j', 2)).toEqual([]);
});
