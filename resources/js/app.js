const btn = document.getElementById('name-submit');
let name_value = '';

const user_name = localStorage.getItem('username');
document.getElementById('username').textContent = `${user_name ? user_name.toUpperCase() : 'EXPLORER'}`;

btn.addEventListener('click', function (event) {
    event.preventDefault();
    name_value = document.getElementById('name-input').value;
    localStorage.setItem('username', name_value);
    document.getElementById('username').textContent = name_value.toUpperCase(); 
 });

