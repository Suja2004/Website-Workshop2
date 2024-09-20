document.getElementById('nav-toggle').addEventListener('click', () => {
    const navbar = document.getElementById('navbar-example');
    if (navbar.style.display === 'flex') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'flex'; 
    }
});
// document.getElementById("theme").addEventListener("click", () => {
//     const button = document.getElementById("theme");
    
//     if (button.value === "Light") {
//         button.value = "Dark"; 
//     } else {
//         button.value = "Light"; 
//     }
// });
