function factorial(x) { //assumes positive number
    if (x == 1) return x; //base case
    return x * factorial(x-1); //recursive case
}

console.log(factorial(7));