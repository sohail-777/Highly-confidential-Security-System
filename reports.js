const bankReports = JSON.parse(localStorage.getItem('bankReports')) || [];
const reportsContainer = document.getElementById('bankReportsContainer');

if (bankReports.length === 0) {
    reportsContainer.innerHTML = "<p>No Bank reports available.</p>";
} else {
    bankReports.forEach(report => {
        const reportElement = document.createElement('div');
        reportElement.classList.add('report');
        reportElement.innerHTML = `
            <p><strong>Bank Name:</strong> ${report.bankName}</p>
            <p><strong>Account Number:</strong> ${report.accountNumber}</p>
            <p><strong>IFSC Code:</strong> ${report.ifscCode}</p>
            <p><strong>State:</strong> ${report.state}</p>
            <p><strong>District:</strong> ${report.district}</p>
            <p><strong>Date:</strong> ${report.date}</p>
        `;
        reportsContainer.appendChild(reportElement);
    });
}

