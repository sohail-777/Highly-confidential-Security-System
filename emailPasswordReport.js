document.addEventListener('DOMContentLoaded', function () {
    const dataTable = document.getElementById('dataTable').querySelector('tbody');

    // Retrieve stored data from localStorage
    const storedData = JSON.parse(localStorage.getItem('emailPasswordData')) || [];

    // If there's no data, show a message
    if (storedData.length === 0) {
        dataTable.innerHTML = '<tr><td colspan="3">No data available. Please add some entries.</td></tr>';
        return;
    }

    // Populate the table with the stored data
    storedData.forEach((data) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${data.email}</td>
            <td>${data.password}</td>
            <td>${data.timestamp}</td>
        `;

        dataTable.appendChild(row);
    });
});
