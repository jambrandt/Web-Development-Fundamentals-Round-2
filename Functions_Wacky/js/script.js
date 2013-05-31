// JavaScript
// Jessica Brandt Week 4 Fuctions _ Wacky
//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

var timeReading = function(min,day){
	var totalTime = min * day;
	console.log(totalTime);
	var a = (totalTime >= 150) ? "Keep up the good work!" : "Try getting more reading in.";
	console.log(a);
}


timeReading (prompt("How many minutes do you spend reading?"), prompt("How many days do you read a week?"));
