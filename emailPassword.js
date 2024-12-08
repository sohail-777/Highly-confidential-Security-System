document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get email and password values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('Please fill in both email and password.');
        return;
    }

    // Create a data object
    const data = { email, password, timestamp: new Date().toLocaleString() };

    // Retrieve existing data from localStorage
    let storedData = JSON.parse(localStorage.getItem('emailPasswordData')) || [];

    // Add the new entry to the stored data
    storedData.push(data);

    // Save the updated data back to localStorage
    localStorage.setItem('emailPasswordData', JSON.stringify(storedData));

    // Clear the form
    document.querySelector('form').reset();

    alert('Data saved successfully!');

    // Redirect to the report page
    window.location.href = 'emailPasswordReport.html';
});

