document.getElementById("Submit").addEventListener("click", function(){
    const emailfield = document.getElementById("Email");
    const emailid = emailfield.value;

    const passwordfield = document.getElementById("Password");
    const password = passwordfield.value;

    if(emailid === "hello@gmail.com" && password === "12345"){
        // valid user
        window.location.href = "Transection.html";
        emailfield.value = "";
        password.value = "";
    }
    else{
        alert("your email/password not matched.Try again");
        emailfield.value = "";
        password.value = "";
    }
})