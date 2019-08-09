describe('findFactorial should return factorial of the number', () => {
    const testData = [
        {num: 5, expected: 120},
        {num: 8, expected: 40320},
        {num: 9, expected: 362880}
    ];

    testData.forEach((data) => {
        const {num, expected} = data;
        const actual = findFactorial(num);

        it(`should return ${expected} when num = ${num}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});

describe('findFactorialByRecursion should return factorial of number', () => {
    const testData = [
        {num: 5, expected: 120},
        {num: 8, expected: 40320},
        {num: 9, expected: 362880}
    ];

    testData.forEach((data) => {
        const {num, expected} = data;
        const actual = findFactorialByRecursion(num);

        it(`should return ${expected} when num = ${num}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});