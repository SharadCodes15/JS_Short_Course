// Array Methods

let arr = [23,53,'Name',null,true,0]
arr.forEach(function(elem){
    console.log(elem);
})


// Methods
console.log(arr.length); // ----> 6
arr.pop(); //-----> remove last elem
arr.push("Harry"); //--------------> Append harry at last
arr.shift(); //---------->Remove first elem indx 0
arr.unshift("sam"); //---------->ad sam first elem indx 0
console.log(arr.unshift("sam")); //------>Return the length
arr.toString(); //------> Convert to strings
arr.sort(); // ---------> Sort the array but not value wise
            // [1,234,245,45,56,6]

            
 
console.log("---------after oparations----------");
arr.forEach(function(elem){
    console.log(elem);
})