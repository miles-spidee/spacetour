// getting user name

const btn = document.getElementById('name-submit');
let name_value = '';

const user_name = localStorage.getItem('username').toUpperCase();
document.getElementById('username').textContent = `${user_name ? user_name : 'explorer'}`;

btn.addEventListener('click', function () {
    name_value = document.getElementById('name-input').value;
    localStorage.setItem('username', name_value);
    document.getElementById('username').textContent = name_value; 
});
