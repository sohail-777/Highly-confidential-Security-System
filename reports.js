// Get all reports from localStorage
let reports = JSON.parse(localStorage.getItem('reports')) || [];

// Get the reports container element
const reportsContainer = document.getElementById('reportsContainer');

// If there are no reports, show a message
if (reports.length === 0) {
    reportsContainer.innerHTML = '<p>No reports available. Please generate a report first.</p>';
} else {
    // Loop through each report and display it
    reports.forEach(report => {
        const reportElement = document.createElement('div');
        reportElement.classList.add('report');

        reportElement.innerHTML = `
            <h3>Report Generated on: ${report.date}</h3>
            <p><strong>Bank Name:</strong> ${report.bankName}</p>
            <p><strong>Account Number:</strong> ${report.accountNumber}</p>
            <p><strong>IFSC Code:</strong> ${report.ifscCode}</p>
            <p><strong>State:</strong> ${report.state}</p>
            <p><strong>District:</strong> ${report.district}</p>
        `;

        // Append the report to the container
        reportsContainer.appendChild(reportElement);
    });
}
