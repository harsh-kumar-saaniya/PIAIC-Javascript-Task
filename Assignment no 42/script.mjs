// Qno 42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


let magicians = ["Lance Burton", "Ricky Jay", "Mark Wilson", "Harry Anderson"];



function show_magicians(magicians) {
    make_great(magicians)
}


function make_great(magicians) {
    for (magicians of magicians) {
        console.log(`${magicians} is a great magician`);
    }

}
show_magicians(magicians);