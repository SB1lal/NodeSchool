function* factorial(n) {
    let result = 1

    for (let i = 1; i <= n; i++) {
        yield i * result;
        result *= i;
    }
}

for (let n of factorial(5)) {
    console.log(n)
}
