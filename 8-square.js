const size = parseInt(process.argv[2]); // Convert first argument to an integer

if (isNaN(size) || size <= 0) {
    console.log("Missing size");
} else {
    for (let i = 0; i < size; i++) {
        console.log("X".repeat(size)); // Print "X" size times
    }
}
