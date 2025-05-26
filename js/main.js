/**
 * Main JavaScript file
 * Initializes all components and provides shared functionality
 */

// DOM ready event
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initializeThemeSwitcher();
  initializeEmailScrambler();
  createProjectCards();
  initializeMinecraftPlayer();
  initializeMinecraftHoverEffect();
  
  // Initialize smooth scrolling for anchor links
  initializeSmoothScrolling();
  
  // Hide all bibliography entries initially
  hideallbibs();
});

// Initialize smooth scrolling
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        e.preventDefault();
        document.querySelector(targetId)?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-0F2H6Z6HGL');