document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple validation for demonstration purposes
  if (username === 'user' && password === 'password') {
    alert('Login successful!');
    // Redirect to homepage
    window.location.href = 'homes.html';  // Change this to the actual URL of your homepage
  } else {
    alert('Invalid username or password. Try again.');
  }
});
