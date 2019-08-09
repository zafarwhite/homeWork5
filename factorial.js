const factorial = (n) => {
    if(n === 1) {
        return;
    }else {
        return n * factorial(n - 1);
    }
}

// const factorial(3); //6