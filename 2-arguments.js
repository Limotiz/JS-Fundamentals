const numberOfArguments = process.argv.length - 2;

// Use if/else if/else to determine the message based on the argument count.
if (numberOfArguments === 0) {
  // If no arguments are passed (i.e., only 'node' and the script path are present)
  console.log("No argument");
} else if (numberOfArguments === 1) {
  // If exactly one argument is passed
  console.log("Argument found");
} else {
  // If more than one argument is passed
  console.log("Arguments found");
}
