document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('Please fill in both email and password.');
        return;
    }

    // Ask user for encryption key
    const encryptionKey = prompt("Enter an encryption key (remember this to decrypt your data):");

    if (!encryptionKey) {
        alert("Encryption key is required!");
        return;
    }

    // Encrypt data using AES
    const encryptedEmail = CryptoJS.AES.encrypt(email, encryptionKey).toString();
    const encryptedPassword = CryptoJS.AES.encrypt(password, encryptionKey).toString();

    const data = { email: encryptedEmail, password: encryptedPassword, timestamp: new Date().toLocaleString() };

    let storedData = JSON.parse(localStorage.getItem('emailPasswordData')) || [];
    storedData.push(data);
    localStorage.setItem('emailPasswordData', JSON.stringify(storedData));

    document.querySelector('form').reset();
    alert('Data saved successfully (encrypted)!');
});

