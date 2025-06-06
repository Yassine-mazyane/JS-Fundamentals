function factorial(n) {
    if (isNaN(n) || n <= 0) return 1; // Base case for NaN and 0
    return n * factorial(n - 1); // Recursive call
}

const arg = parseInt(process.argv[2]); // Convert first argument to integer
console.log(factorial(arg)); // Compute and print factorial
