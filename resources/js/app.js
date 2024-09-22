const btn = document.getElementById('name-submit');
let name_value = '';

// Check if there's a username in local storage
const user_name = localStorage.getItem('username');
document.getElementById('username').textContent = `${user_name ? user_name.toUpperCase() : 'EXPLORER'}`;

// Add click event listener
btn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    name_value = document.getElementById('name-input').value;
    localStorage.setItem('username', name_value);
    document.getElementById('username').textContent = name_value.toUpperCase(); 
});
