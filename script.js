const form = document.getElementById('registrationForm');
// we Add an event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    // it uses to Call the validate form function
    const validationResult = validateForm();
    
    // If validation fails,  it show alerts and do not submit
    if (validationResult) {
        alert(validationResult);
    } else {
        alert('Form submitted successfully!');
        form.reset(); 
    }
});

// Function to validate form inputs
function validateForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // To Validate Full Name
    if (fullName.length < 5) {
        return "Full Name must be at least 5 characters long.";
    }

    // To Validate Email
    if (!email.includes('@')) {
        return "Please enter a valid email.";
    }

    // To Validate Phone Number
    if (!/^\d{10}$/.test(phone) || phone === '1234567890') {
        return "Phone number must be a 10-digit number and cannot be '1234567890'.";
    }

    // To Validate Password
    if (password.length < 8 || password.toLowerCase() === 'password' || fullName.toLowerCase() === password.toLowerCase()) {
        return "Password must be at least 8 characters and cannot be 'password' or your name.";
    }

    // To Validate Confirm Password
    if (password !== confirmPassword) {
        return "Passwords do not match.";
    }

    // If all validations pass
    return null;
}