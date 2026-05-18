const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navbar = document.querySelector(".navbar");
const introLoader = document.getElementById("introLoader");
const reveals = document.querySelectorAll(".reveal");

function closeMobileMenu() {
  navLinks?.classList.remove("active");
  menuBtn?.classList.remove("active");
}

menuBtn?.addEventListener("click", () => {
  navLinks?.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((item) => revealObserver.observe(item));

window.addEventListener("scroll", () => {
  closeMobileMenu();
  navbar?.classList.toggle("scrolled", window.scrollY > 40);
});

window.addEventListener("load", () => {
  document.body.classList.add("loading");

  setTimeout(() => {
    document.body.classList.remove("loading");
    if (introLoader) introLoader.style.display = "none";
  }, 3400);
});

if (typeof Lenis !== "undefined") {
  const lenis = new Lenis({
    duration: 1.8,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.85,
    touchMultiplier: 1.2,
    smoothTouch: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}