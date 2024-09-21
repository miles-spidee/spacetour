let astro = document.getElementById('astro');
let moon = document.getElementById('moon');
let earth = document.getElementById('earth');
let text = document.getElementById('thespace');

window.addEventListener('scroll' , () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    astro.style.marginRight = value * 2.5 + 'px';
    moon.style.marginLeft = value * 2.5 + 'px';
    moon.style.marginBottom = '-' + (value * 1.5) + 'px';
    astro.style.marginBottom = value * 3.5 + 'px';

    // earth.style.opacity = 1 - value * 0.010;
})

