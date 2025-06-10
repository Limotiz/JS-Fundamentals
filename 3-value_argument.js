const firstArgument = process.argv[2];

// Check if the firstArgument is undefined (meaning no argument was passed).
if (firstArgument === undefined) {
  console.log("No argument");
} else {
  // If an argument was found, print it.
  console.log(firstArgument);
}