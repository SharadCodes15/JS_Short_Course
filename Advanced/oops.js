// Let take a example of game having the 5 members 
// A shooting game contain the health bar
// But the health bar has the same characteristic for each person 
// 
// same like a model having many followers
// 



function createPencil(name,price,color,company){
    this.name = name;
    this.price = price;
    this.color = color;
};
createPencil.prototype.company = "VNTI"; // good memory optimisation
// write is the method 
// and this under a method hence it this == > obj 
createPencil.prototype.write = function(text){ // shared memory 
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.append(h1)
};
let penc1 = new createPencil("apsara",23,"black","apsara")

// if our ocnstructior attaches any field to prototype ,
// Then then from that contstructor new instances are made means that field 
// goestt ot objects

class createpen{
    constructor(name,price,color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }
    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.append(h1)
    }
}


class Admin extends createpen{
    constructor(name,price,color){
        super(name,price,color);
        this.role = 'admin';
    }
    remove(){
        document.querySelectorAll("h1").forEach(function(elem){
            elem.remove();
        })
    }
}

let p1 = new createpen("cello",10,"Blue");
let a1 = new Admin("admin",3,'red');

// -----------classical inheritance == java cpp
//  classes banana and extend it

// Inheritance - class  -- > class / Other

// prototypal inheritance - object -- > object

let coffee = {
    color : "dark",
    drink : function(){
        console.log("gut gut gut");
    }
}

let coldcoffee = Object.create(coffee);
coldcoffee.temp = -18;
console.log(coldcoffee); // connected by prototype

let a = {};
let b = Object.create(a); // like inheritance of a in b
let c = {...a};


