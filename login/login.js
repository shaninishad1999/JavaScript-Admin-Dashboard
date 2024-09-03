document.getElementById("login").addEventListener("click", display);

function display(e) {
    e.preventDefault(); 


    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedemail = localStorage.getItem("email");
    let storedpassword = localStorage.getItem("password");

    
    if (email === storedemail && password === storedpassword) {
        alert(`Login Successful, welcome ${storedemail}`);
        window.location.href = "/index.html"; 
    } else {
        alert("Incorrect details"); 
    }
}
