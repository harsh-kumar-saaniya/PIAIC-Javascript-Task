// Qno 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.



function make_shirt(size, text) {
    let defaultText = "I love Javascript";

    if (size == "large" || size == "medium") {
        console.log(`The size of the Shirt is ${size}\nThis "${defaultText}" text will print on the shirt`);
    }
    else {
        console.log(`The size of the Shirt is ${size}\nThis "${text}" text will print on the shirt`);
    }
}

make_shirt("small", "born to rock");