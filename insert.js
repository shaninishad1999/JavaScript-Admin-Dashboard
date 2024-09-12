document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the submit button
    document.getElementById("submit-btn").addEventListener('click', function(event) {
        event.preventDefault();  // Prevent form from reloading the page
        saveData();  // Call the saveData function to submit the form data
    });
});



// Function to handle form data submission
async function saveData() {
    try {
        // Get values from the form input fields
        let employeeId = document.getElementById("id").value;
        let employeeFullName = document.getElementById("fullName").value;
        let employeeEmail = document.getElementById("email").value;
        let employeeMobileNumber = document.getElementById("mobileNumber").value;
        let employeeOfficeCode = document.getElementById("officeCode").value;
        let employeeJobTitle = document.getElementById("jobTitle").value;

        // Define the API endpoint
        let url = 'http://localhost:3000/employees';

        // Send a POST request with the form data in JSON format
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

        // Check if the request was successful
        if (response.ok) {
            let data = await response.json();
            console.log(data);  // Log the server's response

            // Display success message
            alert("Data successfully added");
            // Optionally reset the form
            // document.querySelector('form').reset();
        } else {
            throw new Error('Failed to add data');  // Throw error if request failed
        }

    } catch (error) {
        console.error("Error:", error);  // Log the error
        alert("Error while adding data");  // Show error message
    }
}
