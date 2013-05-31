// JavaScript
// Jessica Brandt Week 4 Fuctions _ Wacky
//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

//var min = Number (prompt("How many minutes do you read at a time?"));
//var day = Number (prompt("How many days do you read a week?"));

var timeReading = function(min,day){
	var totalTime = min * day;
	return (totalTime);
	//(totalTime >= 140) ? "Keep up the good work!" : "Try getting more reading in."
}

timeReading = (totalTime >= 140) ? "Keep up the good work!" : "Try getting more reading in."
var a = timeReading(Number(prompt("How many minutes do you spend reading?")), Number(prompt("How many days do you read a week?")));
//timeReading = (totalTime >= 140) ? "Keep up the good work!" : "Try getting more reading in."
console.log (a);
