const findSquareRootByBinarySearch = num => {
    let max = num;
    let min = 0;
    let middle;

    if (num === 1) return 1;

    while (max - min > 1) {
        middle = parseInt(((min + max) / 2));
        if (middle * middle >= num) {
            max = parseInt(middle);
        } else {
            min = parseInt(middle);
        }
    }

    if ((num - min * min) < (max * max - num)) {

        return min;
    }

    return max;
};