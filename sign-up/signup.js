document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let fname = document.getElementById("fname").value.trim();
  let email = document.getElementById("email").value.trim();
  let number = document.getElementById("number").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  // Validate first name
  if (fname === "") {
      alert("Please fill  Full Name");
      document.getElementById("fname").focus();
      return;
  }

  // Validate email
  if (!email.includes('@') || !email.includes('.')) {
      alert("Please enter a valid email address.");
      document.getElementById('email').focus();
      return;
  }

  // Validate phone number
  if (isNaN(number) || number === "" || number.length !== 10) {
      alert("Please enter a valid 10-digit number");
      document.getElementById('number').focus();
      return;
  }

  // Validate password
  if (!password.match(/[!@#$%^&*()]/)) {  // Check for special characters
      alert("Password must contain at least one special character.");
      document.getElementById('password').focus();
      return;
  }

  // Validate password confirmation
  if (password !== confirmPassword) {
      alert("Passwords do not match.");
      document.getElementById('confirmPassword').focus();
      return;
  }

  // If all validations pass, store data in localStorage
  localStorage.setItem("fname", fname);
  localStorage.setItem("email", email);
  localStorage.setItem("mobile", number);
  localStorage.setItem("password", password);

  alert("Registration successful!");
  window.location.href = "/login/index.html";
});

function refer(){
  window.location.href="/login/index.html";
}