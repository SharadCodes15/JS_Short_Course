let val = fetch("https://randomuser.me/api/");
val.then(function(rowdata){
    // console.log(rowdata); // unreadable format
    return rowdata.json();
})

.then((data)=>{
    console.log(data.results[0].name);
})
val.catch((err)=>{
    console.log("error",err);
});


// fetch("https://randomuser.me/api/") // for one user
fetch("https://randomuser.me/api/?results=5")
.then((raw)=> raw.json())
.then((data) => console.log(data.results));


// -------------statusCodes 

/* 1xx: Informational (Request received, continuing process)

100 Continue
2xx: Success (Action successfully received, understood, and accepted)

200 OK: The standard response for successful HTTP requests.
3xx: Redirection (Further action needs to be taken)

301 Moved Permanently
304 Not Modified
4xx: Client Error (The request contains bad syntax or cannot be fulfilled)

400 Bad Request: The server cannot process the request due to client error.
401 Unauthorized: Authentication is required and has failed or not been provided.
403 Forbidden: The server understood the request but refuses to authorize it.
404 Not Found: The requested resource could not be found.
5xx: Server Error (The server failed to fulfill an apparently valid request)

500 Internal Server Error: A generic error message when the server encounters an unexpected condition. */

// ---------------- Form submission via fetch

let form = document.querySelector("form")
let name = document.querySelector("#name")
let email = document.querySelector("#email")

form.addEventListener('submit',function(evt){
    evt.preventDefault();
    fetch("url",{
        method:"POST",
        body : JSON.stringify({
            name,
            email,
        }),
    });
});