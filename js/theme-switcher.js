// Theme Switcher Functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeAnnouncement = document.getElementById('theme-announcement');
  const emailLink = document.querySelector('#email a');
  
  // Function to set theme with announcement for screen readers
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Announce theme change for screen readers
    themeAnnouncement.textContent = `Theme changed to ${theme} mode`;
    
    // Add animation class to email for theme change visual indication
    if (emailLink) {
      emailLink.classList.add('theme-transition');
      setTimeout(() => {
        emailLink.classList.remove('theme-transition');
      }, 500);
    }
  }
  
  // Check for saved theme preference or use user's system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (prefersDark) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
  
  // Create a media query to detect changes in system preference
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Listen for changes in system preference if user hasn't set a preference
  darkModeMediaQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }
  });
  
  // Toggle theme when button is clicked
  themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
    
    // Add a small animation when clicked
    this.classList.add('clicked');
    setTimeout(() => {
      this.classList.remove('clicked');
    }, 300);
  });
  
  // Update aria label based on current theme
  function updateAriaLabel() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    themeToggle.setAttribute(
      'aria-label',
      currentTheme === 'dark' 
        ? 'Switch to light mode' 
        : 'Switch to dark mode'
    );
  }
  
  // Initial aria label
  updateAriaLabel();
  
  // Update aria label when theme changes
  themeToggle.addEventListener('click', updateAriaLabel);
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId !== '#') {
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});