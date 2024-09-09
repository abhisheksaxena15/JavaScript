const accId = 12346
let accemail = "abhisheksxna15@gmail.com"
var accpass = "AS1234"
acccity = "delhi"

let accstate;

/*
dont use var keyword  , use " const and let "
kyu ki scope jab use kar rahe hote hai inside scope{} variables ca n be accesed outside the scope 
and , redecleration causes bug , while let and const do not 
You can redeclare the same variable with var, increasing the risk of accidentally overwriting variables.

let and const are better options because they respect block scope and prevent redeclaration,
 making your code safer and easier to debug
*/

//accId = 44444

accemail = "saxenabhi@gmail.co"
acccity = "jaipur"
accpass = "bs1234"
//console.log(accId);
console.table([accId , accemail , accpass , acccity])
console.table([accId , accemail , accpass , acccity , accstate])
