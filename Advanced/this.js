//  This keyword is a special keyword 
// the nature of other keyword remain same but !!! this keyword changes its 
// value or nature as per the requirement


// ------------- Global scope
console.log(this); // Window
// Window is the supreme

// --------------- Function
function aa(){
    console.log(this); // Window
}
aa();

// -------------- Method
let obj = {
    nn : "harsh",
    sayname : function(){ // Functin inside obj is called method
        console.log(this); // {nn: 'harsh', sayname: ƒ} this the full object here
        console.log(this.nn); // 'harsh'
    },
}
// This not work with arrow function as this will be window
// and if you make a fucntion inside the funct it should be arrow fucntion to retain
//  the value of ojbject otherwise it will be window
obj.sayname();


// -------------------- event handler
let h1 = document.querySelector('h1');
h1.addEventListener('click',function(){
    console.log(this); // where the addevent listener is appiled ie h1  <h1>HI</h1>
});


// --------------- Classes

class Adg{
    constructor(){
        console.log("heyhey");
        this.a = 23; // blank object when called with new
    }
}
let val = new Adg();                   
console.log(val); // Adg {a: 23}a: 23[[Prototype]]: Object


// ------------------------- Call Apply Bind
// we Can set the value of this while calling the function

let obj2 = {
    name : "sadfr",
};
// we want to give this value = obj2 
function ads(a,b,c){
    console.log(this.name,a,b,c); // {name:"sadsfa"};
}
ads.call(obj2,1,2,3); // Fucntoin is called
ads.apply(obj2,[1,2,3]) // Only two parameters obj2 and array
let fnc = ads.bind(obj2,1,2,3) // Cant run just give the other fucnfi
fnc();
