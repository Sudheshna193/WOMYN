const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Store in local storage
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

  alert('Login details saved to local storage!');
  // You can redirect to another page or perform other actions here

  window.location.href = 'index.html';
});
