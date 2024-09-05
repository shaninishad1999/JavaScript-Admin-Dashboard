document.addEventListener("DOMContentLoaded", function() {
    // Select elements
    var showdashboard = document.getElementById("dashboard");
    var showTableList = document.getElementById("show-table");
    var insert = document.getElementById("form");
    var updateTable = document.getElementById("update-table");
    
    // Initial state
    insert.style.display = "none";
    updateTable.style.display = "none";
    showTableList.style.display = "none";
    showdashboard.style.display = "block";
    
    // Functions to control visibility
    function insertTable() {
        showdashboard.style.display = "none";
        insert.style.display = "block";
        updateTable.style.display = "none";
        showTableList.style.display = "none";
    }
    
    function update() {
        showdashboard.style.display = "none";
        updateTable.style.display = "block";
        insert.style.display = "none";
        showTableList.style.display = "none";
    }
    
    function showTable() {
        insert.style.display = "none";
        updateTable.style.display = "none";
        showdashboard.style.display = "none";
        showTableList.style.display = "block";
    }
    
    function dashboard() {
        showdashboard.style.display = "block";
        insert.style.display = "none";
        updateTable.style.display = "none";
        showTableList.style.display = "none";
    }
    
    // Expose functions to global scope if necessary
    window.insertTable = insertTable;
    window.update = update;
    window.showTable = showTable;
    window.dashboard = dashboard;
});




function fun() {
    let sidebar = document.getElementById("sidebar");  // Get the sidebar element

    if (sidebar.style.display === "none" || sidebar.style.display === "") {
        sidebar.style.display = "block";  // Show the sidebar
    } else {
        sidebar.style.display = "none";  // Hide the sidebar
    }
}


// logout code 
// Logout function
function logout() {
    var confirmLogout = confirm("Do you want to logout?");
    if (confirmLogout) {
   
        window.location.href = "/login/index.html"; 
        
        window.onpageshow = function(event) {
            if (event.persisted) {
                window.location.reload();
            }
        };
    }
}






