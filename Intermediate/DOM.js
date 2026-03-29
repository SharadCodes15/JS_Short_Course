// ------------OLD METHOD 

// let d = document.getElementById("heading1");
// console.log(d); // As a tag
// console.dir(d); // As a tree

// ------------New Method / modern 
let qur = document.querySelector('h1'); // One object 
console.log(qur);

let qurAll = document.querySelectorAll('h1'); // NodeList
console.log(qurAll);


// ------------ CHANGE TEXT 
let h1 = document.querySelectorAll('h1');
h1[0].innerText = "Hi Sam";
h1[1].innerHTML = "NAME";
h1[2].textContent = 'By Content'; // We can change anything from console.dir


// -------------- Attribute Manipulation
let a = document.querySelector("a");
a.href = "https://www.youtube.com"; 
let val = a.getAttribute('href');
console.log(val);

a.setAttribute("href","https://www.google.com");
a.removeAttribute("href"); 


// --------------- Dynamic DOM Manipulation

// 1) Create Element
let h12 = document.createElement("h1")
h12.innerHTML = "By JS";
// document.body.append(h12);
document.querySelector("body").prepend(h12);
// document.body.prepend(h12); // Before script
h12.remove();
// CreateElement appendChild append prepend

// -------------------Styling
let h13 = document.querySelectorAll('h1');
h13[0].style.color = "red";
h13[2].classList.add('hulu');

