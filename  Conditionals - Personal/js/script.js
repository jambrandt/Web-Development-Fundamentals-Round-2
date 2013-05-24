// JavaScript
// Jessica Brandt 
// Conditionals Week 3 
//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";


//Can you keep a Tiger Muskie or do you need to through it back?
var tigerMuskie = Number (prompt ("What size is the Tiger Muskie in inches?"));
var qualify;

qualify = (tigerMuskie <= 36) ? "Throw it back and try again." : "Thats a keeper.";
console.log(qualify) ;
