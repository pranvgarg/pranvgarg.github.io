/**
 * Minecraft Hover Effect Component
 * Manages the hover effect for the Minecraft-style Longhorn icon
 */

// Initialize Minecraft Hover Effect
function initializeMinecraftHoverEffect() {
  // Find all elements with the minecraft-hover-link class
  const hoverLinks = document.querySelectorAll('.minecraft-hover-link');
  
  // Add event listeners to each link
  hoverLinks.forEach(link => {
    // Optional: Add sound effect on hover
    link.addEventListener('mouseenter', function() {
      const sound = document.getElementById('minecraft-sound');
      if (sound) {
        sound.currentTime = 0;
        sound.volume = 0.2; // Lower volume for hover sound
        sound.play().catch(e => console.log('Audio play failed:', e));
      }
    });
    
    // Optional: Add visual animation or effect when clicking
    link.addEventListener('click', function() {
      const icon = this.querySelector('.minecraft-hover-icon');
      if (icon) {
        // Add a click animation class
        icon.classList.add('minecraft-click');
        
        // Remove the class after animation completes
        setTimeout(() => {
          icon.classList.remove('minecraft-click');
        }, 500);
      }
    });
  });
}