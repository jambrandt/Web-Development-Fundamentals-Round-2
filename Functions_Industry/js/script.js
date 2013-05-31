// JavaScript
// Jessica Brandt Functions _ Industry 
//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

var days = Number (prompt("How many days have you been in the unit?", 0));
var rate = Number (prompt("How much do you pay a month for your unit?", 0));

function proratedBill (days, rate){
	var dailyCost = rate / 30;
	var bill = dailyCost * days;
	console.log(bill)
}

proratedBill()
