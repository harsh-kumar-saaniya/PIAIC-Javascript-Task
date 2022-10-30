// Qno 13:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let cars = ['Corolla', 'Civic', 'Fortuner'];
let statements = ["is good for personal use", "has a great look", "is no expensive"];

for (let i in cars) {
    console.log(`${cars[i]} ${statements[i]}`);
}