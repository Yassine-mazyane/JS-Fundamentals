const args = process.argv.slice(2); // Extract arguments, ignoring the first two elements

if (args.length === 2 ) {
    console.log(args[0] + " is " + args[1]);
} 