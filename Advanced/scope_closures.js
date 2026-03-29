// ---------------------- Scope

// function abcd(){
    // let a = 19;
// }
// console.log(a); //  Cant access the a from fucntion


// Function Scope
//          -- accesible only inside the function
// Global scope 
//          -- Accecsible everywhere
// Block scope 
//          -- only inside {}



// ---------------------- Execution context
// Every time the js sees the function it make a execution context.
// This is the procces which includes Memory phase
//                                    Execution phase

// like the stack of c 
 

// -------------------- Lexical scope and Dynamic scope
// js = lexical scoping 
// Not in js = Dynamic scoping

//  Imagin living in Village 1/3 And want washing machine from village 2/3
//  You should have permission to go in to 2nd village
//  lexicaly ====== > Physical  

// ----------lexical 
function ad(){
    let b = 21;
    function df(){
        console.log(b);
    }
}

// ----------Dynamic
// from where are you calling it depend on it

let a = 3;
function asdfsdf(){
    console.log(a); // as lexical scoping hence a = 3 as a=3 global
}
function sdaf(){
    let a = 324;
    asdfsdf(); //  in the dynamic scoping a in asdfsdf will be 324;
}
sdaf();





// ------------------- Closures and how variables are preserved
// closures are functions which are inside parent fucntion and 
// inner function is returning and returning fucntion  is using parent functions 
// variable

function ewr(){
    let aa = 34;
    return function(){
        console.log(aa);
    };
};
/// Variable can be private
// Global pollution

// how aa is preserved when you call wer(); after returning the fucntion the stack of wer()
// get deleted hence no 'aa' so how aa is in the consolelog

// but when you make a closure hence it makes backling and its name is [[environmenta]]



// ---------------------------- Private counters 
function countForMe(){
    let c =0;
    return function(){
        c++;
        console.log(c);
    };
};
let fnc = countForMe();
fnc(); // 1
fnc(); // 2
fnc(); // 3
// let fnc = countForMe();
// fnc(); // 1  
// fnc(); // 2





// ------------------------------------ Encapsulation
// limit counter code  
// cant change the value of click outside the function

