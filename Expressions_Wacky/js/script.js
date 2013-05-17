// JavaScript
// Jessica Brandt 
//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

//how much you could spend on summer concerts
var summerConcerts = ["Jason Mraz","Bruno Mars","Kid Rock","Journey"];

summerConcerts[0] = prompt("How much is the ticket to Jason Mraz?")
summerConcerts[1] = prompt("How much is the ticket to Bruno Mars?")
summerConcerts[2] = prompt("How much is the ticket to Kid Rock?")
summerConcerts[3] = prompt("How much is the ticket to Journey?")

var totalOfConcerts = "Jason Mraz" + "Bruno Mars" + "Kid Rock" + "Journey"

console.log ("A grand total of", totalOfConcerts, "dollars.")
