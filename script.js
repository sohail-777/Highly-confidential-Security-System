// JavaScript for login functionality

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form"); // Select the login form

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get the username and password input values
        const username = document.querySelector("input[type='text']").value.trim();
        const password = document.querySelector("input[type='password']").value.trim();

        // Validation for empty fields
        if (!username && !password) {
            alert("Both username and password are required!");
        } else if (!username) {
            alert("Username is required!");
        } else if (!password) {
            alert("Password is required!");
        } else {
            // If both fields are filled, redirect to lockers.html
            window.location.href = "lockers.html";
        }
    });
});

