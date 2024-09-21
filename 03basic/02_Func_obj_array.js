function calculateCart (num){
    return num
}
console.log(23);
//when we want o add more itemns in cart session then,

function calculate (...num1){ // rest or spread operator--> this time we are using rest as, it depeds when it is acting as reast or spread
    return num1
}
console.log(23,34, 5, 6, 56, 67, 56, 435);


const user = {
    name : "abhishek",
    location : "delhi"
}

function handleobject(anyobject){
    console.log(`jsut now ${anyobject.name} from ${anyobject.location} accesed the portal`)
}

handleobject(user)




/*************     ARRAY      *******************/

// const myarray = [12,23, 23, 45, 43, 22]

// const a = function (){
//     const array = [12,23, 23, 45, 43, 22]
//     return array[2]
// }

// // const x = a()
// console.log(a())


const x = function (arr){
    return arr[2]
}
//console.log(x([12,23, 23, 45, 43, 22]))
const arr = [12, 88 ,99 ,77]
console.log(x(arr));

