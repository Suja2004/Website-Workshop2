document.getElementById('nav-toggle').addEventListener('click', () => {
    const navbar = document.getElementById('navbar-example');
    if (navbar.style.display === 'flex') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'flex'; 
    }
});
