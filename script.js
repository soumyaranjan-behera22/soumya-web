
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

 menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuBtn.classList.toggle('active'); // 👈 adds X animation
});
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('active'));
    });

    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(item => observer.observe(item));

    window.addEventListener('scroll', () => {
  navLinks.classList.remove('active');
  menuBtn.classList.remove('active');
});
