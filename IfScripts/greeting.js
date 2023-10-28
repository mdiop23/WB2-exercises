"use script"

//inputs

var currentHour;
var greetingDisplayed;
currentHour = 22;
greetingDisplayed = "";

// statements

if (currentHour <= 10) {
    greetingDisplayed = "Good morning!";
}
else if (currentHour < 17) {
    greetingDisplayed = "Good day!"
}
else if (currentHour >= 17) {
    greetingDisplayed = "Good evening!"
}


console.log(greetingDisplayed);