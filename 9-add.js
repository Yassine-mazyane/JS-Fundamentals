function add(a, b) {
    return a + b;
}

const arg1 = parseInt(process.argv[2]); // Convert first argument to integer
const arg2 = parseInt(process.argv[3]); // Convert second argument to integer

console.log(add(arg1, arg2)); // Print result
