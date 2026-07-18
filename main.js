import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// REGISTER GSAP PLUGINS
gsap.registerPlugin(ScrollTrigger);

// INITIALIZE LENIS SMOOTH SCROLL
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Link Lenis to ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// SCROLL PROGRESS
const progressBar = document.getElementById('scroll-progress');
if (progressBar) {
  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

// CUSTOM CURSOR FOLLOWER
const cursor = document.getElementById('cursor-follower');
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (cursor) {
  if (!isTouchDevice) {
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    window.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power2.out",
      });
    });

    // HOVER STATES FOR CURSOR
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-card, .stat-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });
  } else {
    cursor.style.display = 'none';
  }
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    // Prevent scrolling when menu is open
    if (navLinks.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
      lenis.stop();
    } else {
      document.body.style.overflow = '';
      lenis.start();
    }
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
      lenis.start();
    });
  });
}

// BACKGROUND GLOW FOLLOW
const bgGlow = document.getElementById('bg-glow');
if (bgGlow && !isTouchDevice) {
  document.addEventListener('mousemove', (e) => {
    gsap.to(bgGlow, {
      background: `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(59, 130, 246, 0.08) 0%, transparent 80%)`,
      duration: 0.5
    });
  });
}

// FADE LOADER
const loader = document.getElementById('page-loader');
if (loader) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => loader.style.display = 'none', 800);
    }, 500);
  });
}

// MAGNETIC BUTTONS
const magneticButtons = document.querySelectorAll('.btn-primary, .btn-outline, .nav-links a, .logo');
magneticButtons.forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: 'power2.out' });
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });
  });
});

// SCROLL SKEW EFFECT
let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".project-card, .skill-card", "skewY", "deg"),
    clamp = gsap.utils.clamp(-2, 2); 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

// HERO TEXT REVEAL (Sophisticated)
const heroTitle = document.querySelector('.hero-content h1');
if (heroTitle) {
  const text = heroTitle.textContent;
  // Wrap characters inside words to prevent mid-word breaking
  heroTitle.innerHTML = text.split(' ').map(word => 
    `<span class="word">${word.split('').map(char => `<span class="char">${char}</span>`).join('')}</span>`
  ).join(' ');
  
  gsap.from('.char', {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.02,
    ease: 'power4.out',
    delay: 0.5
  });
}

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Animations
window.addEventListener('DOMContentLoaded', () => {
  // Hero Animations
  const tl = gsap.timeline();
  
  tl.from('.navbar', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
  })
  .from('.hero-section h1', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
  }, '-=0.5')
  .from('.hero-subtitle', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
  }, '-=0.8')
  .from('.hero-btns', {
    y: 20,
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
  }, '-=0.8')
  .from('.hero-bg-glow', {
    scale: 0.5,
    opacity: 0,
    duration: 2,
    ease: 'elastic.out(1, 0.3)'
  }, '-=1');

  // Scroll Animations
  gsap.from('.about-image', {
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top 90%', // Earlier trigger
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });

  gsap.from('.about-text', {
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top 90%',
    },
    x: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });

  gsap.from('.skill-card', {
    scrollTrigger: {
      trigger: '.skills-section',
      start: 'top 85%',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out'
  });

  gsap.from('.project-card', {
    scrollTrigger: {
      trigger: '.projects-section', // Changed trigger to section
      start: 'top 85%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  });

  gsap.from('.contact-card', {
    scrollTrigger: {
      trigger: '.contact-section',
      start: 'top 80%',
    },
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    ease: 'expo.out'
  });
});

// Form Submission (Simulated)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerText = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      btn.innerText = 'Message Sent!';
      btn.style.background = '#22c55e';
      contactForm.reset();
      
      setTimeout(() => {
        btn.innerText = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    }, 1500);
  });
}
