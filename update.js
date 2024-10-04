function editRow(id){
    document.getElementById(`empid-${id}`).removeAttribute('readonly');
    document.getElementById(`fullname-${id}`).removeAttribute('readonly');
    document.getElementById(`email-${id}`).removeAttribute('readonly');
    document.getElementById(`mobile-${id}`).removeAttribute('readonly');
    document.getElementById(`officecode-${id}`).removeAttribute('readonly');
    document.getElementById(`jobtitle-${id}`).removeAttribute('readonly');
   
    document.getElementById(`edit-${id}`).style.display="none";
    document.getElementById(`save-${id}`).style.display="inline";
}

async function myrecordRemove(id) {
  // let url = `http://localhost:3000/employees/${id}`;
  let url = `https://json-server-deployment-for-employee.onrender.com/employees/${id}`;

  try {
    let response = await fetch(url, { method: "DELETE" });
    if (response.ok) {
      alert("Record deleted successfully");

      // Remove the specific row from the table
      document.getElementById(`row-${id}`).remove();
    } else {
      alert("Failed to delete record");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while deleting the record");
  }
}


async function saveRow(id) {
  // let url = `http://localhost:3000/employees/${id}`;
  let url = `https://json-server-deployment-for-employee.onrender.com/employees/${id}`;
  let updatedEmployee = {
    employeeId: document.getElementById(`empid-${id}`).value,
    fullName: document.getElementById(`fullname-${id}`).value,
    email: document.getElementById(`email-${id}`).value,
    mobileNumber: document.getElementById(`mobile-${id}`).value,
    officeCode: document.getElementById(`officecode-${id}`).value,
    jobTitle: document.getElementById(`jobtitle-${id}`).value
  };

  try {
    let response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedEmployee)
    });

    if (response.ok) {
      alert("Record updated successfully");
      document.getElementById(`edit-${id}`).style.display="inline";
      document.getElementById(`save-${id}`).style.display="none";
      document.getElementById(`empid-${id}`).setAttribute('readonly', 'readonly');
      document.getElementById(`fullname-${id}`).setAttribute('readonly', 'readonly');
      document.getElementById(`email-${id}`).setAttribute('readonly', 'readonly');
      document.getElementById(`mobile-${id}`).setAttribute('readonly', 'readonly');
      document.getElementById(`officecode-${id}`).setAttribute('readonly', 'readonly');
      document.getElementById(`jobtitle-${id}`).setAttribute('readonly', 'readonly');
    } else {
      alert("Failed to update record");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while updating the record");
  }
}
async function dataShow() {
  let mytable = `
     <table style="width: 100%; border-collapse: collapse; font-size: 20px; margin: auto;">
      <tr>
           <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Employee ID</th>
           <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Full Name</th>
           <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Email</th>
           <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Mobile Number</th>
           <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Office Code</th>
           <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Job Title</th>
           <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f8f9fa;">Actions</th>
        </tr>
    `;

  let url = "https://json-server-deployment-for-employee.onrender.com/employees";
  let myobj = await fetch(url);
  let mydata = await myobj.json();

  mydata.forEach((employee) => {
    mytable += `
     <tr id="row-${employee.id}">
     <td style="border: 1px solid #ddd; padding: 8px;"><input type="text" value="${employee.employeeId}" id="empid-${employee.id}" style="border: none; padding: 5px;" readonly></td>
     <td style="border: 1px solid #ddd; padding: 8px;"><input type="text" value="${employee.fullName}" id="fullname-${employee.id}" style="border: none; padding: 5px;" readonly></td>
     <td style="border: 1px solid #ddd; padding: 8px;"><input type="text" value="${employee.email}" id="email-${employee.id}" style="border: none; padding: 5px;" readonly></td>
     <td style="border: 1px solid #ddd; padding: 8px;"><input type="text" value="${employee.mobileNumber}" id="mobile-${employee.id}" style="border: none; padding: 5px;" readonly></td>
     <td style="border: 1px solid #ddd; padding: 8px;"><input type="text" value="${employee.officeCode}" id="officecode-${employee.id}" style="border: none; padding: 5px;" readonly></td>
     <td style="border: 1px solid #ddd; padding: 8px;"><input type="text" value="${employee.jobTitle}" id="jobtitle-${employee.id}" style="border: none; padding: 5px;" readonly></td>
     <td style="border: 1px solid #ddd; padding: 8px; background-color: #f8f9fa;">
       <button onclick="myrecordRemove('${employee.id}')" style="background-color: red; color: white; padding: 5px 10px; border: none; border-radius: 5px; cursor: pointer;">Delete</button>
       <button onclick="editRow('${employee.id}')" id="edit-${employee.id}" style="background-color: #007bff; color: white; padding: 5px 10px; border: none; border-radius: 5px; cursor: pointer;">Edit</button>
       <button onclick="saveRow('${employee.id}')" id="save-${employee.id}" style="background-color: #28a745; color: white; padding: 5px 10px; border: none; border-radius: 5px; display: none; cursor: pointer;">Save</button>
     </td>
     </tr>
    `;
  });

  mytable += `</table>`;
  document.getElementById("updateTable").innerHTML = mytable;
}


dataShow();
