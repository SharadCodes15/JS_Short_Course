// Declaration: Creating an array to store multiple values
var arr = [10, "Sheryians", true, [1, 2]];

// Accessing Elements: Using zero-based indexing
console.log(arr[0]); // Output: 10
console.log(arr[1]); // Output: "Sheryians"

// Modifying Elements: Assigning a new value to an index
arr[2] = false;

// 2. Essential Array Methods
javascript
var numbers = [1, 2, 3, 4, 5];

// PUSH: Add element to the end
numbers.push(6);

// POP: Remove element from the end
numbers.pop();

// UNSHIFT: Add element to the beginning
numbers.unshift(0);

// SHIFT: Remove element from the beginning
numbers.shift();

// SPLICE: Remove/Add elements at a specific index
// Syntax: splice(startIndex, deleteCount)
numbers.splice(2, 1); // Removes 1 element at index 2

// 3. The Reference Problem & Copying Arrays
// Understanding how arrays are copied is crucial. Arrays are reference types (07:16:36).

javascript
// --- THE PROBLEM ---
var original = [1, 2, 3];
var copy = original; // This copies the reference, not the actual values

copy.push(4);
console.log(original); // Output: [1, 2, 3, 4] -> Original is altered!

// --- THE SOLUTION: Deep Copying ---
// Use the Spread Operator [...] for a true copy
var trueCopy = [...original];
trueCopy.push(5);

console.log(original); // Output: [1, 2, 3, 4] -> Original remains safe
console.log(trueCopy); // Output: [1, 2, 3, 4, 5]

// 4. Advanced Iteration Methods
javascript
var items = [1, 2, 3];

// FOREACH: Iterates through each element
items.forEach(function(val) {
console.log(val);
});

// MAP: Creates a new array with results of a function
var doubled = items.map(function(val) {
return val * 2;
});

// FILTER: Creates a new array with elements that pass a test
var filtered = items.filter(function(val) {
return val > 1;
});

// REDUCE: Reduces array to a single value
var sum = items.reduce(function(acc, val) {
return acc + val;
}, 0);