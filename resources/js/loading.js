window.addEventListener('load', function() {
    const loadingText = document.getElementById('loading');
    const content = document.getElementById('pg-content');
    loadingText.classList.add('loading');
    setTimeout(() => {
        loadingText.classList.add('hidden'); 
        content.style.display = 'block'; 
    }, 2500); 
});
