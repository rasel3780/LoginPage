function loginValidation(){
    var userName = document.getElementById('userName').value;
    var pass = document.getElementById('password').value;

    if(userName==''){
        alert("Please Enter Username");
    }
    else if(pass==''){
        alert("Please Enter Password");
    }
    else{
        alert("Login successful");
    }
}