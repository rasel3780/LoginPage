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
        alert("Login successful..");
    }
}

function showPassword(){
    var pass = document.getElementById('password');
    if(pass.type === 'password'){
        pass.type = 'text';
    }
    else{
        pass.type = 'password';
    }
}