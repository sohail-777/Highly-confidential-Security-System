document.getElementById('bankForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const bankName = document.getElementById('bankName').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const ifscCode = document.getElementById('ifscCode').value;
    const state = document.getElementById('state').value;
    const district = document.getElementById('district').value;

    const report = { bankName, accountNumber, ifscCode, state, district, date: new Date().toLocaleString() };
    let bankReports = JSON.parse(localStorage.getItem('bankReports')) || [];
    bankReports.push(report);

    localStorage.setItem('bankReports', JSON.stringify(bankReports));
    alert("Bank data saved successfully!");
    document.getElementById('bankForm').reset();
});

document.getElementById('viewBankReportsButton').addEventListener('click', function () {
    window.location.href = 'bankreport.html';
});
