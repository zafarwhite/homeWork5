describe('findSquareRootBinarySearch should return the root of the number accurate to integer', () => {
    const testData = [
        {num: 1, expected: 1},
        {num: 4, expected: 2},
        {num: 8, expected: 3},
        {num: 9, expected: 3},
        {num: 25, expected: 5},
        {num: 30, expected: 5},
        {num: 90, expected: 9},
        {num: 95, expected: 10}
    ];

    testData.forEach((data) => {
        const {num, expected} = data;
        const actual = findSquareRootByBinarySearch(num);

        it(`should return ${expected} when num = ${num}`, () => {
            assert.strictEqual(actual, expected);
        });
    });
});