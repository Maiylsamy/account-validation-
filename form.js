const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("gmail");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();

    if (usernamevalue === '') {
        setError(username, 'Username cannot be blank');
    } else {
        setSuccess(username);
    }

    if (emailvalue === '') {
        setError(email, 'Email cannot be blank');
    } else if (!isEmail(emailvalue)) {
        setError(email, 'Enter a valid email');
    } else {
        setSuccess(email);
    }

    function isEmail(email) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    if (passwordvalue === '') {
        setError(password, 'Password cannot be blank');
    } else {
        setSuccess(password);
    }

    if (password2value === '') {
        setError(password2, 'Confirm password cannot be blank');
    } else if (passwordvalue !== password2value) {
        setError(password2, 'Passwords do not match');
    } else {
        setSuccess(password2);
    }

    function setError(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }

    function setSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }
}

