/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */


function wages(){
    var hoursWorked = 15;
    var hourlyRate = 8;
        		
    var totalsalary = hoursWorked * hourlyRate;
    console.log("Your Total Salary is " + totalsalary);
}

wages();