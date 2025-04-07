// Handle form submission
document.getElementById('emailPasswordForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert("Please fill in both fields!");
        return;
    }

    // Create a report object
    const report = {
        email,
        password,
        date: new Date().toLocaleString(),
    };

    // Retrieve existing reports from localStorage or create an empty array
    let emailReports = JSON.parse(localStorage.getItem('emailReports')) || [];
    emailReports.push(report);

    // Save updated reports back to localStorage
    localStorage.setItem('emailReports', JSON.stringify(emailReports));

    alert("Email & Password data saved successfully!");
    document.getElementById('emailPasswordForm').reset(); // Reset the form
});

// Handle "View Reports" button click
document.getElementById('viewReportButton').addEventListener('click', function () {
    window.location.href = 'emailPasswordReport.html';
});

