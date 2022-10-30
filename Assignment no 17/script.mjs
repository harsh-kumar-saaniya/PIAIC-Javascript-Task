// Qno 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


const myGuest = ['Sir Zia', 'Sir Zeeshan', 'Sir Daniyal ', 'Sir Adeel', 'Sir Ameen'];

console.log("I can only invite two people for the dinner because our dinner table won't arrive in time and don't have enought space");


for (let i = myGuest.length; i > 2; i--) {
    console.log(`Sorry ${myGuest[i - 1]} you aren't invited for the dinner because of space issue`);
    myGuest.pop()
}

console.log(myGuest);

for (let i = 0; i < myGuest.length; i++) {
    console.log(`${myGuest[i]} you are still invited`);
}

for (let i = myGuest.length; i > 0; i--) {
    myGuest.pop()
}

console.log(myGuest);

