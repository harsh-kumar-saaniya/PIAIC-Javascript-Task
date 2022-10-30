// Qno 14: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians = ["Lance Burton", "Ricky Jay", "Mark Wilson", "Harry Anderson"];

function show_magicians(magicians) {
    for (magicians of magicians) {
        console.log(magicians);
    }
}

show_magicians(magicians)
