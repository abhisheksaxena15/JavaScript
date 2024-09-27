const arr02 = ["java" , "cpp" , "python" , "ruby"]

// arr02.foreach(funciton return type){}

arr02.forEach( function (value) {
    //console.log(value);
    
})
console.log("***************************");

arr02.forEach( (item) => {
    console.log(item);
    
})
console.log("***************************");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function languages(item) {
    console.log(item);
}
arr02.forEach(languages);
console.log("***************************");


///////////////////////////////////////////objects inside arrays***/////////////////////////////////////////////////////////////////////////////////////////////
const array01 = [
    {
        langname: "c++",
        langversion: "cpp11",
    },
    {
        langname: "JavaScript",
        langversion: "JS",
    },
    {
        langname: "Python",
        langversion: "Py ",
    }
]

// for getting the varibale inisde object which is itself inside an array




array01.forEach( (items) => {
    console.log(items.langversion);
    
})

//for each ------> never return any values

/*har baar array ki value print thodi karana hota hai 
sometimes we return and sometimes we print */