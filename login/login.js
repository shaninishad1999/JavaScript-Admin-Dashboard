// Add event listener to the login button
document.getElementById("login").addEventListener("click", display);

function display(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Get user input values and trim them to remove extra spaces
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Retrieve stored credentials from localStorage
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");
    console.log(storedEmail);
    console.log(storedPassword);

    // Input validation
    if (email === "") {
        document.getElementById("email").focus();
        alert("Email is required.");
        return;
    } else if (password === "") {
        document.getElementById("password").focus();
        alert("Password is required.");
        return;
    }

    // Check if the provided credentials match the stored ones
    if (email === storedEmail && password === storedPassword) {
        alert(`Login successful, welcome ${storedEmail}`);
        
        // Update user ID element before redirection
        const userIdElement = document.getElementById("changeUserId");
        if (userIdElement) {
            userIdElement.innerHTML = storedEmail;
        } else {
            console.error("Element with ID 'changeUserId' not found.");
        }

        // Redirect to a different page
        window.location.href = "/index.html";
    } else {
        alert("Incorrect email or password.");
    }
}

// Redirect to the signup page function
function clickHere() {
    window.location.href = '/sign-up/index.html';
}
