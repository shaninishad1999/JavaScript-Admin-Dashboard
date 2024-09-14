document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("submit-btn").addEventListener('click', function (event) {
        event.preventDefault();
        saveData();
    });
});



// Function to handle form data submission
async function saveData() {
    try {

        let employeeId = document.getElementById("id").value;
        let employeeFullName = document.getElementById("fullName").value;
        let employeeEmail = document.getElementById("email").value;
        let employeeMobileNumber = document.getElementById("mobileNumber").value;
        let employeeOfficeCode = document.getElementById("officeCode").value;
        let employeeJobTitle = document.getElementById("jobTitle").value;


        let url = 'http://localhost:3000/employees';


        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                employeeId: employeeId,
                fullName: employeeFullName,
                email: employeeEmail,
                mobileNumber: employeeMobileNumber,
                officeCode: employeeOfficeCode,
                jobTitle: employeeJobTitle
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });


        if (response.ok) {
            let data = await response.json();
            console.log(data);


            alert("Data successfully added");

        } else {
            throw new Error('Failed to add data');
        }

    } catch (error) {
        console.error("Error:", error);
        alert("Error while adding data");  // Show error message
    }
}
