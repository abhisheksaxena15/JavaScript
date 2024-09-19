const a = function(){
    console.log("hello world")
}

a()


function x (){
    console.log("hello world")
}
x()

function addition(num1 , num2){
    console.log(num1 + num2)
}

addition(12,12)



function add(num1 , num3) {
    console.log(num1 + num3)
}
let result = add(12,12)
console.log("Rrsult : " , result);
// Result eill give undefined value ,  as nothin is returning,
//console doesnt mean that the value is returniong it is just printing

// for that:-



function Add(num1 , num2) {
    return num1+num2
}
const r = Add(12,12)
console.log("Rrsult : " , r);



/************************************************/

function logginuser(usrername){
    console.log( `Just now ${usrername} logge in` )
}
logginuser("abhishek")


/*************************************************/
function logginuser(usrername){
    if(usrername === undefined){
        console.log("username is not defined"),// when noinput is passed then instead of getting undefined,
        console.log("entr the valid username!!")
        return
    }
    return ( `Just now ${usrername} logge in` )
}
console.log(logginuser( ))
/**************************************************/