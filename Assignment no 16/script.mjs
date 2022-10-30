//Qno: 16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


const myGuest = ['Sir Zia', 'Sir Zeeshan', 'Sir Daniyal ', 'Sir Adeel', 'Sir Ameen'];


myGuest.unshift("Miss Heera")
myGuest.splice(3,0,"Sir Ameen")
myGuest.push("Sir Mohsin")

for (let i = 0; i < myGuest.length; i++) {
    console.log("Now we have more space avaliable, therefore some more guest are also invited with you " + myGuest[i]);
}