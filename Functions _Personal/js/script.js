// JavaScript
// Jessica Brandt Week 4 Functions_Personal
//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";


function monthlyBills(jan, feb, mar){
	var total = jan + feb + mar;
	var ave = total / 3;
	console.log(ave)
	
	if (ave <= 1500){
	console.log ("Good job staying on track!");
}
    else{
	console.log ("You need to cut back your spending!");
}

}

monthlyBills(prompt("How much were your total bills for January?"), prompt("How much were your total bills for February?", 0), prompt("How much were your total bills for March?", 0))


