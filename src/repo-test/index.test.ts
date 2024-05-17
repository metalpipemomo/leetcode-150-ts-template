import { add } from ".";
import { strict as assert } from 'assert';
import { test } from 'node:test';

test('Repo Test 1', () => {
    const a = 5;
    const b = 3;

    assert.equal(add(a, b), 8);
});

test('Repo Test 2', () => {
    const a = -5;
    const b = -3;

    assert.equal(add(a, b), -8);
});