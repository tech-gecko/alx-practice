interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ikechukwu",
  lastName: "Ashimonye",
  age: 24,
  location: "Nigeria"
}

const student2: Student = {
  firstName: "Botshelo",
  lastName: "Onseki",
  age: 20,
  location: "Botswana"
}

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]) {
  // Create table element
  const table = document.createElement("table");
  
  // Create table header
  const headerRow = document.createElement("tr");
  const firstNameHeader = document.createElement("th");
  const locationHeader = document.createElement("th");
  
  firstNameHeader.textContent = "First Name";
  locationHeader.textContent = "Location";
  
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  table.appendChild(headerRow);
  
  // Create a row for each student
  students.forEach(student => {
    const row = document.createElement("tr");
    
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");
    
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });
  
  // Add the table to the document body
  document.body.appendChild(table);
  }
  
  // Call the function with your students list
  renderTable(studentsList);
