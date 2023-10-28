"use strict";


var payRate, hoursWorked, grossPay;

if (hoursWorked > 40) {
    payRate = payRate * 1.5;
}

payRate = 12.50;
hoursWorked = 20;
grossPay = payRate * hoursWorked;

console.log(grossPay);

payRate = 25.00;
hoursWorked = 40;

grossPay = payRate * hoursWorked;

console.log(grossPay);

payRate = 17.30 ;
hoursWorked = 45;
grossPay = payRate * hoursWorked;

if (hoursWorked > 40) {
    payRate = payRate * 1.5;
}

console.log(grossPay);