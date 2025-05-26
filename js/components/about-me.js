/**
 * About Me Component
 * Manages the about me section content
 */

// About me content configuration
const aboutMeConfig = {
  intro: `
    <p>
      Hi, I'm a graduate student pursuing an MS in Business Analytics at the
      <a href="https://www.mccombs.utexas.edu/" target="_blank">McCombs School of Business, University of Texas at Austin</a>.
      I'm deeply passionate about harnessing the power of data analytics and machine learning to drive strategic decisions
      and solve real-world business challenges.
    </p>
    <p>
      I earned my Bachelor's degree in Information Technology from
      <a href="https://vit.ac.in/" target="_blank">Vellore Institute of Technology</a>, where I developed a solid
      technical foundation in software engineering, big data analytics, and machine learning. Beyond the classroom,
      I've always been curious—exploring open-source implementations of machine learning systems and solving
      technical challenges independently has been one of my favorite ways to grow.
    </p>
  `,
  profileImage: {
    src: "/images/profile_photo.jpg", // Added leading slash to ensure it's relative to root
    alt: "Pranav Garg",
    width: "90%"
  }
};

// Function to initialize the about me section
function initializeAboutMe() {
  const aboutSection = document.querySelector('.about-me-section');
  if (!aboutSection) return; // Guard clause if container doesn't exist
  
  // Create profile section
  const profileSection = document.createElement('div');
  profileSection.className = 'profile-section';
  
  // Create profile content
  const profileContent = document.createElement('div');
  profileContent.className = 'profile-content';
  profileContent.innerHTML = aboutMeConfig.intro;
  
  // Create profile image
  const profileImage = document.createElement('div');
  profileImage.className = 'profile-image';
  const img = document.createElement('img');
  img.src = aboutMeConfig.profileImage.src;
  img.alt = aboutMeConfig.profileImage.alt;
  img.width = aboutMeConfig.profileImage.width;
  img.onerror = function() {
    console.error('Error loading profile image:', this.src);
    // Add fallback image or placeholder
    this.src = 'https://via.placeholder.com/300x400?text=Pranav+Garg';
    this.onerror = null; // Prevent infinite error loop
  };
  profileImage.appendChild(img);
  
  // Assemble the profile section
  profileSection.appendChild(profileContent);
  profileSection.appendChild(profileImage);
  
  // Add to the page
  aboutSection.appendChild(profileSection);
}