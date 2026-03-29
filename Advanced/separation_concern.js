const btn = document.querySelector("button");
const ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    const num1 = Math.floor(Math.random()*10);
    const num2 = Math.floor(Math.random()*10);
    let ans = add(num1,num2);
    let li = document.createElement("li");
    li.textContent = ans;
    ul.appendChild(li);

})

// This code is bad structured ie DOM and logic is mixed


function add(num1,num2){
    return num1+num2;
}