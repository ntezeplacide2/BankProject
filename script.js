// Array to store registered account numbers
var registeredAccountNumbers = [];

// Function to validate account number
function validateAccountNumber(accountNumber) {
    // Check if it's a 12-digit number
    if (!/^\d{12}$/.test(accountNumber)) {
        return false;
    }
    // Check if the account number is already registered
    if (registeredAccountNumbers.includes(accountNumber)) {
        return false;
    }
    return true;
}

// Form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var userId = document.getElementById("userId").value;
    var password = document.getElementById("password").value;
    var accountNumber = document.getElementById("accountNumber").value;

    // Validate account number
    if (!validateAccountNumber(accountNumber)) {
        alert("Please enter a valid and unique 12-digit account number.");
        return;
    }

    // Save the account number as registered
    registeredAccountNumbers.push(accountNumber);

    // Further registration processing...
    // For demonstration, let's just display the registered user details
    alert("Registration successful!\n\nFirst Name: " + firstName + "\nLast Name: " + lastName + "\nPhone: " + phone + "\nUser ID: " + userId + "\nAccount Number: " + accountNumber);
});
// Array to store registered users
var registeredUsers = [
    { userId: "user123", password: "password123" },
    // Add more registered users as needed
];

// Function to validate user credentials
function validateUserCredentials(userId, password) {
    // Check if the user exists and the password matches
    return registeredUsers.some(function(user) {
        return user.userId === userId && user.password === password;
    });
}

// Form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var userId = document.getElementById("userId").value;
    var password = document.getElementById("password").value;

    // Validate user credentials
    if (validateUserCredentials(userId, password)) {
        // Successful login
        alert("Login successful! Welcome, " + userId + "!");
        // Redirect to user dashboard or perform further actions
    } else {
        // Failed login
        alert("Invalid user ID or password. Please try again.");
    }
});
