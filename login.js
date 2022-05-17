var storedName = localStorage.getItem('username');

function ValiName() {
    var userName = document.getElementById("fname");
   var errorName = document.getElementById('erorName')
    if (!userName.value.match(/^[a-zA-Z]*\s{1}[a-zA-Z]*$/)) {
        errorName.innerText = "please Enter full Name";
        errorName.style.color='red';
                 userName.style.border="Solid  5px red";
                 userName.focus();
             return false;
    }
    else {
        errorName.innerHTML = "valid";
        userName.style.border="Solid  5px green";
        errorName.style.color='green';
        // document.cookie = "username=" + userName.value;
        localStorage.setItem('username',userName.value);
        return true;
    }

}

function valiEmail() {
    var userEmail = document.getElementById("idemail");
    var errorEmail = document.getElementById('erorEmail')
    if (!userEmail.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
        errorEmail.innerText = "invalid Email ";
        errorEmail.style.color='red';
        userEmail.style.border="Solid  5px red";
        userEmail.focus();
        return false;
    }

    else {
        errorEmail.innerText = "valid";
        // userEmail.style.border = "Solid 5px green";
        errorEmail.style.color='green';
        // document.cookie = "email=" + userEmail;
        localStorage.setItem('email', userEmail.value );
        return true;


    }


}

function valiPass(){
    var passUser = document.getElementById("pass");
    var errorPass = document.getElementById("erorPass");
    if(!passUser.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/))
    {
        errorPass.innerText = "error";
        errorPass.style.color='red';
        passUser.style.border="Solid  5px red";
        passUser.focus();
        return false;
    }
    
    else
    { 
        errorPass.innerHTML = "valid";
        passUser.style.border = "Solid 5px green";
        errorPass.style.color='green';
        // document.cookie = "password=" + passUser.value;
        localStorage.setItem('password', passUser.value);
        return true;


    }
}


function validatioTotal()
{
    var registerEror = document.getElementById('butt')

    if(!ValiName() || !valiEmail()  ||  !valiPass())
    {
  
        registerEror.style.display = "block";
        registerEror.innerText = "please fix the errors to submit";
        // setTimeout(function(){
        //     registerEror.style.display = "none";
        // },4000)
        return false;
    }
    else
    {
       
        window.open("login.html");
        return true;
    }

}



var eName = document.getElementById('erorLoginName')
var errorPass = document.getElementById("erorLoginPass");



 function check()
 {
    var fName = document.getElementById("checkuser");
    var password = document.getElementById("passaaa");
  
    var storedPassword = localStorage.getItem('password');

    if(fName.value != storedName)
    {
       eName.innerText = "invaild userName please sign Up";
        eName.style.color='red';
                 fName.style.border="Solid  5px red";
        fName.focus();
        return false;

    }
    else if(password.value != storedPassword)
    {
        eName.innerText = "vaild userName ";
        eName.style.color='green';
        fName.style.border="Solid  5px green";
        errorPass.innerText = "error password";
        errorPass.style.color='red';
        password.style.border="Solid  5px red";
        password.focus();
        return false;

    }
    else 
    {
       

        errorPass.innerText = "valid";
        errorPass.style.color='green';
        password.style.border="Solid  5px green";

        window.open("home.html");
        return true;
    }


    
    

 }


