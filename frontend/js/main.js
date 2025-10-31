// ========================================
// Custom Cursor - Smooth Triangle Movement
// ========================================
const cursor = document.querySelector('.custom-cursor');

// Initialize cursor position to center of viewport
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let cursorX = mouseX;
let cursorY = mouseY;

// Ultra-smooth cursor animation using requestAnimationFrame with easing
function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

function animateCursor() {
  // Ultra-smooth interpolation for main cursor (triangle) - higher factor for responsiveness
  cursorX = lerp(cursorX, mouseX, 0.2);
  cursorY = lerp(cursorY, mouseY, 0.2);
  
  // Use translate3d for hardware acceleration
  cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
  
  requestAnimationFrame(animateCursor);
}

// Track mouse movement with throttling for better performance
let isMouseMoving = false;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  if (!isMouseMoving) {
    isMouseMoving = true;
    // Show cursor immediately when moving starts
    cursor.style.opacity = '1';
  }
  
  // Hide cursor after 2 seconds of no movement (optional)
  clearTimeout(window.cursorTimeout);
  window.cursorTimeout = setTimeout(() => {
    cursor.style.opacity = '0.5';
    isMouseMoving = false;
  }, 2000);
});

// Start animation loop after a brief delay to ensure DOM is ready
setTimeout(() => {
  animateCursor();
}, 50);

// Cursor hover effects
const interactiveElements = document.querySelectorAll('a, button, .btn, .problem-card, .feature-item, .segment-card, .tech-item');

interactiveElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
  });
  
  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});

// ========================================
// Smooth Scroll Animations
// ========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
  observer.observe(el);
});

// ========================================
// Navigation Scroll Effect
// ========================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ========================================
// Smooth Navigation Scrolling
// ========================================
document.querySelectorAll('a[data-nav]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const navHeight = navbar.offsetHeight;
      const targetPosition = targetSection.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ========================================
// Progress Bar Animation
// ========================================
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll('.point-fill');
      progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
    }
  });
}, { threshold: 0.5 });

const solutionSection = document.querySelector('.solution-content');
if (solutionSection) {
  progressObserver.observe(solutionSection);
}

// ========================================
// CTA Button Interactions
// ========================================
document.querySelectorAll('.cta-button, .btn-primary').forEach(button => {
  button.addEventListener('click', () => {
    // Add ripple effect
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.5)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s ease-out';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.width = '100px';
    ripple.style.height = '100px';
    ripple.style.marginLeft = '-50px';
    ripple.style.marginTop = '-50px';
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ========================================
// Parallax Effect for Hero Section (Optimized)
// ========================================
let ticking = false;

function updateParallax() {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translate3d(0, ${scrolled * 0.3}px, 0)`;
  }
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
});

// ========================================
// Score Card Animation on Load
// ========================================
window.addEventListener('load', () => {
  const scoreCard = document.querySelector('.score-card');
  if (scoreCard) {
    setTimeout(() => {
      scoreCard.style.animation = 'float 3s ease-in-out infinite';
    }, 500);
  }
});

// ========================================
// Mobile Menu (for responsive design)
// ========================================
const createMobileMenu = () => {
  if (window.innerWidth <= 968) {
    const nav = document.querySelector('.nav-content');
    const navLinks = document.querySelector('.nav-links');
    
    if (!document.querySelector('.mobile-menu-btn')) {
      const menuBtn = document.createElement('button');
      menuBtn.className = 'mobile-menu-btn';
      menuBtn.innerHTML = '☰';
      menuBtn.style.cssText = `
        background: transparent;
        border: 2px solid var(--sky-blue);
        color: var(--sky-blue);
        padding: 0.5rem 1rem;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1.5rem;
        display: block;
      `;
      
      menuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'var(--bg-secondary)';
        navLinks.style.padding = '1rem';
        navLinks.style.gap = '1rem';
      });
      
      nav.appendChild(menuBtn);
    }
  }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// ========================================
// Page Load Animation
// ========================================
window.addEventListener('load', () => {
  // Initialize cursor position to center of screen
  mouseX = window.innerWidth / 2;
  mouseY = window.innerHeight / 2;
  cursorX = mouseX;
  cursorY = mouseY;
  
  // Fade in body
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 50);
});

// ========================================
// Get Started Modal
// ========================================
const modal = document.getElementById('getStartedModal');
const getStartedBtns = document.querySelectorAll('#getStartedNavBtn, #getStartedCTABtn, #getStartedHeroBtn');
const closeBtn = document.querySelector('.modal-close');
const cancelBtn = document.getElementById('cancelBtn');
const form = document.getElementById('getStartedForm');

// Open modal when any "Get Started" button is clicked
getStartedBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  });
});

// Close modal functions
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = ''; // Restore scrolling
  form.reset(); // Reset form
}

closeBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    age: document.getElementById('age').value,
    state: document.getElementById('state').value
  };
  
  // Validate form
  if (!formData.name || !formData.email || !formData.age || !formData.state) {
    alert('Please fill in all required fields');
    return;
  }
  
  // Log form data (you can replace this with API call)
  console.log('Form submitted with data:', formData);
  
  // Show success message
  alert(`Thank you ${formData.name}! We've received your information. We'll be in touch soon.`);
  
  // Close modal
  closeModal();
  
  // Here you would typically send the data to your backend API
  // Example:
  // fetch('/api/register', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(formData)
  // })
});

// ========================================
// Console Welcome Message
// ========================================
console.log('%c🚀 AltCred', 'color: #4FC3F7; font-size: 20px; font-weight: bold;');
console.log('%cAlternative Credit Scoring Platform', 'color: #81D4FA; font-size: 14px;');
