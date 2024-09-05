document.getElementById("register-btn").addEventListener('click', insert);

async function insert() {
   try {
       let employeeId = document.getElementById("id").value;
       let employeeFirstName = document.getElementById("firstName").value;
       let employeeLastName = document.getElementById("lastName").value;
       let employeeEmail = document.getElementById("email").value; // Changed variable name
       let employeeOfficeCode = document.getElementById("officeCode").value; // Changed variable name
       let employeeJobTitle = document.getElementById("jobTitle").value; // Changed variable name

       let url = 'http://localhost:3000/employees';
       let response = await fetch(url, {
           method: "POST",
           body: JSON.stringify({
               employeeId: employeeId,
               firstName: employeeFirstName,
               lastName: employeeLastName,
               email: employeeEmail,
               officeCode: employeeOfficeCode,
               jobTitle: employeeJobTitle
           }),
           headers: {
               "Content-type": "application/json;charset=UTF-8"
           }
       });

       console.log(response);
       if (response.ok) {
           let data = await response.json();
           console.log(data);
           alert("Data Successfully added");
       } else {
           throw new Error('Failed to add data');
       }

   } catch (error) {
       console.error("Error:", error);
       alert("Error while adding data");
   }
}
