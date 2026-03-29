// debouncing -- > when we type on the amazon after we stop for a while search 
// suggestion becomes visible
/* We are doing any action and we dont want to run a function every time 
but we want to run after a user stops */


// throtling --> for every time interval we have to the thing but when it 
// stops we have to stop

// ---------------- Debouncing

function debounce(fnc,delay) {
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(function(){
            fnc(...args);
        },delay);
    };
};

let val = document.querySelector('input')
val.addEventListener('input',debounce(function(){
    console.log(val.value);
    },1000)
);

// but i dont want to update everytime i enter 

//
// --------------------------- throttle
// Run ont the interval and action is continuois and interval is given and 
// in that interval event will run

function throttle(fnc,delay){
    let timer = 0;
    return function(...args){
        let now = Date.now();
        if(now - timer >= delay){
            timer = now;
            fnc(...args)
        }
    }
}


let val2 = document.querySelector('input')
val2.addEventListener('input',throttle(function(){
    console.log(val2.value);
    },1000)
);

