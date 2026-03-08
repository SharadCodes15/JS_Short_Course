let arr = [234,456,456,243,436,34,234,45,456];
console.log("-------- For loop ------")
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log("-------- ForEach loop ------")
arr.forEach(function(element){
    console.log(element);
})


console.log("-------- While loop ------")
let j =0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}


console.log("-------- do while loop ------")
let k =0;
do{
    console.log(arr[k]);
    k++;
}while(k<arr.length)


// Break and continue is used to as name declares

