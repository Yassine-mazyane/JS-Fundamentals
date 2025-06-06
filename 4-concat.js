const args = process.argv.slice(2);
const arg1 = args[0] || "undefined";  // Ensures correct expected output
const arg2 = args[1] || "undefined";

console.log(`${arg1} is ${arg2}`);
