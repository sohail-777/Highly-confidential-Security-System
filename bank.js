// Function to encrypt data
function encryptData(data, key) {
    let encoded = data.split('').map((char, i) => 
        String.fromCharCode(char.charCodeAt(0) + key.length)
    ).join('');
    return btoa(encoded); // Base64 encoding
}

// Modify existing `bank.js` code
document.getElementById('bankForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const bankName = document.getElementById('bankName').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const ifscCode = document.getElementById('ifscCode').value;
    const state = document.getElementById('state').value;
    const district = document.getElementById('district').value;

    // Ask for encryption key
    let encryptionKey = prompt("Set an encryption key to secure your data:");

    if (!encryptionKey) {
        alert("Encryption key is required!");
        return;
    }

    // Create report object
    const report = {
        bankName, accountNumber, ifscCode, state, district,
        date: new Date().toLocaleString()
    };

    // Get existing reports, encrypt new data, and save it
    let reports = JSON.parse(localStorage.getItem('reports')) || [];
    reports.push(report);

    let encryptedReports = encryptData(JSON.stringify(reports), encryptionKey);
    localStorage.setItem('reports', encryptedReports);

    // Redirect to reports page
    window.location.href = 'reports.html';
});
