"use strict";


//inputs
var a, b, c, min, max;
a = 6
b = 7
c = 8
min = ""
max = ""


//statements

if (a < b && a < c){ 
    min = a

}
else if (b < a && b < c) {
    min = b
}
else { 
    min = c
}
if (c > a && c > b) {
    max = c
}
else if (b > a && b > c){
    max = b
}
else {
   max = a
}

console.log(min);
console.log(max);