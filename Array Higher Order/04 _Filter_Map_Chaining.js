const nums = [1, 23 , 3,4 , 3 ,24 ,65 ,45, 67 ,69]
//we need to add 10 to each number

const newnums = nums.map((items) => items + 10)
console.log(newnums) // [11, 33, 13, 14, 13


/**********************************************  ChAINING  **********************************************/

const abc = [1,2,3,4,5,6,7,8,9,10]

const xyz = abc
                .map((items) => {
                    return items = items * 10
                })
                .map((items) => items + 1)
                .filter((items) => items >= 44)
console.log(xyz);



const coursesnames = [
    {
        name : "javascript",
        price : 999
    },
    {
        name : "java developer",
        price : 1999
    },
    {
        name : "data scientist",
        price : 12999
    }
]

const x = coursesnames.reduce((acc , itesm) => {
    console.log(acc);
    console.log(itesm.price);
    
    
    return acc + itesm.price} , 0)

console.log(x);


const numbers = [1,2,3,4,5,6,7,8,9];
let y = 0
const z = numbers.reduce((acc , items) => {
    return acc + items 
} , y)
console.log(z);
