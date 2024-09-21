function one () {
    const username  = "Abhishek"
    
    function two (){
        const x = "youtube"
        console.table([username , x])
    }
    console.log(x);
    two()
}
one() 

/* Here inner func can access variable of the parent function i.e. the outer funciton
But the parent function cannot access the variable of the inner function.


here before callingf the inner function it will give error as --->>
 as we are vcalling variable of the innerfunct inside thr pouter function*/



 if (true) {
    let x = 10;
 }
 console.log(x); // ReferenceError: x is not defined

 if(true){
    const x ="abhishek"
    if(x === "abhishek"){
        y = " saxena"
        console.log(x + y);
    }
    console.log(y);
    
 }
 console.log(x); 
 /* cant access variable of loop outside its scope,
 also cant call inner loop variable by outside the loop in inner loop
 */

 function addone (num){
    return num + 1
 }

addone(5)




/************************************************************************************/

const objone = {
    name : "abhishek",
    welcomemsg : function(){ 
        console.log(` ${this.name} welcomee to my website`);
        console.log(this);                          //------- >>>>>>> This refers to the context of inside scope only ,
    }                                                                    //this name will take name only the name which 
                                                                        //will be there inside scope
}
objone.welcomemsg()
objone.name = "abhishek saxena"
objone.welcomemsg()


/**********************************ARROW********************************/

function chai(){
    let name = "abhinav"
    console.log(this.name);
    
}
chai() //this cannot be used in fucnion 

const x =  () => {
    let name = "abhinav"
    console.log(this.name);
    
}
x()

//-------  IMPICIT RETUREN

const add = (num1 , num2) => (num1 + num2) 

//for returnng object
const add01 = (name) => ({username : "saxena"}) 
console.log(add01("abhishek"));
