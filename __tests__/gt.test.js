import getFunction from '../src/gt.js';

const gt = getFunction();
test('Expect', () => {
expect(gt(3, 1)).toBeTruthy();
expect(gt(3, 3)).not.toBe(true);
expect(gt('a', Object('a'))).toBeFalsy();
expect(gt(1, -1)).toBe(true);
});
