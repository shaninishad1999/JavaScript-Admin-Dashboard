async function dataShow() {
  // Initialize the HTML table structure
  let mytable = `
     <table style="border-collapse: collapse; width: 90%; text-align: left; font-size: 20px; margin: 0 auto;">
       <tr>
         <th style="border-left: 1px solid #ddd; padding: 8px;">Employee ID</th>
         <th style="border-left: 1px solid #ddd; padding: 8px;">Full Name</th>
         <th style="border-left: 1px solid #ddd; padding: 8px;">Email</th>
         <th style="border-left: 1px solid #ddd; padding: 8px;">Mobile Number</th>
         <th style="border-left: 1px solid #ddd; padding: 8px;">Office Code</th>
         <th style="border-left: 1px solid #ddd; border-right: 1px solid #ddd; padding: 8px;">Job Title</th>
       </tr>
    `;

  let url = "https://json-server-deployment-for-employee.onrender.com/employees";

  try {
      // Fetch employee data from the API
      let response = await fetch(url);
      let employees = await response.json();

      // Generate table rows dynamically
      employees.forEach(employee => {
          mytable += `
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;">
                  <input type="text" value="${employee.employeeId}" id="id-${employee.employeeId}" style="border: none; width: 100%;" readonly>
              </td>
              <td style="border: 1px solid #ddd; padding: 8px;">
                  <input type="text" value="${employee.fullName}" id="name-${employee.employeeId}" style="border: none; width: 100%;" readonly>
              </td>
              <td style="border: 1px solid #ddd; padding: 8px;">
                  <input type="text" value="${employee.email}" id="email-${employee.employeeId}" style="border: none; width: 100%;" readonly>
              </td>
              <td style="border: 1px solid #ddd; padding: 8px;">
                  <input type="text" value="${employee.mobileNumber}" id="mobile-${employee.employeeId}" style="border: none; width: 100%;" readonly>
              </td>
              <td style="border: 1px solid #ddd; padding: 8px;">
                  <input type="text" value="${employee.officeCode}" id="office-${employee.employeeId}" style="border: none; width: 100%;" readonly>
              </td>
              <td style="border: 1px solid #ddd; padding: 8px;">
                  <input type="text" value="${employee.jobTitle}" id="job-${employee.employeeId}" style="border: none; width: 100%;" readonly>
              </td>
            </tr>
          `;
      });

      // Close the table structure
      mytable += `</table>`;

      // Inject the constructed table into the DOM
      document.getElementById("show").innerHTML = mytable;

  } catch (error) {
      console.error("Error fetching data:", error);
  }
}

// Call the dataShow function to execute it
dataShow();
