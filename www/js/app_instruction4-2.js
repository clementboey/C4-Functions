/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */

var x = 100;
        	
function wages(hoursWorked, hourlyRate){
    var totalsalary = hoursWorked * hourlyRate;
    console.log("Popping x within the function " + x);
    return totalsalary;
}

var mySalary = wages(10,5);
console.log("Popping x outside the function "  + x);