const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });
// SCROLL SKILL
sr.reveal('.skill-div', { delay: 400 });
// SCROLL EDUCATION
sr.reveal('.edu-div', { delay: 400 });

/*SCROLL WORK*/
sr.reveal('.work__img', { interval: 100 });

// typing text
var typed = new Typed(".typing", {
    strings: ["Front-End Developer", "Tech Enthusiasm", "Student", "Self-learner"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

var typed = new Typed(".typing-2", {
    strings: ["Front-End Developer", "Tech Enthusiasm", "Student", "Self-learner"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})
