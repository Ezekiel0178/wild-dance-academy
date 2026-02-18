window.addEventListener('load', function() {
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

const classes = [
    {
        id: 1,
        className: 'Afro Dance',
        classDesc: 'Embrace the rhythm of Africa with high-energy Afrobeats, Afro fusion, and traditional African dance styles.',
        classLevels: 'All Levels',
        image: 'media/class-afro.jpg'
    },

    {
        id: 2,
        className: 'Hip Hop',
        classDesc: 'Learn the foundational moves of hip-hop with high-energy choreography and street dance styles.',
        classLevels: 'All Levels',
        image: 'media/class-hiphop.jpg'
    },

    {
        id: 3,
        className: 'Contemporary Dance',
        classDesc: 'Express yourself through contemporary dance styles that blend classical and modern movements.',
        classLevels: 'Intermidate+',
        image: 'media/class-contemporary.jpg'
    },

    {
        id: 4,
        className: 'Kids Dance',
        classDesc: 'Where little feet learn big moves! Age-appropriate classes that build coordination, confidence, and a love for dance.',
        classLevels: 'Ages 4-12',
        image: 'media/class-kids.jpg'
    },

    {
        id: 5,
        className: 'Dance Fitness',
        classDesc: 'Get fit while having fun! High-energy dance workouts that sculpt your body and boost your mood with every beat.',
        classLevels: 'All Levels',
        image: 'media/danceFitness.jpg'
    },

    {
        id: 6,
        className: 'Choreography & Performance',
        classDesc: 'Ready for the spotlight? Learn stage presence, complex routines, and prepare for competitions and showcases.',
        classLevels: 'Intermidate+',
        image: 'media/choreography.jpg'
    },
]

let classesDisplay = classes.map((classes, index) => {

    return `
        <div class="card">
            <div class="image image${index + 1}">
                <div class="overlay">
                    <div class="empty">
                        <span class="classSpec Spec${index + 1}">${classes.classLevels}</span>
                    </div>
                    <div class="text">
                        <div class="sub-text">
                            <h2>${classes.className}</h2>

                            <p>${classes.classDesc}</p>

                            <button>Join this class</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    `
}).join(' ');

document.getElementById('classCards').innerHTML = classesDisplay;
