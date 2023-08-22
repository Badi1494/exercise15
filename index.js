"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list
let guestList = [
    "zia khan",
    "jahanzaib tayyab",
    "muhammad iqbal",
];
let guestWhoCantMAkeIt = "muhammad iqbal";
console.log(`${guestWhoCantMAkeIt} cant make it to dinner`);
let newGuest = "Hamid Ijaz";
let indexOfGuestWhoCantMakeIt = guestList.indexOf(guestWhoCantMAkeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guestList[indexOfGuestWhoCantMakeIt] = newGuest;
}
//console.log(guestList[2])
console.log("second set of invitation messeges");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});
