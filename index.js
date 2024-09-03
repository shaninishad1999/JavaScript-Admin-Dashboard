var showdashboard = document.getElementById("dashboard");
var showTableList = document.getElementById("show-table");
var insert = document.getElementById("form");
var updateTable = document.getElementById("update-table");
insert.style.display = "none";
updateTable.style.display = "none";
showTableList.style.display = "none";
showdashboard.style.display = "none";

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




function fun() {
    let sidebar = document.getElementById("sidebar");  // Get the sidebar element

    if (sidebar.style.display === "none" || sidebar.style.display === "") {
        sidebar.style.display = "block";  // Show the sidebar
    } else {
        sidebar.style.display = "none";  // Hide the sidebar
    }
}




