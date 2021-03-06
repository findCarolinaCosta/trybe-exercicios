const assert = require('assert');
const getChange = require('./bonus1-vending-machine');

let result = getChange(1, 1);
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300);
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600);
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400);
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);