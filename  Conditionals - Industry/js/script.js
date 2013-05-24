// JavaScript
// Jessica Brandt 
// Conditionals Industry Week 3
//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

var numberOfPeople = Number(prompt("How many people ride in your car on a regular basis?",3));

if (numberOfPeople == 1){
	console.log ("Get a Sports car!")
}
else if (numberOfPeople >= 2 && numberOfPeople <= 3){
     console.log ("Mid size car or cross-over suv")
}
else
{
	console.log ("You will probably need a van or larger suv with thrid row seating.")
}
