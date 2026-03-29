// design patterns
/* Code should not be messy code can be of lack of line and it should be 
understandable for everyone

*/

// Module pattern
// 1----------> we write our code in self excuting function (IIFE) so that v
// varibles and function be private

// We return those things which is required outside

// Main advantage is encapsulation and clean structure so that code should be
// secure ,reusable and managable

// Imediately invoke function expressin
let Bank = (function sad() {
  let bankbalance = 23434200;
  function checkbal() {
    console.log(bankbalance);
  }
  function setbal(val) {
    bankbalance = val;
  }
  function withdraw(val) {
    if (val <= bankbalance) {
      if (confirm("Do confirm") == true) {
        bankbalance -= val;
        console.log("withdraw", val);
      } else {
        console.log("Not withdraw");
      }
    } else {
      console.log("Not amount efiiecinat");
    }
  }
  return {
    checkbal,
    setbal,
    withdraw,
  };
})();

// we cant write checkbal(); outside ie private
// we cant access it through console ie private

// ---------------------------Revealing Module pattern
// return {
//         check:checkbal,
//         set:setbal,
//         draw:withdraw,
// }

// ---------------------------- factory Fucntion Pattern

/* We make a function which create objects (factoryu = object maker) */

/* We make a simple function which makes objexts and return it without using class or new keywords  */

/* Creation of object and controlling through function */

/* everytime we call factory function we get a new obhect whcih has own methods(if we want) 
private data can be there*/

/* This pattern is speciatlly useful when we want many objects like users , product ,tasks */

function createProduct(name,price){
    let stock = 10;
    return {
        name,
        price,
        buy(qtn){
            if(qtn<=stock){
                stock -= qtn;
                console.log("booked",stock,"left");
            }else{
                console.log("Not may pices; max:",stock);
            }
        },
        refill(qtn){
            stock += qtn;
            console.log("refilled",stock,"now");
        }
    }
}

let iphone = createProduct("iphone",70000); // iphone own memory manage
// Everytime it will return new object
let kitkat = createProduct("kitkat",435334); // kitkat own memory manage



// -------------------------- Observer pattern
// youtube pattern subscribe

class YoutubeChannel{
    constructor(){
        this.subscriber = [];
    }
    subscribe(user){
        this.subscriber.push(user);
        user.update(user.name,"You have subscibed the channel")
    }
    unsubscribe(user){
        this.subscriber = this.subscriber.filter((sub)=> sub!=user);
        user.update(user,"You have unsubscibed the channel")
    }
    notify(message){
        this.subscriber.forEach((sub) =>
            sub.update(message)
        )
    }
}

class User{
    constructor(name){
        this.name = name;
    }

    update(us,data){
        console.log(us,data)
    }
}

let sheryians = new YoutubeChannel();
let user1 = new User("Sam");
let user2 = new User("Amit");


sheryians.subscribe(user1);
sheryians.subscribe(user2);
sheryians.notify("New video uploaded")


