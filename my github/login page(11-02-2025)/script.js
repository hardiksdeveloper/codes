document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "" || password === "") {
            alert("Both fields are required!");
            return;
        }

        // Simulated login validation
        if (username === "admin" && password === "password") {
            alert("Login successful!");
            window.location.href = "dashboard.html"; // Redirect to a dashboard page
        } else {
            alert("Invalid username or password.");
        }
    });
});
