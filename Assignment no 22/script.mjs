// Qno 22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program

let arr = ["Dubai", "Sangapore", "karachi", 45, { name: "Harish" }, "Germany", true, "Japan"];

// arr.splice(4, 0, abc) ;

// HERE YOU WILL GET ERROR === ads is not countable in array;

// WILL  CONVERT IT INTO STRING;


arr.splice(4, 0, "abc");
console.log(arr);