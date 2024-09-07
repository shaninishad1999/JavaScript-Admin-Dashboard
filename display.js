async function dataShow() {
    // Create the table structure with headers, including the new 'Department' column and separate columns for Edit and Delete
    let mytable = `
       <table style="border-collapse: collapse; width: 90%; text-align: left; font-size: 20px; margin: 0 auto;"> <!-- Center-align the table with margin -->
         <tr>
           <th style="border-left: 1px solid #ddd; padding: 8px;">Employee ID</th>
           <th style="border-left: 1px solid #ddd; padding: 8px;">Full Name</th>
           <th style="border-left: 1px solid #ddd; padding: 8px;">Email</th>
           <th style="border-left: 1px solid #ddd; padding: 8px;">Mobile Number</th>
           <th style="border-left: 1px solid #ddd; padding: 8px;">Office Code</th>
           <th style="border-left: 1px solid #ddd; padding: 8px;">Job Title</th>

       
        </tr>
      `;

    let url = "http://localhost:3000/employees"; // API URL

    try {
      let myobj = await fetch(url); // Fetch the data
      let mydata = await myobj.json(); // Parse the JSON response

      // Loop through the data and generate table rows
      mydata.map((employee) => {
        mytable += `
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><input type="text" value="${employee.employeeId}" id="id-${employee.employeeId}" style="border: none; width: 100%;" readonly></td> <!-- Removed border from input -->
            <td style="border: 1px solid #ddd; padding: 8px;"><input type="text" value="${employee.fullName}" id="name-${employee.employeeId}" style="border: none; width: 100%;" readonly></td>
            <td style="border: 1px solid #ddd; padding: 8px;"><input type="text" value="${employee.email}" id="email-${employee.employeeId}" style="border: none; width: 100%;" readonly></td>
            <td style="border: 1px solid #ddd; padding: 8px;"><input type="text" value="${employee.mobileNumber}" id="mobile-${employee.employeeId}" style="border: none; width: 100%;" readonly></td>
            <td style="border: 1px solid #ddd; padding: 8px;"><input type="text" value="${employee.officeCode}" id="office-${employee.employeeId}" style="border: none; width: 100%;" readonly></td>
            <td style="border: 1px solid #ddd; padding: 8px;"><input type="text" value="${employee.jobTitle}" id="job-${employee.employeeId}" style="border: none; width: 100%;" readonly></td>

           
          </tr>
        `;
      });

      mytable += `</table>`; // Close the table

      // Display the table in the "demo" element
      document.getElementById("show").innerHTML = mytable;

    } catch (error) {
      console.error("Error fetching data:", error); // Log any errors
    }
}

// Call the function to display the data
dataShow();
