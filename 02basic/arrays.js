//arrays

/*
const a = [1, 2, 3, 4, 5, "hello"]
console.log(a[3])

a.push(6, 8, 9, 4, 8, 5)
console.log(a)

a.pop();
a.shift()
a.unshift(23)


const b = [6, 8, 9, 4, 8, 5]
console.log(b.includes(8))

const array = b.join()
console.log(b); // converting array into string 
console.log(array);
console.log(typeof array);

*/


//slice   &    splice


const array2 = [1,2,3,4]
console.log("A" , array2)

// const c = array2.slice(1 , 3)
// console.log(c)

const x = array2.splice(2,1)
console.log(x);



let fruits = ['apple', 'banana', 'cherry', 'date'];
let slicedFruits = fruits.slice(1, 3);  // Takes items from index 1 to 2
console.log(slicedFruits);  // ['banana', 'cherry']
console.log(fruits);        // ['apple', 'banana', 'cherry', 'date'] (unchanged)


let fruits01 = ['apple', 'banana', 'cherry', 'date'];
console.log(fruits01);
fruits01.splice(1, 2, );  // Removes 2 items starting from index 1, and adds 'grape' and 'kiwi'
console.log(fruits01);  // ['apple', 'grape', 'kiwi', 'date'] (modified)

/*
Key difference:
slice() doesn't change the original array.
splice() modifies the original array.*/


const b = [6, 8, 9, 4, 8, 5]
console.log(b.includes(8))

const array = b.join()// converting array into string
console.log(b);  
console.log(array);
console.log(typeof array);
