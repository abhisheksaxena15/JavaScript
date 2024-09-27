//for of

const arr = [1 ,2 ,3 ,4, 5]

for (const nums of arr){
    console.log(nums);
    
}


//let str = {"abhishe" , "saxena"}
//for of is not applicable here because it is not an array or an iterable object. It is  


const greeting = " hello abhishek"

for ( const i of greeting){
    if(i == " "){
        continue;
    }
    console.log(i);
    
}

// ************************************************** MAP

const x = new Map ()
x.set("name" , "abhishek")
x.set("age" , 20)
x.set("city" , "bareilly")
x.set("state" , "uttar pradesh")

for (const keys of x){
    console.log(keys)
}
/*************************************************DE  --  STRUCTURE *****************************************/
// const map = new Map()

// map.set("1" , "abhishek")
// map.set("2" , "saxena")
// map.set("3" , "rajput")

// for (const [keys , value] of map) {
//     console.log(keys , ':-' , value);
    
// }
//for in
const obj = {
    "name" : "bhiasahb",
    "age" : 20,
    "add" : "model town",
    "city" : "delhi"
}
/*for (const keys of obj) {               //obj is not iterable , it cannot be executed with for of
    console.log(keys);
    
}*/

for (const key in obj) {
    console.log(`${key} is for ${obj[key]}`);
    
}

/**can for in will run for ARRAY also ????????????? */

const arr1 = ["one" , "two" , "three"]

for (const key in object) {       //object is not defined
    console.log(key);
    
}  // for in will not run for array
const map = new Map()

map.set("1" , "abhishek")
map.set("2" , "saxena")
map.set("3" , "rajput")

for (const key in map) {
    console.log(key);
    //ReferenceError: object is not defined
}



/*****************************************************  HIGHER  ORDER  ARRAYS****************************************/
const arr02 = ["java" , "cpp" , "python" , "ruby"]

// arr02.foreach(funciton return type){}

arr02.forEach( function (value) {
    console.log(value);
    
})