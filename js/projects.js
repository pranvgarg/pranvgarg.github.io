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
  if (!container) return; // Guard clause if container doesn't exist

  projects.forEach(project => {
    // Create main card div
    const card = document.createElement('div');
    card.className = 'project-card';
    if (project.highlighted) {
      card.classList.add('highlighted');
    }
    
    // Create and set image
    const img = document.createElement('img');
    img.className = 'project-image';
    img.src = project.image;
    img.alt = project.imageAlt;
    card.appendChild(img);
    
    // Create and set title
    const titleDiv = document.createElement('div');
    titleDiv.className = 'project-title';
    const titleLink = document.createElement('a');
    titleLink.href = project.link;
    titleLink.textContent = project.title;
    titleDiv.appendChild(titleLink);
    card.appendChild(titleDiv);
    
    // Create and set learnings
    const learningsP = document.createElement('p');
    learningsP.className = 'project-learnings';
    learningsP.innerHTML = project.learnings;
    card.appendChild(learningsP);
    
    // Create and set insights
    const insightsList = document.createElement('ul');
    insightsList.className = 'project-insights';
    project.insights.forEach(insight => {
      const li = document.createElement('li');
      li.textContent = insight;
      insightsList.appendChild(li);
    });
    card.appendChild(insightsList);
    
    // Create and set improvements if they exist
    if (project.improvements) {
      const improvementsP = document.createElement('p');
      improvementsP.className = 'project-improvements';
      improvementsP.textContent = project.improvements;
      card.appendChild(improvementsP);
    }
    
    // Create and set additional link if it exists
    if (project.additionalLink) {
      const linkP = document.createElement('p');
      linkP.className = 'project-link';
      const link = document.createElement('a');
      link.href = project.additionalLink;
      link.target = '_blank';
      link.textContent = 'Read more';
      linkP.appendChild(link);
      card.appendChild(linkP);
    }
    
    container.appendChild(card);
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', createProjectCards);