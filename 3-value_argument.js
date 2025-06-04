const args = process.argv.slice(2);

if (args[0] === undefined) { // Check if there are no arguments
    console.log("No argument");
} else {
    console.log(args[0]); // Print the first argument
}
