const name = "abhishek saxena"
const age = 37

console.log(name + age + "abhi")

// string interpolation

console.log(`my name is ${name} and i am ${age} years old`)


const newname = new String(`abhishek saxena`)
console.log(newname)
console.log(newname.__proto__) // gives many funcions can check in console as well
console.log(newname.length) //various funcitions provided 
console.log(newname.toUpperCase())
console.log(newname.charAt(3))
console.log(newname.indexOf('s'))

const nameone = newname.substring(3, 8)
console.log(nameone)                    // we cannot start with the negative index in substring(), it will itself intitiate with 0.


const nametwo = newname.slice(-8, 15)
console.log(nametwo)


const a = "abhishek     saxena   "
const b = "     abhishek saxena   "
console.log(a.trim()) // removes leading and trailing spaces noyt the white spae in btween
console.log(b.trim()) 
console.log(a)

let abc = "https://github.com/abhishek%20sxaena"        // to replace anything in the url  we will replace()
console.log(abc.replace("%20" , "-"))
console.log(abc.includes("abhishek"));
console.log(abc.includes("abhinav"));



const x = "hello my nameis abishek saxena i am from bareilyy and i have compoeted my schooling from delhi public school"
console.log(x.split("-")) // splits the string into array of words