// ----------------------function statement
function dance() {
    console.log("Hi");
}
dance();

// ----------------------function Expression
let fx = function(){
    console.log("Function in variable");
}
fx();

//----------------------Fat Arrow Function
let faf = ()=>{
    console.log("Fat arrow function");
}

// ----------------------parameters
function d(v1,v2){
    console.log(`${v1} and ${v2} is dancing`);
}

d('raha','kaha');




// -----------------------First class functions ---> Functions can be treated as values

let fool = function(){
    //code
}

function abcd(val){
    console.log(12 + val());
}

abcd(function(){
      return 12;
});
// OUTPUT === 12;

// -----------------Higher order Functions --> return a function or accept a function as paramerter

function abcd(val){
    console.log(12 + val());
}
abcd(function(){
      return 12;
});

// OR
function aa(){
    return function(){
        
    }
}

aa()()// first to run the aa then () for return function


// ------------Pure vs Impure

// PURE--> function which will not change the value outside functions
function foo(){
    console.log("hjiell");
}
// Not changing the value

// and  a++ in it will change it

//-------------- Closures 

// function which return another function . returned function will use the variable of parent function

function asd(){
    let a = 10;
    return function(){
        console.log(a);
    }
}

asd()();

// ------------------Lexical scoping
function a(){
    let aaa = 12;
    function b(){
        let bbb = 13;
        function c(){
            let ccc = 14;
        }
    } 
}


// --------------IIEF 
(function(){


})();  //imendiately invoke funcntion expresion , no need to call

// -----------------Hoisting 
// We can run with out defining means call before
// if you make a expression for it ie variable you cant access it



// ...OPARATOR -- .> Array
function ll(...val){
    console.log(val);
}
ll(2,3,3,123,6,3,2,1,65,4)


// Question 1

// add scores 
function scores(...val){
    let total = 0;
    val.forEach(function(val){
        total += val;
    })
    return total;
}

let total = scores(1,2,4,4,5,6,7,8,19);
console.log(total);

// -----------------------With objects
let shery = (function(){
    let sc = 0;
    return{
        getscore: function(){
            console.log("SCORE");
        },
        setscore: function(){
            console.log("SET");
        },
    };
})();

//