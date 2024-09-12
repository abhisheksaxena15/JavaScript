// primitive datatype

/* 7 types :- 
    string , 
    number , 
    boolean , 
    undefined , 
    bigint , 
    null , 
    symbol */


// Referencre ( non - primitive)
/* array , objects , functions */




/* js is static or dynamic typed language */


/*  
@promahbubul
1 year ago
JavaScript is a dynamically typed language.
This means that variable types are determined at runtime, and
you do not need to explicitly declare the type of a variable before using it.
You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, 
and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, 
and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. 
Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness. */

const abc = Symbol('123');
const c = Symbol('123');

console.table([abc , c]);
console.log(abc === c);


/*

Primitive datatypes:

String - string
Number - number
Boolean - Boolean
Null - object(****)
Undefined - undefined
BigInt - bigint



/* Referencre ( non - primitive)
   array , objects , functions */

const h = ["array" , "array1" , "array2" , "array3"]

// {
//     name : "abhishek";
//     age : 29;
// }
const abhi = {
    name1: "abhishek",
    age1: 22,
}




const a = function(){
    console.log("hello world");
}

// console.table([h ,  abhi , a])
console.log(typeof h)
console.log(typeof abhi)
console.log(typeof a)


/*
Non-primitive datatypes:


Array - object
Function - function(object)
Object - object */


/*
stack ---> primitive
heap  ---> non primitive

stack give the copy but hea giue the reference , 
changes occur in the copied dt <----- stack
changes occur in the the actual value , give the reference <--- heap*/