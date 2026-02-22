const form = document.getElementById("myForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    const error = document.getElementsByClassName("error");

    for(let i=0; i<error.length; i++){
        error[i].innerText = "";
    }

    let valid = true;

    if(name === ""){
        error[0].innerText = "Name is required";
        valid = false;
    }
    else if(name.length < 3){
        error[0].innerText = "Name must be at least 3 characters";
        valid = false;
    }

    if(email === ""){
        error[1].innerText = "Email is required";
        valid = false;
    }
    else if(!email.includes("@") || !email.includes(".")){
        error[1].innerText = "Enter a valid email";
        valid = false;
    }

    if(number === ""){
        error[2].innerText = "Phone number required";
        valid = false;
    }
    else if(number.length !== 10 || isNaN(number)){
        error[2].innerText = "Enter valid 10 digit number";
        valid = false;
    }

    if(password.length < 6){
        error[3].innerText = "Password must be at least 6 characters";
        valid = false;
    }

    if(confirmPassword !== password){
        error[4].innerText = "Passwords do not match";
        valid = false;
    }

    if(valid){
        alert("Registration Successful ✅");
        form.reset();
    }
});