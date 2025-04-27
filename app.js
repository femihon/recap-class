const lodash = require('lodash');

const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

const validUsername = "employee1";
const validPassword = "password123";

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (lodash.isEqual(username, validUsername) && lodash.isEqual(password, validPassword)) {
        message.style.color = "green";
        message.textContent = "Login successful! Redirecting...";
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1500);
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password.";
    }
});
