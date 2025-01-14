// Function to decrypt the data
function decryptData(encryptedData, key) {
    try {
        let decrypted = atob(encryptedData); // Base64 decoding
        let original = decrypted.split('').map((char, i) => 
            String.fromCharCode(char.charCodeAt(0) - key.length)
        ).join('');
        return original;
    } catch (error) {
        alert("Invalid decryption key!");
        return null;
    }
}

// Get stored encrypted reports from localStorage
let encryptedReports = localStorage.getItem('reports');

if (!encryptedReports || encryptedReports === "[]") {
    document.getElementById('reportsContainer').innerHTML = "<p>No reports available.</p>";
} else {
    // Ask for the decryption key
    let decryptionKey = prompt("Enter your decryption key to view reports:");

    if (decryptionKey) {
        let decryptedReports = JSON.parse(decryptData(encryptedReports, decryptionKey));

        if (decryptedReports) {
            const reportsContainer = document.getElementById('reportsContainer');
            reportsContainer.innerHTML = ""; // Clear default message

            decryptedReports.forEach(report => {
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
                reportsContainer.appendChild(reportElement);
            });
        }
    }
}
