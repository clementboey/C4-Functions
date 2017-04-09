/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */

function wages(hoursWorked, hourlyRate){
    var totalsalary = hoursWorked * hourlyRate;
    return totalsalary;
}
        	
var johnSalary;
johnSalary = wages(12,8);
        	
var peterSalary;
peterSalary = wages(10,7.5);
        	
var total = johnSalary + peterSalary;
console.log("John and Peter were paid " + total + " in total.");