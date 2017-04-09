/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */
/* global logicWages: true */

var salary = logicWages.wages(10, 20);
var tax = logicWages.tax(0.5, salary);
console.log("I will need to pay tax of $" + tax);