// ----------------------call stack(execution stack)


/* 
Js is single threaded = one at a time;
when we call a function then it goes on the top of the stack
after completion of function it get erased

*/

//------------------- Web api
// console setTimeout setInterval is not part of js
// given by browser-----


//------------------- Event loops

// syncronous(line by line) and asyncronous(completion order all at a time) 

 
setTimeout(() => {
    console.log("hey 1000 1st")
}, 1000);
setTimeout(() => {
    console.log("hey 600 2nd")
}, 600);

setTimeout(() => {
    console.log("hey 3000 3rd")
}, 3000);
setTimeout(() => {
    console.log("hey 5000 4th")
}, 5000);

// webapi settimeout
/*  after completion it goes into callback queue  
ST -5s behind the scence runs and on the task queue (callback queue)
waiting in the task queue after callstack become empty then 
event loop send ST into call stack
*/

