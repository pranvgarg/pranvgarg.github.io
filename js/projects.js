// Project data
const projects = [
  {
    highlighted: true,
    image: "images/project/connect4.jpeg",
    imageAlt: "Connect 4 AI Game",
    title: "AI-Powered Connect 4: CNN & Transformer-Based Bot",
    link: "https://github.com/pranvgarg/Connect4/tree/main",
    learnings: "This project provided hands-on experience in implementing <span class=\"highlight\">Monte Carlo Tree Search (MCTS)</span> for game decision-making, training a <span class=\"highlight\">CNN-based AI</span> for spatial pattern recognition, and leveraging <span class=\"highlight\">Transformer-based AI</span> for sequence-based strategic play. I gained insights into deep learning architectures, Docker containerization, and AWS Lightsail deployment.",
    insights: [
      "CNN vs. Transformer Performance: CNNs excel at spatial recognition and short-term tactics, achieving 76% accuracy, whereas Transformers focus on long-term play but struggle with localized dependencies (67% accuracy).",
      "Efficient Data Generation: Self-play with MCTS generated 1.8M+ labeled game states, speeding up AI training.",
      "Docker & Anvil Uplink for Deployment: Containerized AI models using Docker & Docker Compose and deployed on AWS Lightsail, ensuring scalability and efficient cloud execution.",
      "Game Optimization: Integrated TensorFlow optimizations and environment variable tuning to minimize GPU memory overloads and reduce model inference time."
    ]
  },
  {
    image: "images/project/image3.png",
    imageAlt: "Classification Output",
    title: "Image Classification with Neural Network",
    link: "https://github.com/pranvgarg/Image-Classification-with-Neural-Network/tree/main",
    learnings: "I gained practical experience in building and training a Convolutional Neural Network (CNN) using PyTorch for multi-class image classification. This project strengthened my understanding of CNN architecture, hyperparameter tuning, and model evaluation.",
    insights: [
      "The model achieved strong performance (93.57% training accuracy and 85.72% validation accuracy) but faced challenges in distinguishing visually similar categories.",
      "Pooling layers proved effective for dimensionality reduction, and fully connected layers were critical for classification."
    ],
    improvements: "Refining the model by separately training visually similar classes and exploring advanced architectures could further enhance accuracy while maintaining generalization."
  }
];

// Function to create project cards
function createProjectCards() {
  const container = document.getElementById('projects-container');
  const template = document.getElementById('project-template');

  projects.forEach(project => {
    const clone = template.content.cloneNode(true);
    
    // Add highlighted class if specified
    if (project.highlighted) {
      clone.querySelector('.project-card').classList.add('highlighted');
    }
    
    // Set image
    const img = clone.querySelector('.project-image');
    img.src = project.image;
    img.alt = project.imageAlt;
    
    // Set title and link
    const link = clone.querySelector('.project-title a');
    link.href = project.link;
    link.textContent = project.title;
    
    // Set learnings
    clone.querySelector('.project-learnings').innerHTML = project.learnings;
    
    // Set insights
    const insightsList = clone.querySelector('.project-insights');
    project.insights.forEach(insight => {
      const li = document.createElement('li');
      li.textContent = insight;
      insightsList.appendChild(li);
    });
    
    // Set improvements if they exist
    const improvementsP = clone.querySelector('.project-improvements');
    if (project.improvements) {
      improvementsP.textContent = project.improvements;
    } else {
      improvementsP.style.display = 'none';
    }
    
    // Add additional link if it exists
    const linkP = clone.querySelector('.project-link');
    if (project.additionalLink) {
      linkP.innerHTML = `<a href="${project.additionalLink}" target="_blank">Read more</a>`;
    } else {
      linkP.style.display = 'none';
    }
    
    container.appendChild(clone);
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', createProjectCards);