let img = document.querySelectorAll('img');

const observer = new IntersectionObserver(function(entries,observer){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            const img1 = entry.target;
            img1.classList.add("loaded")
            img1.src = img1.dataset.src;     //data-src
            observer.unobserve(entry)   
        }
    })
},{
    root:null,
    threshold:0.1,
});

img.forEach((img) => {
   observer.observe(img); 
});