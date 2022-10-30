// Qno: 43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name



let magicians = ["Lance Burton", "Ricky Jay", "Mark Wilson", "Harry Anderson"];


function show_magicians(magicians) {
    for (magicians of magicians) {
        console.log(magicians);
    }
}

show_magicians(magicians) // original array


function make_great(magicians) {
    let newMagiciansArr = [];
    for (let i = 0; i < magicians.length; i++) {
        newMagiciansArr.push(`Great ${magicians[i]}`);
    }
    console.log(newMagiciansArr);
}

make_great(magicians) // Modified Array