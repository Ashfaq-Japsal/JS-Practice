// This will ask you your first and last name and then wil show it in an alert box
var firstName = prompt("What's your first name?")
var lastName = prompt("What's your last name?")
alert ("Your full name is " + firstName + " " + lastName)

var permission = prompt("will you participate in our Q&A session? (if yes, type yes)")
if (permission === "yes") {
    var worldCup = prompt("Will Pakistan win this world cup?")
}
else {}

if (worldCup === "yes") {
    var pakVsInd = prompt("Will Pakistan beat India in this world cup?")
}
else {}

if (pakVsInd === "yes") {
    var babar = prompt("Will Babar Azam score 200 runs in any match of this world cup?")
}
else {}

if (babar === "yes") {
    var babar2 = prompt("How many centuries will babar Azam score in this world cup?")
}
else {}

if (babar2 >= 3) {
    alert("Wow! You are a big fan of Babar Azam.")
}
else {
    alert("Thank you, Have a good day!")
}