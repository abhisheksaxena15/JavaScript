//foreach - donot return vaslues

/*har baar array ki value print thodi karana hota hai 
sometimes we return and sometimes we print */

//filter -->>>> return the values

const mynum = [1,2,3,4,5,6,7,8,9,10]

const x = mynum.filter((num) => {
    return num > 4
})
console.log(x);

 
//now i want to return values by using FOREACH


const a = [12,23,34,45,56,67,78,89,90]
const newarray = []

a.forEach((items) => {
    if(items > 60){
        newarray.push(items)
    }
})
console.log(newarray);

//both the mthod can be used both will give yiou answers but in foreach in such casaes for returning we have to apply some logic



const books = [
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
];

console.log("**********************by Filter******************");

let username = books.filter((items) => { 
    return (items.genre === 'Science' && items.publish >= 2000)
})
console.log(username);

console.log("**********************by forEach*****************");

const newbooks = []
books.forEach((bk) => {
    if(bk.genre === 'Science'){
        newbooks.push(bk)
    }
})
console.log(newbooks);