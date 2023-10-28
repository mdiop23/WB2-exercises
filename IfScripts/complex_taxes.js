"use strict";

let annualIncome = 11999;
let filingStatus = "Single";
let taxRate = "";

if (filingStatus == "Single"){
    if (annualIncome < 12000){
        taxRate = 0.05
    }
}
 else if (filingStatus == "Joint"){ 
    if (annualIncome < 12000){
        taxRate = 0.00
    }

 }

 else{
    console.log("ERROR! Invalid filingStatus!");
 }

 console.log(taxRate);