window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';

        content.style.opacity = 0;
        let opacity = 0;
        const fadeIn = setInterval(() => {
            if (opacity < 1) {
                opacity += 0.1;
                content.style.opacity = opacity;
            } else {
                clearInterval(fadeIn);
            }
        }, 60);
    }, 4000); 
});

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
