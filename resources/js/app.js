const btn = document.getElementById('name-submit');
const errorMessage = document.getElementById('error-message');

btn.addEventListener('click', function (event) {
    event.preventDefault(); 

    const nameInput = document.getElementById('name-input').value.trim(); 

    const namePattern = /^[A-Za-z\s]+$/;

    if (nameInput === '' || !namePattern.test(nameInput)) {
        errorMessage.textContent = 'Please enter a valid name (only letters and spaces).';
    } else {
        const name = document.getElementById('name-input').value;
        localStorage.setItem('userName', name);
        window.location.href = 'home.html';
    }
});

