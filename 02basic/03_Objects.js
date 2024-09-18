// singleton objects r contructor
//const x_user = new objects()


//objects literals
const facebook = {}    // non singleton

facebook.name = "abhishek saxena "
facebook.age = 25
//console.log(facebook)

/************* objects inside objects***********/
const regulardetails = {
    email: "abhisheksaxena@gmail.com",
    fullname: {
        username : {
            firstname : "abhishek",
            lastname : "saxena"
        }
    }
}
/*
console.log(regulardetails.fullname)
console.log(regulardetails.fullname.username)
console.log(regulardetails.fullname.username.firstname)
*/

const obj01 = {1:"abhishke" , 2:"saxena", 3:"bareilly"}
const obj02 = {4:"nikhil" , 5:"rajput", 6:"jaipur"}

/*const x = {obj01 , obj02}
console.log(x)*/              //wrong

const obj3 = Object.assign({} , obj01 , obj02)     //assign(tagert , source) -->  obj01 , obj02 into {}
console.log(obj3)

console.log(obj3 === {});


/*
const obj3 = Object.assign(obj01 , obj02)     //assign(tagert , source) -->  obj01 , obj02 into {}
console.log(obj3)
console.log(obj3 === obj01);*/


const v = {...obj01 , ...obj02}
console.log(v)
/*********************************************************************************************/




// console.log(Object.keys(regulardetails))
// console.log(Object.values(regulardetails))
console.log(Object.entries(regulardetails))
console.log(regulardetails.hasOwnProperty("fullname"))