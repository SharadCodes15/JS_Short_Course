let tm = setTimeout(function(){
    console.log("After 5 sec")
},5000) // 1000 ==> 1s after it function runs
// Only once

let setintv = setInterval(function(){
    console.log("running for every 5 sec")
},5000) // 1000 ==> 1s after it function runs
// Always runs after 5 sec

clearInterval(setintv);
clearInterval(tm);

let count =10;
let intve = setInterval(function(){
    if(count >=0){
        count--;
        console.log(count+1);
    }
    else{
        clearInterval(intve);
    }

},1000)
