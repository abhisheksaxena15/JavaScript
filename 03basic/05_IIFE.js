//Immediately Invoked Function Expression [ IIFE ]
//named iife , parameter iife , unnamed iife


(function xyz(){              //-------> Name iife
    console.log("hello welcome to my channel");
})();



(() => {
    console.log("hello son i am your dad");
})();



(function(name){               //-----> Parameterized iife
    console.log(`${name} hello welcome to my channel`);
})(
    "abhishek"
);




((name) => {                    //-----> Parameterized iife
    console.log(`${name} hello welcome to my website`)
})("abhishek saxena")