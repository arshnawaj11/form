function validateform(){

const username = document.getElementById("username").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const password2 = document.getElementById("password2").value;


document.getElementById("name-error").innerHTML="";
document.getElementById("email-error").innerHTML="";
document.getElementById("password-error").innerHTML="";
document.getElementById("password-error").innerHTML="";


let isValid = true;

if (username === ""){
document.getElementById("name-error").innerHTML = "*username is not valid";
isValid = false;
}

if (email === ""){
document.getElementById("email-error").innerHTML = "*email is not valid";
isValid = false;

}

if (password === ""){
document.getElementById("password-error").innerHTML = "*password is not valid";
isValid = false;
}


if (password2 === ""){
document.getElementById("password2-error").innerHTML = "*password is wrong";
isValid = false;
}

return isValid;



}