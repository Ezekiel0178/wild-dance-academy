let navbar = document.getElementById('nav-bar');
window.addEventListener("scroll", () => {
    if(window.scrollY > 30) {
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }
})

function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.getElementById('navMenu');
    const close = document.querySelectorAll('.nav-options a');

    hamburger.classList.toggle('active');
    menu.classList.toggle('show');

    window.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('show');
        hamburger.classList.remove('active');
    }
    });

    close.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('show');
            hamburger.classList.remove('active');
        });
    });
}
