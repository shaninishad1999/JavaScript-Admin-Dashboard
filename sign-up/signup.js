document.getElementById("btn").addEventListener("click", add);

function add(e) {
  e.preventDefault();

  let fname = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let password = document.getElementById("password").value;
  let confirmpassword = document.getElementById("confirmPassword").value;

  if (
    fname === "" ||
    email === "" || 
    mobile === "" || 
    password === "" ||
    confirmpassword === ""
  ) {
    alert("All fields are mandatory");
    return;
  }

  if (password !== confirmpassword) {
    alert("Password doesnot match");
    return;
  }



  // set data to localstorage
  localStorage.setItem("fname", fname);
  localStorage.setItem("email", email);
  localStorage.setItem("mobile", mobile)
  localStorage.setItem("password", password);

  // redirect to login
  window.location.href = "/login/index.html";
  alert('user Register succesfull')
}