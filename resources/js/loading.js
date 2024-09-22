window.addEventListener('load', function() {
    const loadingText = document.getElementById('loading');
    const content = document.getElementById('pg-content');

    // Start the fade-out effect
    loadingText.classList.add('loading');

    // Set a minimum duration for the loading screen
    setTimeout(() => {
        loadingText.classList.add('hidden'); // Hide the loading text
        content.style.display = 'block'; // Show the main content
    }, 2500); // 2 seconds for the loading screen
});
