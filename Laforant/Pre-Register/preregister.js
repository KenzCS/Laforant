let register = document.getElementById('submit-btn');

register.addEventListener('click', e => {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password_confirmation = document.getElementById("password_confirmation").value;
    let date = document.getElementById('date').value;
    let country = document.getElementById('country').value;
    document.getElementById('agree').checked ;
    document.getElementById('agree').checked ;

// Bagian Validasi Username
    if(username === '') {
        alert('You Havent Entered An Username yet!!!');
    }
    else if(username.indexOf(" ") !== -1) {
        alert('Username Cant Have White Space!');
    }
    else if(username.length < 4) {
        alert('Your Username Is Too Short!!!');
    }
    else if(username.length > 20) {
        alert('Your Username Is Too Long!!!');
    }

    // Bagian Validasi Email
    else if(email === '') {
        alert('You Havent Entered An Email Yet!!!');
    }
    
    else if(email.indexOf(" ") !== -1) {
        alert('Email Cant Have White Space!');
    }
    else if(email.indexOf("@") === -1) {
        alert('Username Must Have @ Characters');
    }

    else if(email.indexOf(".") === -1) {
        alert('Email Must Have . Characters');
    }

    // Bagian Validasi Password
    else if(password === '') {
        alert('You Havent Entered A Password Yet!!!');
    }
    
    else if(password.length < 6) {
        alert('Your Password Is Too Short!!!');
    }

    else if(password.length > 15) {
        alert('Your Password Is Too Long!!!');
    }

    // Bagian Validasi Password Confirmation
    else if(password_confirmation != password){
        alert('Your Password Confirmation Must Be The Same As Your Password!!!');
    }
    
    // Bagian Validasi DoB
    else if(date === '') {
        alert('You Havent Entered Your Date Of Birth Yet!!!');
    }
    
    // Bagian Validasi Negara
     else if(country === '') {
        alert('You Havent Selected Your Region Yet!!!');
    }
    
    // Bagian Validasi Agree Terms
    else if(agree.checked == ''){
        alert("You Havent Agree To User Terms Yet!!!");
    }

    else {
        alert("Congratulations Your Pre-Register For Beta Test Is Completed!!!");
    }
});
