 const score = 400
 console.log(score);

 const number = new Number(2000)
console.log(number);
console.log(number.toString())
console.log(number.lenght) 
// thia ccannot be sed coz itr will give undefined as we are checking the length 
//of the number and number datatype do not contain anytype of length function so 
//we are coverting it into string to check the length of the numnber
console.log(number.toString().length)



const n = Number(122.3435434)
console.log(n.toFixed(3));
//122.344


const y = Number(122.3435434)
console.log(y.toPrecision(3)); //122

const u = Number(122.5435434)
console.log(u.toPrecision(3));//123

const w = Number(122.4535434)
console.log(w.toPrecision(4));//122.5