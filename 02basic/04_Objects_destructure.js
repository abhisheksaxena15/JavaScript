const course  = {
    coursename : "js user in hindi",
    price : "999",
    duration : "2 hours",
    courseinstructor: "abhishek saxena"
}


// when we have to print coursre.courseinstructor agin and again 
//or some opthervalue again and again

const {price} = course
console.log(price)


const {courseinstructor:instructor} = course
console.log(instructor)
///seeems like courseimstructor is a big name tio call again and again ,
// now , we ll destructure it  { courseinstructor : instructor}
// consople.log(instructor)