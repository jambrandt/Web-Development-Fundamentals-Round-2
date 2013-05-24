// JavaScript
// Jessica Brandt 
//Conditionals Wacky Week 3
//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";


//What type of Birthday for son
var numberOfGuests = Number(prompt("Many guest do you want to invite?"));
var costOfParty;

costOfParty = numberOfGuests * 5.00; //in dollars

console.log (costOfParty)

if (costOfParty <= 60){
	console.log ("Take them Bowling!")
}
else {
	console.log ("At home BBQ.")
}