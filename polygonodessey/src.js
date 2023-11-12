// JavaScript code to handle form submission
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Submit the form data to the server using AJAX
  // Replace 'your-server-url' with the actual URL of your server
  axios.post('your-server-url', {
    username,
    password
  })
  .then(response => {
    console.log('Login successful!');
    // Redirect to the home page
    window.location.href = 'home.html';
  })
  .catch(error => {
    console.error('Login failed:', error);
  });
});
