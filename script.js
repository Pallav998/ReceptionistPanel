function loadPage(page) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("sub-pages").innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.getElementById("patientTableBody");

  patients.forEach(function (patient) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input type="checkbox" /></td>
      
      <td>${patient.name}</td>
      <td>${patient.id}</td>
      <td>${patient.date}</td>
      <td>${patient.time}</td>
      <td>${patient.reason}</td>
      <td>${patient.department}</td>
    `;
    tableBody.appendChild(row);
  });
});

function addMedicineRow() {
  const tbody = document.getElementById("medicineList");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>
      <input type="text" name="medicineName[]" required />
    </td>
    <td>
      <input type="text" name="dosage[]" required />
    </td>
    <td>
      <input type="text" name="duration[]" required />
    </td>
  `;
  tbody.appendChild(newRow);
}

function deleteMedicineRow() {
  const tbody = document.getElementById("medicineList");
  if (tbody.children.length > 1) {
    tbody.removeChild(tbody.lastElementChild);
  }
}

let patient = {
  id: 1,
  name: "Twinkle",
  reason: "Checkup",
  date: "2024-03-27",
  time: "10:00 AM",
};

function checkPatient() {
  let searchId = document.getElementById("searchId").value;
  let searchName = document.getElementById("searchName").value;
  let searchReason = document.getElementById("searchReason").value;
  let searchDate = document.getElementById("searchDate").value;
  let searchTime = document.getElementById("searchTime").value;

  if (
    searchId == patient.id &&
    searchName == patient.name &&
    searchReason == patient.reason &&
    searchDate == patient.date &&
    searchTime == patient.time
  ) {
    alert("Patient found!");
  } else {
    alert("Patient not found!");
  }
}
