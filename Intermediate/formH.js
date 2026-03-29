let nm = document.querySelector("#name");
let form = document.querySelector("form");


form.addEventListener("submit",function(e){ // form will submit fist and then checking
    e.preventDefault();
    if(nm.value.length < 5){
        alert("Name must be greater than 5 letters")
        document.querySelector("#hide").style.display = "initial";
    }else{
        document.querySelector("#hide").style.display = "none";
    }

    // js validation also can be bypassed so backend validation and DB validation
    // Such layers should be there

    // Regex
    // ChatGPT

    const emailRegex = "/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;";
    let anss = emailRegex.test("dj@l.i")
    console.log(anss);


})