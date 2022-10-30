// Q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const personName = "harIsh";

// converting the person name in lowercase:
console.log(personName.toLowerCase());

//converting the person name in uppercase:
console.log(personName.toUpperCase())

//converting the person name in titlecase
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase())

