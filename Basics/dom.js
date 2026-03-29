// Acess the element of page

let elem = document.getElementById("btn");
document.getElementById("btn").click();
document.getElementById("btn").style.border = "2px solid red";
document.getElementById("btn").style.padding = "20px";


console.log("Working");
console.log(document.getElementById("btn"));

let elemclass = document.getElementsByClassName("cont")
console.log(elemclass)
// Add class to elem
elemclass[0].classList.add("red")

// remove class
// elemclass[0].classList.remove("black")

console.log(elem.innerHTML);
console.log(elem.innerText);

console.log(elemclass[0].innerHTML);
console.log(elemclass[0].innerText);

let p = document.getElementsByTagName("p");
console.log(p[0].innerText);

createdelem = document.createElement("a");
createdelem.innerText = "url by a";
p[0].appendChild(createdelem);



