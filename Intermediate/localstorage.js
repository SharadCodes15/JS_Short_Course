// localStorage --> Storing data in the browser with saving 

// Sessionstorage --> Store data temporarily 

// Cookies  --> Data store in cookies properties . light data

// CRUD 
//----------------------- local Storage
// ~5MB
localStorage.setItem("name","sam");
let val = localStorage.getItem("name");
localStorage.setItem('ages',[3,5,2,123,"name",5,2,{"adsf":"rew"}]);
let val2 = localStorage.getItem("ages"); // return not good > 3,5,2,123,name,5,2,[object Object]
// We can convert the obj into string by JSON
console.log(val);
console.log(val2);
localStorage.setItem('ages2',JSON.stringify([3,5,2,123,"name",5,2,{"adsf":"rew"}]));
let val3 = localStorage.getItem("ages2"); // return good > [3,5,2,123,"name",5,2,{"adsf":"rew"}]
let parsed = JSON.parse(val3);
console.log(val3);
console.log(parsed);
localStorage.removeItem("name");




//----------------------- Session Storage
// ~5MB
sessionStorage.setItem("name",'sam'); // Temporary
sessionStorage.clear();


// ----------------------- Cookies
// ~4kB
// On reload the date of cookies will go to the server like theme language

// reload ==> Make request to the server again 

document.cookie = "email=sam@23gdsfmaadfiladsf.com";
document.cookie = "name=samad";

// >> document.cookie
// >> 'email=sam@23gdsfmaadfiladsf.com; name=samad'
 