describe('getFib tests', () => {
    let fib;

    beforeEach(() => {
        fib = getfib();
    });

    it(`should return 1`, () => {
        //Given
        const expected = 1;

        //When
        const actual = fib();

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return 1`, () => {
        //Given
        const expected = 1;

        //When
        fib();
        const actual = fib();

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return 2`, () => {
        //Given
        const expected = 2;

        //When
        fib();
        fib();
        const actual = fib();

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return 3`, () => {
        //Given
        const expected = 3;

        //When
        fib();
        fib();
        fib();
        const actual = fib();

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return 5`, () => {
        //Given
        const expected = 5;

        //When
        fib();
        fib();
        fib();
        fib();
        const actual = fib();

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return 8`, () => {
        //Given
        const expected = 8;

        //When
        fib();
        fib();
        fib();
        fib();
        fib();
        const actual = fib();

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return 13`, () => {
        //Given
        const expected = 13;

        //When
        fib();
        fib();
        fib();
        fib();
        fib();
        fib();
        const actual = fib();

        //Then
        assert.deepEqual(actual, expected);
    });
});

describe('getFibonacci tests', () => {
    it(`should return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55] when n = 10`, () => {
        //Given
        const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

        //When
        const actual = getFibonacci(10);

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return [0, 1, 1, 2, 3, 5] when n = 5`, () => {
        //Given
        const expected = [0, 1, 1, 2, 3, 5];

        //When
        const actual = getFibonacci(5);

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return [0, 1, 1, 2, 3] when n = 4`, () => {
        //Given
        const expected = [0, 1, 1, 2, 3];

        //When
        const actual = getFibonacci(4);

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return [0, 1] when n = 0`, () => {
        //Given
        const expected = [0, 1];

        //When
        const actual = getFibonacci(0);

        //Then
        assert.deepEqual(actual, expected);
    });

    it(`should return undefined when n = -1`, () => {
        //Given
        const expected = undefined;

        //When
        const actual = getFibonacci(-1);

        //Then
        assert.deepEqual(actual, expected);
    });
});