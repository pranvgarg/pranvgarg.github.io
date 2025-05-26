// Minecraft Player that appears at the bottom of the page
document.addEventListener('DOMContentLoaded', function() {
  // Create the Minecraft player element
  const minecraftContainer = document.createElement('div');
  minecraftContainer.className = 'minecraft-container';
  
  const minecraftPlayer = document.createElement('div');
  minecraftPlayer.className = 'minecraft-player';
  
  const playerMessage = document.createElement('div');
  playerMessage.className = 'minecraft-message';
  playerMessage.textContent = 'down';
  
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
  
  // Add sound effect on click (optional)
  minecraftPlayer.addEventListener('click', function() {
    playerMessage.classList.add('message-animate');
    setTimeout(() => {
      playerMessage.classList.remove('message-animate');
    }, 500);
  });
});