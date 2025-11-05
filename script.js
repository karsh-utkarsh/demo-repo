
// Mobile-optimized navigation animations
const links = document.querySelectorAll(".nav-links li a");

// Optimize for mobile touch interactions
links.forEach(link => {
  // Use passive event listeners for better mobile performance
  link.addEventListener("mouseenter", () => {
    // Only run animation on non-touch devices
    if (!('ontouchstart' in window)) {
      gsap.to(link, {
        y: -20,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          gsap.fromTo(
            link,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
          );
        }
      });
    }
  }, { passive: true });
});

// Mobile-optimized menu toggle with accessibility
const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Use passive event listener for better mobile performance
menu.addEventListener('click', (e) => {
  e.preventDefault();
  const isActive = navLinks.classList.contains('active');
  
  navLinks.classList.toggle('active');
  
  // Update accessibility attributes
  menu.setAttribute('aria-expanded', !isActive);
  
  // Prevent body scroll when menu is open on mobile
  if (!isActive) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}, { passive: false });

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
    menu.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}, { passive: true });

// Close mobile menu on window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
    menu.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}, { passive: true });

// Mobile navbar scroll effect optimization
let ticking = false;
const navbar = document.querySelector('#navbar');

function updateNavbar() {
  const scrolled = window.pageYOffset > 50;
  navbar.classList.toggle('scrolled', scrolled);
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateNavbar);
    ticking = true;
  }
}, { passive: true });