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
    // Split Text Animation (Archar Style)
    // Select all elements with 'text-reveal' or 'text-reveal-container'
    const splitTypes = document.querySelectorAll('.text-reveal');

    splitTypes.forEach((char, i) => {
        const text = new SplitType(char, { types: 'chars,words' });

        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: false,
                markers: false
            },
            y: "100%",
            opacity: 0,
            duration: 0.8,
            stagger: 0.02,
            ease: "power4.out"
        });
    });

    // Special Hero Animation (Trigger immediately on load)
    // Target h1 specifically, assuming it's the Hero title
    if (document.querySelector('h1')) {
        const heroText = new SplitType('h1', { types: 'chars,words' });
        gsap.from(heroText.chars, {
            y: "100%",
            opacity: 0,
            duration: 1,
            stagger: 0.04,
            ease: "power4.out",
            delay: 0.2
        });
    }

    // Navbar Slide-in (Fixed FOUC)
    gsap.to("#navbar", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2
    });

    // Typewriter Effect (Hacker Style) for Hero (Immediate)
    const heroTypewriterElement = document.getElementById('hero-typewriter');
    if (heroTypewriterElement) {
        const typewriter = new Typewriter(heroTypewriterElement, {
            loop: false,
            delay: 50,
            cursor: '<span class="text-mory-accent">|</span>'
        });

        typewriter
            .pauseFor(800)
            .typeString('De la R&D prédictive aux agents métiers autonomes : nous concevons, entraînons et déployons vos solutions d\'IA propriétaires.')
            .start();
    }

    // Scroll-Triggered Typewriter Effects for About & Services
    const scrollTypewriters = document.querySelectorAll('.typewriter-scroll');
    scrollTypewriters.forEach(el => {
        // Store original text and clear it
        const originalText = el.innerText.trim();
        el.innerText = '';

        // Create Typewriter instance
        const typewriter = new Typewriter(el, {
            loop: false,
            delay: 30, // Slightly faster for body text
            cursor: '<span class="text-mory-accent">|</span>'
        });

        // Trigger on scroll
        ScrollTrigger.create({
            trigger: el,
            start: "top 90%", // Start when element is near bottom of viewport
            onEnter: () => {
                typewriter
                    .typeString(originalText)
                    .start();
            },
            once: true // Run only once
        });
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

// 2. Parallax Effect for Hero Showcase Display
gsap.to(".hero-parallax", {
    scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 1
    },
    y: 80,
    ease: "power1.out"
});

// 2b. Parallax Effect for Project Images
const parallaxImages = document.querySelectorAll('.parallax-image');
parallaxImages.forEach(img => {
    gsap.to(img, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
});

// 3. Navbar Blur/Darken on Scroll
ScrollTrigger.create({
    start: 'top -50',
    end: 99999,
    toggleClass: { className: 'bg-mory-bg/90', targets: '#navbar' }
});

// 4. Smooth Reveal for Project Bento Cards (iOS Liquid Glass Reveal)
gsap.utils.toArray('.project-bento-reveal').forEach((card) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        scale: 0.97,
        duration: 1,
        ease: "power3.out"
    });
});
