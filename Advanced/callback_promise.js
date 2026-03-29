/* As per the natural pattern the code run line by line , in js also
but in some cases code waits and in that interval  another code runs
*/

// console.log('hey1');
// console.log('hey2');
// console.log('hey3');
// setTimeout(() => {
// console.log('hey4');
// }, 2000);
// console.log('hey5');
// console.log('hey6');

// --------------------- sync and async
// Sync --> line by line
// Async --> run when it is ready

// ----------------__Callback()
function runaftersometime(fnc) {
  setTimeout(fnc(), Math.floor(Math.random() * 10) * 1000);
}
runaftersometime(function () {
  console.log("hey");
});

// a function given to the other function as parameter then it is
// called the callback

function bringfood(food, cb) {
  // this code is anywhere in the world
  setTimeout(() => {
    cb({ food });
  }, 2000);
}
bringfood("aloo", function (fooddata) {
  console.log(fooddata);
});

// callback hell
// Conceptual structure of Callback Hell
// getData(userId, function (user) {
//   getProfile(user.id, function (profile) {
//     getPosts(profile.username, function (posts) {
//       getComments(posts[0].id, function (comments) {
//         console.log(comments);
//         // This nesting continues...
//       });
//     });
//   });
// });


// ----------------------------Promise
// Promises 
// we make a promise which can go into one state out of two and it can be rejected or resolved . 
// but we have to write code for the both

let pr = new Promise(function(res,rej){
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    if(rn>5) res(rn);
    else rej(rn);
  }, 1000);
})

// if resolved 
// pr.then(function(val){
//   console.log("resolved",val);
// })

// // if rejected
// pr.catch(function(val){
//   console.log("rejected",val);
// })


// ------------- Async await error and try catch
async function acds() { //asyn so await can be used 
  try{
    let cal = await pr; // await means wait till pr until full answer cames
    console.log("resolved",cal);
  }
  catch(err){
    console.log("rejected",err)
  }
}
acds()
