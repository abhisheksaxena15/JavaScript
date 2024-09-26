const usergmail = " "//"abhishek@ac.in" //if "" else  , if [] true

if(usergmail){
    console.log("got the mail");
}
else{
    console.log("not got the mail");
    
}
//falsy Value
// false , 0 , -0 , undefined , BigInt 0n , null , NaN , ""
//except these all are truthy values

//truthy
//" 0 " , " false " , " " , [ ] , { } , function (){ }

false == ""
false == 0
0 == " "


const username01 = []
if(username01.length === 0){
    console.log("array is empty");
    
} 

const x ={}

if(Object.keys(x).length === 0){
    console.log("empty");
    
}
//Object.keys(x) -->>>> converts objects into array

/************************************************************************************************************ */
//Nullish Coalescing operation (??) : null ,undefined

let val1 , val2 , val3;
val1 = 5 ?? 10
val2 = null ?? 19

val3 = undefined ?? 11
console.log(val1);
console.log(val2);
console.log(val3);
//nullish coalescing operation is used to check if the value is null or undefined , if


/**************************************************************************************************************** */
//ternary operator 

let y = 100;
(y % 2 == 0) ? console.log("even") : console.log("odd");
