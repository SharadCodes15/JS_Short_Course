// 2000 line code at a time get loaded means time on loading page

const btn = document.querySelector("button");
btn.addEventListener("click",async function(){
    let heavy = await import('./heavy.js');
    heavy.veryHeavy();
})
