// Avoid unnessary reflow and repaints

// every time change html or css via js full html get reloaded or DOM reloaded 
// No direct changes in the DOM / full tree refresh

const ul = document.querySelector("ul");
for(let i = 0;i<0;i++){
    const li = document.createElement('li');
    li.textContent = i;
    ul.append(li);
}

// this is the very slow method 
// every time appending each i DOM is refreshing 
// laggy page

// ----------- memory space
const space = document.createDocumentFragment(); // create a space in memory add into space
for(let i = 0;i<200;i++){
    const li = document.createElement('li');
    li.textContent = i;
    space.append(li);
}
ul.appendChild(space)
// we cant see all 200 element so we never append all 200 so it is like lazy loading


