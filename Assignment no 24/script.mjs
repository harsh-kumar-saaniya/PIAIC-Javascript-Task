// Qno: 24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array


//  Tests for equality with strings
let name = "harish";
console.log(name == 'harish')

//  Tests for inequality with strings
console.log(name !== 'harish')

// • Tests using the lower case function
let newName = "HARISH";
console.log(newName.toLowerCase() == "harish");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log(5 == 5); // True
console.log(5 == 4); // False
console.log(5 > 4); // True
console.log(4 > 5); // False
console.log(5 >= 5) // True
console.log(4 <= 5) // True

// • Tests using "and" and "or" operators

console.log(5 == 5 || 4 == 3); // True
console.log(5 == 5 && 4 == 3); // False


// // • Test whether an item is in a array
let mern = ['MongoDB', 'Express', 'React', 'Node'];
console.log(mern.includes("Express"));

// • Test whether an item is not in a array
let mern2 = ['MongoDB', 'Express', 'React', 'Node'];
console.log(mern2.includes("express"));
