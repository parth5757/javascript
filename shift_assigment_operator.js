// Declare and initialize a variable
let a = 8; // Binary: 00000000 00000000 00000000 00001000

console.log("Initial Value:");
console.log("a =", a); // Output: a = 8

// Left shift assignment operator (<<=)
// Shifts the bits of 'a' to the left by the specified number of positions
a <<= 2;
console.log("\nAfter 'a <<= 2':");
console.log("a =", a); // Output: a = 32 (Binary: 00000000 00000000 00000000 00100000)

// Right shift assignment operator (>>=)
// Shifts the bits of 'a' to the right by the specified number of positions
a >>= 3;
console.log("\nAfter 'a >>= 3':");
console.log("a =", a); // Output: a = 4 (Binary: 00000000 00000000 00000000 00000100)

// Unsigned right shift assignment operator (>>>=)
// Shifts the bits of 'a' to the right by the specified number of positions, and fills the left bits with zeros
a >>>= 1;
console.log("\nAfter 'a >>>= 1':");
console.log("a =", a); // Output: a = 2 (Binary: 00000000 00000000 00000000 00000010)