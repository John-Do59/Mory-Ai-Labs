// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Update Time (Local French Time)
function updateTime() {
    const timeDisplay = document.getElementById('time-display');
    if (timeDisplay) {
        const now = new Date();
        timeDisplay.textContent = now.toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }
}
setInterval(updateTime, 1000);
updateTime();

// Initial Page Load Animations
window.addEventListener('load', () => {
    // Reveal Hero Text
    const heroReveals = document.querySelectorAll('.text-reveal');
    heroReveals.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('active');
        }, 100 * index);
    });

    // Navbar Slide-in (Fixed FOUC)
    gsap.to("#navbar", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2
    });
});

// Scroll Animations
// 1. Reveal Elements on Scroll
const revealElements = document.querySelectorAll('.reveal-on-scroll');
revealElements.forEach(element => {
    ScrollTrigger.create({
        trigger: element,
        start: "top 85%",
        onEnter: () => element.classList.add('active'),
        once: true
    });
});

// 2. Parallax Effect for Hero Elements (Intensified)
gsap.to(".hero-parallax", {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    y: 400, // Increased from 200 for more pronounced effect
    scale: 1.1, // Added scale for depth
    opacity: 0.5 // Fade out slightly on scroll
});

// 3. Navbar Blur/Darken on Scroll
ScrollTrigger.create({
    start: 'top -50',
    end: 99999,
    toggleClass: { className: 'bg-mory-bg/90', targets: '#navbar' }
});
