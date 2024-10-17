# Form Validator

This project is a simple **Form Validator** built using vanilla JavaScript. It validates user input on a form containing fields for `username`, `email`, `password`, and `confirm password`. It ensures that the fields are not empty, that the `username` and `password` adhere to specific length requirements, that the email is valid, and that the passwords match.

## Features

- **Required Fields**: Ensures that all fields are filled in.
- **Input Length Validation**: Checks that `username` is between 6 and 15 characters and `password` is between 7 and 25 characters.
- **Email Validation**: Validates the email format using a regular expression.
- **Password Match**: Ensures that the password and confirm password fields match.
- **Real-Time Error Handling**: Displays success or error messages as the form is submitted, allowing for an improved user experience.
