/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */

var x = 100;
        
function goo(x){
	x = x + 1;
	return x;
}

function foo(x){
	x = x - 1;
    return x;
}
 			
console.log("Value of foo " + foo(x));
console.log("Value of goo " + goo(x));
console.log("value of x " + x);