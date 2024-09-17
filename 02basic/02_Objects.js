/*singleton 
when we create objects with the help of constructor
creating with literals no singleton Form*/

//Object.create

//objecst literals

const jsuser = {
    name: "John",
    age: 30,
    location: "jaipur",
    isloggedin: false,
    lastlogindays: ["mondaty" , "friday"],
    //email: "abhisheksaxena@gmail.com"
}


//to call object elements
console.log(jsuser.name);
console.log(jsuser["name"]);
/***********************************************************/


const mysym = Symbol("key1")
const jsusero1 = {
    name: "abhishek saxena ",
    age: 20,
    [mysym]: "abhisheksaxena@gmail.com",
     //if we will not use [] fro assigning symbol key in objects it will become a string only ,
     //so to avoid we use proper syntax for SYMBOL 
    location: "delhi",
    isloggedin: false,
    lastlogindays: ["mondaty" , "friday"],
    email: "abhisheksaxena11@gmail.com"
}

console.log(jsusero1[mysym]);
console.log( jsusero1["name"]);
console.log(jsusero1),

jsusero1.email = "abhinavsingh@gmail.com"
//Object.freeze(jsusero1)

jsusero1.email = "arvindsingh@gmail.com"
console.log(jsusero1)

jsusero1.greeting = function(){
    console.log("hello");
}
console.log(jsusero1.greeting());


jsusero1.greeting01 = function(){
     console.log(`hello js user ${this.name}`)

}
console.log(jsusero1.greeting01())