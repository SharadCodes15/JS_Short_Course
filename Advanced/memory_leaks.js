let count = 0;
const intv = setInterval(()=>{
    if(count<10){
        count++;
        console.log(count);
    }
    else{
        // console.log("still running")
        clearInterval(intv);
        console.log("finished")
    }
},1000)

// This timer is still running but not showing beacuse of if and going into else 
// hence alwassy clear interval



// UX === > user experience 