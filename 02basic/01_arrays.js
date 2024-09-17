const a = ["hero", "another", "name"]
const b = ["handsome", "hey", "hello"]
/*
a.push(b)   
console.log(a);
console.log(a[3][2]);
 


let x = a.concat(b)
console.log(x);
*/

//    spread


const y = [...a, ...b]     //... --> coverts the elements of arrays as single elements
console.log(y);

//    flat
//{ creates a newa array wiht all the sub array elements as a mew array}

const anotherarray = [3, 5, 6, 7, [7, 8, 9, 7], [8, 9, [4, 2]]]

const realarray = anotherarray.flat(Infinity)
console.log(realarray);


console.log(Array.isArray("abhishek"));
console.log(Array.from("abhishek"));
console.log(Array.from({name: "abhishek"})); /**************interresting*********/

// it will an empty array , we have to specifiy .... keys to arrays or value to arrays 






//array    .is   .of   .from


let m , l , c;
m = 10
l = 200
c = 489

console.log(Array.of(m ,l ,c))