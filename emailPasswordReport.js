// Load reports from localStorage
const emailReports = JSON.parse(localStorage.getItem('emailReports')) || [];
const tableBody = document.querySelector('#dataTable tbody');

// Populate the table with data
if (emailReports.length === 0) {
    tableBody.innerHTML = "<tr><td colspan='3'>No reports available</td></tr>";
} else {
    emailReports.forEach(report => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${report.email}</td>
            <td>${report.password}</td>
            <td>${report.date}</td>
        `;
        tableBody.appendChild(row);
    });
}
