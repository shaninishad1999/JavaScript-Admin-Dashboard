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
  let url = `http://localhost:3000/employees/${id}`;

  try {
    let response = await fetch(url, { method: "DELETE" });
    if (response.ok) {
      alert("Record deleted successfully");
      dataShow(); // Refresh the table
    } else {
      alert("Failed to delete record");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while deleting the record");
  }
}

async function saveRow(id) {
  let url = `http://localhost:3000/employees/${id}`;
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
       <table style="width: 100%; border-collapse: collapse; font-size: 20px;  margin-left: auto; margin-right: auto;">
        <tr>
             <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Employee ID</th>
             <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Full Name</th>
             <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Email</th>
             <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Mobile Number</th>
             <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Office Code</th>
             <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Job Title</th>
             <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f8f9fa; border-left: 2px solid #ddd; border-right: 1px solid #ddd;">Actions</th>
          </tr>
      `;
  
    let url = "http://localhost:3000/employees";
    let myobj = await fetch(url);
    let mydata = await myobj.json();
  
    mydata.forEach((key) => {
      mytable += `
       <tr>
       <td style="border: 1px solid #ddd; padding: 8px;"><input type="text" value="${key.employeeId}" id="empid-${key.id}" readonly style="border: none; width: 100%;"></td>
       <td style="border: 1px solid #ddd; padding: 8px;"><input type="text" value="${key.fullName}" id="fullname-${key.id}" readonly style="border: none; width: 100%;"></td>
       <td style="border: 1px solid #ddd; padding: 8px;"><input type="text" value="${key.email}" id="email-${key.id}" readonly style="border: none; width: 100%;"></td>
       <td style="border: 1px solid #ddd; padding: 8px;"><input type="text" value="${key.mobileNumber}" id="mobile-${key.id}" readonly style="border: none; width: 100%;"></td>
       <td style="border: 1px solid #ddd; padding: 8px;"><input type="text" value="${key.officeCode}" id="officecode-${key.id}" readonly style="border: none; width: 100%;"></td>
       <td style="border: 1px solid #ddd; padding: 8px;"><input type="text" value="${key.jobTitle}" id="jobtitle-${key.id}" readonly style="border: none; width: 100%;"></td>
       <td style="border: 1px solid #ddd; padding: 8px; background-color: #f8f9fa; border-left: 2px solid #ddd;">
         <a href="#" onclick="myrecordRemove('${key.id}')" class="button button-delete" style="background-color: red; color: white; padding: 5px 10px; text-decoration: none; border-radius: 3px;">Delete</a>
         <a href="#" onclick="editRow('${key.id}')" id="edit-${key.id}" class="button button-edit" style="background-color: #007bff; color: white; padding: 5px 10px; text-decoration: none; border-radius: 3px; margin-left: 5px;">Edit</a>
         <a href="#" onclick="saveRow('${key.id}')" id="save-${key.id}" class="button button-save" style="background-color: #28a745; color: white; padding: 5px 10px; text-decoration: none; border-radius: 3px; display: none; margin-left: 5px;">Save</a>
       </td>
       </tr>
      `;
    });
  
    mytable += `</table>`;
    document.getElementById("updateTable").innerHTML = mytable;
}

dataShow();

