"use strict";


// establish starting values
var fahrenheit = 80;

//calculate unknown values that can be found
var celcius = (fahrenheit - 32) * 5 / 9;

// show results

var message = "The Fahrenheit Temp: " + fahrenheit + " is the same as the Celcius Temp: " + celcius;
var message = `The Fahrenheit Temp: ${fahrenheit} is the same as the Celcius Temp: ${celcius}`;

console.log(message);