// Minecraft Player that appears at the bottom of the page
document.addEventListener('DOMContentLoaded', function() {
  // Create the Minecraft player element
  const minecraftContainer = document.createElement('div');
  minecraftContainer.className = 'minecraft-container';
  
  const minecraftPlayer = document.createElement('div');
  minecraftPlayer.className = 'minecraft-player';
  
  const playerMessage = document.createElement('div');
  playerMessage.className = 'minecraft-message';
  playerMessage.textContent = 'longhorn';
  
  minecraftContainer.appendChild(minecraftPlayer);
  minecraftContainer.appendChild(playerMessage);
  document.body.appendChild(minecraftContainer);
  
  // Function to check if user has scrolled to the bottom
  function checkScrollPosition() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // If user is near the bottom (within 100px)
    if (documentHeight - scrollPosition < 100) {
      minecraftContainer.classList.add('visible');
    } else {
      minecraftContainer.classList.remove('visible');
    }
  }
  
  // Listen for scroll events
  window.addEventListener('scroll', checkScrollPosition);
  
  // Check initial position
  checkScrollPosition();
  
  // Add animation on click
  minecraftPlayer.addEventListener('click', function() {
    playerMessage.classList.add('message-animate');
    // Play sound if available
    const sound = document.getElementById('minecraft-sound');
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(e => console.log('Audio play failed:', e));
    }
    
    setTimeout(() => {
      playerMessage.classList.remove('message-animate');
    }, 1500);
  });
});