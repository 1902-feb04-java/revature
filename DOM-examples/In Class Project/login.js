"use strict"


var username = document.getElementById("user");
var password = document.getElementById("password");

function validateForm(form){

    console.log(form.password.value);

    if(!validatePassword(form.password.value)) {
        
        alert("The password you have entered is not valid!");
        document.getElementById("message").style.display = "block";
        form.password.focus();
        return false;
    }
    return true;
}

function validatePassword(str){
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return strongRegex.test(str);
}