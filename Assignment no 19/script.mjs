// Qno: 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.


const myGuest = ['Sir Zia', 'Sir Zeeshan', 'Sir Daniyal ', 'Sir Adeel', 'Sir Ameen'];


for (let i = myGuest.length; i > 2; i--) {
    // console.log(`Sorry ${myGuest[i - 1]} you aren't invited for the dinner because of space issue`);
    myGuest.pop()
}

console.log(myGuest);

for (let i = 0; i < myGuest.length; i++) {
    console.log(`${myGuest[i]} you are invited for the dinner`);
}

// for (let i = myGuest.length; i > 0; i--) {
//     myGuest.pop()
// }

// console.log(myGuest);

//only two people are invited as per the previous excercises statement.