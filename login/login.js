document.getElementById("login").addEventListener("click", display);

function display(e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // store data in local storage
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");
    let loginButton = document.getElementById('login');
   

    // login  validation 
    if (email === "") {
        document.getElementById("email").focus();
        alert("Email is required.");
        return;
    }else if (password === "") {
        document.getElementById("password").focus();
        alert("Password is required.");
        return;
    }

   
    if (email === storedEmail && password === storedPassword) {
        alert(`Login successful, welcome ${storedEmail}`);
        window.location.href = "/index.html";
    } else {
        alert("Incorrect email or password.");
    }
}

// Redirect to the signup page function
function clickHere() {
    window.location.href = '/sign-up/index.html';
}






