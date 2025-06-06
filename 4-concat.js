const args = process.argv.slice(2);
const arg1 = args[0] || "default";
const arg2 = args[1] || "undefined";

console.log(`${arg1} is ${arg2}`);
