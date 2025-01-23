// temples.js

const menuToggle = document.querySelector('.menu-toggle');
const closeMenu = document.querySelector('.close-menu');
const navLinks = document.querySelector('.nav-links');

// Abre el menú desplegable
menuToggle.addEventListener('click', () => {
    navLinks.classList.add('active');
    closeMenu.style.display = 'block';  // Muestra la "X"
    menuToggle.style.display = 'none'; // Oculta el menú burger
});

// Cierra el menú desplegable
closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
    closeMenu.style.display = 'none';  // Oculta la "X"
    menuToggle.style.display = 'block'; // Muestra el menú burger
});
