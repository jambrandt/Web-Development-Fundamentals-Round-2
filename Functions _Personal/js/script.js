// JavaScript
// Jessica Brandt Week 4 Functions_Personal
//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

var jan = Number (prompt("How much were your total bills for January?", 0));
var feb = Number (prompt("How much were your total bills for February?", 0));
var mar = Number (prompt("How much were your total bills for March?", 0));

function monthlyBills(jan , feb, mar){
	var total = jan + feb + mar;
	var average = total / 3;
	console.log(average);
	
	if (average <= 1500){
	console.log ("Good job staying on track!");
}
    else{
	console.log ("You need to cut back your spending!");
}

}

monthlyBills()


