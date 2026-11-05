const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const logInButton = document.getElementById('logIn-Button');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function getEmailError(email) {
  if (email === '') return 'Email is required.';
  if (!emailPattern.test(email)) return 'Please enter a valid email, like name@example.com.';
  return '';
}

function getPasswordError(password) {
  if (password === '') return 'Password is required.';
  if (password.length < 8) return 'Password must be at least 8 characters.';
  if (!/[A-Za-z]/.test(password) || !/\d/.test(password)) {
    return 'Password must contain at least one letter and one number.';
  }
  return '';
}

function showError(input, errorElement, message) {
  errorElement.textContent = message;
  input.classList.toggle('invalid', message !== '');
}

function validateEmail() {
  const message = getEmailError(emailInput.value.trim());
  showError(emailInput, emailError, message);
  return message === '';
}

function validatePassword() {
  const message = getPasswordError(passwordInput.value);
  showError(passwordInput, passwordError, message);
  return message === '';
}

let submitted = false;

logInButton.addEventListener('click', (event) => {
  event.preventDefault();
  submitted = true;

  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (!isEmailValid || !isPasswordValid) {
    return;
  }

  handleLogin({
    email: emailInput.value.trim(),
    password: passwordInput.value
  });
});

emailInput.addEventListener('input', () => {
  if (submitted) validateEmail();
});

passwordInput.addEventListener('input', () => {
  if (submitted) validatePassword();
});

function handleLogin(data) {
  console.log('Form is valid, ready to send.');
}
