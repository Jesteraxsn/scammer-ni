document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Reset previous error messages
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.textContent = '');
        
        // Validation flags
        let isValid = true;
        
        // First Name validation
        const firstName = document.getElementById('firstName');
        if (firstName.value.trim() === '') {
            document.getElementById('firstNameError').textContent = 'First Name is required';
            isValid = false;
        }
        
        // Last Name validation
        const lastName = document.getElementById('lastName');
        if (lastName.value.trim() === '') {
            document.getElementById('lastNameError').textContent = 'Last Name is required';
            isValid = false;
        }
        
        // Email validation
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            document.getElementById('emailError').textContent = 'Please use a  e-mail';
            isValid = false;
        }
        
        // Date of Birth validation
        const dob = document.getElementById('dob');
        const today = new Date();
        const birthDate = new Date(dob.value);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        if (dob.value === '') {
            document.getElementById('dobError').textContent = 'Date of Birth is required';
            isValid = false;
        } else if (age < 16) {
            document.getElementById('dobError').textContent = 'You must be at least 16 years old to register';
            isValid = false;
        }
        
        // Username validation
        const username = document.getElementById('username');
        if (username.value.trim() === '' || username.value.length < 4) {
            document.getElementById('usernameError').textContent = 'Username must be at least 4 characters';
            isValid = false;
        }
        
        // Password validation
        const password = document.getElementById('password');
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (!passwordRegex.test(password.value)) {
            document.getElementById('passwordError').textContent = 'Password must be 8+ chars, include letter, number, special char';
            isValid = false;
        }
        
        // Gender validation
        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            document.getElementById('genderError').textContent = 'Please select a gender';
            isValid = false;
        }
        
        // Course validation
        const course = document.getElementById('course');
        if (course.value === '') {
            document.getElementById('courseError').textContent = 'Please select an academic program';
      
        }
        
        // If all validations pass
        if (isValid) {
            alert('Welcome to Western Institute of Technology!\n\nYour registration is complete.\nCheck your institutional email for further instructions.');
            form.reset();
        }
    });
});