const navbarToggler = document.getElementById('navbar-toggler');
const navbarNav = document.getElementById('navbar-nav');

navbarToggler.addEventListener('click', () => {
    navbarNav.classList.toggle('active');
});