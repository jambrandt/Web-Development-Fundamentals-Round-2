// JavaScript
// Jessica Brandt 
//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";



//How much to charge for labor on a quilt.
var hours = prompt("How many hours of labor did you put in?");
//Going rate for makeing a blanket is $11.00 an hour. 
var howMuchToCharge = hours * 11;
console.log("You should charge", howMuchToCharge, "dollars.")
