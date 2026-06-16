// =========================
// NAVBAR EFFECT ON SCROLL
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (!navbar) return;

    if (window.scrollY > 80) {
        navbar.style.padding = "12px 8%";
        navbar.style.background = "rgba(0,0,0,0.6)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.borderBottom = "1px solid rgba(255,255,255,0.1)";
    } else {
        navbar.style.padding = "18px 8%";
        navbar.style.background = "rgba(255,255,255,0.06)";
        navbar.style.borderBottom = "none";
    }
});


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

const hiddenElements = document.querySelectorAll(
    ".service-card, .price-card, .portfolio-item, .testimonial, .contact-main, .mini-card, .about-image, .about-content"
);

hiddenElements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".stat-box h3");

counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 60;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});


// =========================
// BACK TO TOP BUTTON
// =========================

const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", () => {
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// =========================
// MOBILE MENU (FIXED 100%)
// =========================

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (!menuBtn || !navLinks) return;

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

});


// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});