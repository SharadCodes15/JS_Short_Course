// map ---> run on the top of the array . all array element goes into map
// map returns a new array with return is placed



const arr = [1,2,3,4,5];

function myMap(arr,callback){

    let  newarr = [];
    for (let i = 0; i < arr.length; i++) {
        newarr.push(callback(arr[i],i,arr));
    }
    return newarr;
}


let ans = myMap([1,2,3,4,5],(num)=>num+2);
console.log(ans);