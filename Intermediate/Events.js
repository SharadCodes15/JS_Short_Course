// Anything we do by input options ie any action .
// Any rection for the same is called the Event handling

// ----------- Click
let h1 = document.querySelectorAll('h1');
h1[0].addEventListener("click",function(){
    h1[0].style.color = "red";
})

// click dbclick 

// ----------- Input Event
let inp = document.querySelector('input');
inp.addEventListener("input",function(e){
    console.log(e);
    console.log("Typed",e.target.value);
    console.log((e.target.value).length);
});



// -------------- Change
let sel = document.querySelector("select");
let h3 = document.querySelector("h3");
sel.addEventListener("change",function(e){
    console.log(e);
    console.log(e.target.value);
    h3.innerText = `${e.target.value} is selected`;
});


// ---------------- Keypress
let text = document.querySelector(".Keyboard");
window.addEventListener("keydown",keyp);
function keyp(e){
    if(e.code === "Space"){
        text.innerText = `Space`;    
        console.log("space");

    }
    else{
        text.innerText = `${e.key}`;
        console.log(e.key);
    }
}

let btn = document.querySelector(".btn");
let fileinp = document.querySelector("#filename");

btn.addEventListener("click",function(){
    fileinp.click();    
})
fileinp.addEventListener("change",function(e){
    if(e.target.files){
        console.log(e.target.files[0].name);
        btn.innerText = `${e.target.files[0].name} Selected`;
    }
})



// ------------Submit
let form  =  document.querySelector("form");
let forminp = document.querySelectorAll("input");
form.addEventListener("submit",function(e){
    e.preventDefault();
    // console.log(e);
    console.log(forminp[2].value ,forminp[3].value, forminp[4].value);
}); 


// ----------- Mouse Move
let div = document.querySelector(".btn");
div.addEventListener("mouseover",function(){
    div.style.backgroundColor = 'red';
});
div.addEventListener("mouseout",function(){
    div.style.backgroundColor = 'blue';
});

// Move the div with mouse
// window.addEventListener("mousemove",function(e){
//     // console.log(e);
//     console.log(e.clientX,e.clientY);
//     div.style.top = e.clientY + "px";
//     div.style.left = e.clientX + "px";
// });

// -----------Event objects
// fucntion(e){}  This e is called event object
// Target is the thing which is clicked
// Type = > We clicked hence type="click";
// preventDefault() == > Dont reset the poge


// ------------- Event bubbling and Event Captureing and Delegation

// Our listerner will find the listener on the parent if we clicked event 
// on the element but no eventlisterner associated with it

// main div
//      nav div
//          links
//              button

// If no event on button then it'll go on the parent nav then if not on nav then main


// !!!! Insted of applying event listener on the each li we will apply on the ul which is the parent of li

let ul = document.querySelector("ul");
ul.addEventListener('click',function(e){
    // console.log(e);
    // alert("click");
    // e.target.style.textDecoration = "line-through";
    e.target.classList.toggle('lt')
})


// ------------ Event Capturing -Rare-

// Reverse of Bubbling means it goes child to child downwards
// When we raise any event the our event flow / Propagation is done in two phases
// 1: Event goes from top to bottom 
// 2: Event goes from Bottom to top

// Phase 1 happens first 
// How to activate capture phase  in the event listner last },true);
// then the True marked will run 
