// scroll reveal (IntersectionObserver)
const revealEls = document.querySelectorAll(".reveal");

const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
        if (e.isIntersecting) e.target.classList.add("is-visible");
    }
}, { threshold: 0.15 });

revealEls.forEach(el => io.observe(el));

// mobile menu toggle
const btn = document.querySelector("[data-mobile-btn]");
const menu = document.querySelector("[data-mobile-menu]");
if (btn && menu) {
    btn.addEventListener("click", () => menu.classList.toggle("show"));
}

// optional lightweight parallax: add data-parallax="0.15" to elements
let ticking = false;
const parallaxEls = [...document.querySelectorAll("[data-parallax]")];

function updateParallax() {
    const y = window.scrollY || 0;
    for (const el of parallaxEls) {
        const speed = Number(el.getAttribute("data-parallax")) || 0.12;
        // small, subtle movement
        const offset = Math.round((y * speed) * 10) / 10;
        el.style.setProperty("--py", `${offset}px`);
    }
    ticking = false;
}

window.addEventListener("scroll", () => {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});
updateParallax();
