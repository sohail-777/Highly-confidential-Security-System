document.getElementById('bankForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const bankName = document.getElementById('bankName').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const ifscCode = document.getElementById('ifscCode').value;
    const state = document.getElementById('state').value;
    const district = document.getElementById('district').value;

    // Create report
    const report = {
        bankName,
        accountNumber,
        ifscCode,
        state,
        district,
        date: new Date().toLocaleString()
    };

    // Get existing reports from localStorage, or initialize an empty array
    let reports = JSON.parse(localStorage.getItem('reports')) || [];

    // Add the new report to the array
    reports.push(report);

    // Store the updated reports array back in localStorage
    localStorage.setItem('reports', JSON.stringify(reports));

    // Redirect to the reports page to view the generated report
    window.location.href = 'reports.html';
});
