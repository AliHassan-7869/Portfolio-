import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { projectDetails } from './data.js';

window.addEventListener('DOMContentLoaded', () => {
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

  // CUSTOM CURSOR FOLLOWER
  const cursor = document.getElementById('cursor-follower');
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (cursor) {
    if (!isTouchDevice) {
      gsap.set(cursor, { xPercent: -50, yPercent: -50 });
      
      document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.15,
          ease: 'power2.out'
        });
      });

      // HOVER STATES FOR CURSOR
      const interactiveElements = document.querySelectorAll('a, button, .roadmap-item');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
      });
    } else {
      cursor.style.display = 'none';
    }
  }

  // Mobile Menu Toggle (for mini-navbar on detail page)
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links'); // In case it exists on detail page or for consistency

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      // On detail page, we just have back button, but we might want a menu later.
      // For now, if there's no nav-links, we don't do much but toggle the icon.
      if (navLinks) {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
          document.body.style.overflow = 'hidden';
          lenis.stop();
        } else {
          document.body.style.overflow = '';
          lenis.start();
        }
      }
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

  // MAGNETIC BACK BUTTON
  const backBtn = document.querySelector('.btn-back');
  if (backBtn) {
    backBtn.addEventListener('mousemove', (e) => {
      const rect = backBtn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(backBtn, { x: x * 0.4, y: y * 0.4, duration: 0.4, ease: 'power2.out' });
    });
    backBtn.addEventListener('mouseleave', () => {
      gsap.to(backBtn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });
    });
  }

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const data = projectDetails[id];

  if (!data) {
    window.location.href = 'index.html';
    return;
  }

  // Populate basic text
  document.title = `${data.title} | Case Study`;
  document.getElementById('item-title').innerText = data.title || '';
  document.getElementById('tagline').innerText = data.tagline || '';
  document.getElementById('item-description').innerText = data.description || '';
  
  if(document.getElementById('item-challenge')) document.getElementById('item-challenge').innerText = data.challenge || 'Solving complex architectural problems with modern tech.';
  if(document.getElementById('item-solution')) document.getElementById('item-solution').innerText = data.solution || 'Developed a custom scalable solution tailored to user needs.';
  if(document.getElementById('item-results')) document.getElementById('item-results').innerText = data.results || 'Successfully delivered a production-ready solution with high user engagement.';
  
  // Image / Icon Showcase
  const mainImg = document.getElementById('item-image');
  const imgWrapper = document.getElementById('item-image-wrapper');
  if (data.image) {
    mainImg.src = data.image;
    mainImg.alt = data.title;
  } else if (data.icon) {
    imgWrapper.classList.add('icon-showcase');
    imgWrapper.innerHTML = `<span class="icon-showcase-emoji">${data.icon}</span>`;
  } else {
    imgWrapper.style.display = 'none';
  }

  // Tech Stack
  const techContainer = document.getElementById('tech-stack');
  data.techStack.forEach(tech => {
    const span = document.createElement('span');
    span.className = 'tech-pill';
    span.innerText = tech;
    techContainer.appendChild(span);
  });

  // Features
  const featuresContainer = document.getElementById('features-container');
  data.features.forEach(feature => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="bullet">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </span>
      ${feature}
    `;
    featuresContainer.appendChild(li);
  });

  // Workflow Roadmap
  const stepsContainer = document.getElementById('workflow-steps');
  data.workflow.forEach((step) => {
    const stepEl = document.createElement('div');
    stepEl.className = 'roadmap-item glass';
    stepEl.innerHTML = `
      <div class="roadmap-num">${step.step}</div>
      <div class="roadmap-content">
        <h3>${step.title}</h3>
        <p>${step.desc}</p>
      </div>
    `;
    stepsContainer.appendChild(stepEl);
  });

  // Next Project Logic
  const projectIds = Object.keys(projectDetails).filter(k => !['ai-agents', 'genai', 'backend', 'automation'].includes(k));
  const currentIndex = projectIds.indexOf(id);
  const nextIndex = (currentIndex + 1) % projectIds.length;
  const nextId = projectIds[nextIndex];
  const nextData = projectDetails[nextId];

  const nextTitle = document.getElementById('next-project-title');
  const nextLink = document.getElementById('next-project-link');

  if (nextTitle && nextLink && nextData) {
    nextTitle.innerText = nextData.title;
    nextLink.href = `detail.html?id=${nextId}`;
  } else {
    // Hide if no next project or if current is a skill
    const nextSection = document.querySelector('.next-project-section');
    if (nextSection) nextSection.style.display = 'none';
  }

  // GSAP Entrance Animations
  // HERO TEXT REVEAL (Sophisticated)
  const heroTitle = document.querySelector('.case-study-hero h1');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.innerHTML = text.split('').map(char => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`).join('');
    
    gsap.from('.char', {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.02,
      ease: 'power4.out',
      delay: 0.5
    });
  }

  const tl = gsap.timeline();

  tl.from('.tagline', { y: -20, opacity: 0, duration: 0.8 })
    .from('.reveal-text', { y: 30, opacity: 0, duration: 1, ease: 'power4.out' }, '-=0.5')
    .from('.case-desc', { y: 20, opacity: 0, duration: 0.8 }, '-=0.6')
    .from('.tech-pill', { scale: 0.8, opacity: 0, stagger: 0.1, duration: 0.5 }, '-=0.4')
    .from('.main-showcase-img', { scale: 0.95, opacity: 0, duration: 1.2, ease: 'power2.out' }, '-=0.8');

  // Reveal animations on scroll
  gsap.fromTo('.roadmap-item', 
    { x: -30, opacity: 0 },
    {
      scrollTrigger: {
        trigger: '.roadmap-container',
        start: 'top 80%',
      },
      x: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.8
    }
  );

  gsap.from('.features-list li', {
    scrollTrigger: {
      trigger: '.features-list',
      start: 'top 85%',
    },
    y: 20,
    opacity: 0,
    stagger: 0.15,
    duration: 0.6
  });

  // PARALLAX ON SHOWCASE IMG
  if (mainImg) {
    gsap.to(mainImg, {
      scrollTrigger: {
        trigger: imgWrapper,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: 100,
      ease: "none"
    });
  }

  // Ensure app visibility (fallback)
  gsap.to('#app', { opacity: 1, duration: 0.5, delay: 0.2 });
});
