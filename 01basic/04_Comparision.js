console.log("2" > 4)
console.log("2" < 4)
console.log("2" == 4)


console.log(null > 0)
console.log(null < 0)
console.log(null == 0)
console.log(null >= 0)

console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined == 0)
console.log(undefined >= 0)
/* it is in consistance , coz sometimes it is considering null as , NaN , 0 or empty  while comparision*/
/* null here in js is sometimess converting into NaN 0 */
/* comparision operator and equality operators works diffrently in javascript makiking it inconsistance */

// strict check , check not only the values but also checks the dtatype
console.log("3" === 2)
console.log("3" === "3")
console.log(0 === 2)


