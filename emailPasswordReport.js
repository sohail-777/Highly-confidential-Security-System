document.addEventListener('DOMContentLoaded', function () {
    const dataTable = document.getElementById('dataTable').querySelector('tbody');

    let storedData = JSON.parse(localStorage.getItem('emailPasswordData')) || [];

    if (storedData.length === 0) {
        dataTable.innerHTML = '<tr><td colspan="3">No data available. Please add some entries.</td></tr>';
        return;
    }

    // Ask user for decryption key
    const decryptionKey = prompt("Enter your decryption key to view the data:");

    if (!decryptionKey) {
        alert("Decryption key is required!");
        return;
    }

    // Populate the table with decrypted data
    storedData.forEach((data) => {
        try {
            const decryptedEmail = CryptoJS.AES.decrypt(data.email, decryptionKey).toString(CryptoJS.enc.Utf8);
            const decryptedPassword = CryptoJS.AES.decrypt(data.password, decryptionKey).toString(CryptoJS.enc.Utf8);

            if (!decryptedEmail || !decryptedPassword) {
                throw new Error("Decryption failed");
            }

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${decryptedEmail}</td>
                <td>${decryptedPassword}</td>
                <td>${data.timestamp}</td>
            `;
            dataTable.appendChild(row);
        } catch (error) {
            alert("Incorrect decryption key or data is corrupted!");
            return;
        }
    });
});

