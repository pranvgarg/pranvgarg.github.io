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
  },
  {
    highlighted: true,
    image: "images/project/icu_mortality.png",
    imageAlt: "ICU Mortality Prediction",
    title: "Predicting ICU Mortality Using Machine Learning: A Global Perspective",
    link: "https://github.com/pranvgarg/Predicting-ICU-Mortality-Using-Machine-Learning",
    learnings: "This project gave me valuable experience in developing machine learning models for healthcare applications. I deepened my understanding of how to handle imbalanced datasets using techniques like SMOTENC, how to evaluate models with various metrics (e.g., accuracy, recall, ROC AUC), and how to apply dimensionality reduction (PCA) to streamline high-dimensional data. It also reinforced the importance of global data and model generalization across diverse healthcare systems.",
    insights: [
      "The project demonstrated the power of ensemble methods (like Random Forest and XGBoost) and neural networks in improving model performance.",
      "It was interesting to observe how the MLP model outperformed traditional methods like APACHE in terms of recall, which is crucial for minimizing false negatives in critical healthcare predictions."
    ],
    additionalLink: "https://medium.com/@pg.garg.pranav/predicting-icu-mortality-using-machine-learning-a-global-perspective-dc18d009afb0"
  }
];

// Function to create project cards
function createProjectCards() {
  const container = document.querySelector('.project-list');
  if (!container) return; // Guard clause if container doesn't exist
  
  // Clear any existing content
  container.innerHTML = '';

  projects.forEach(project => {
    // Create main card div
    const card = document.createElement('div');
    card.className = 'project-card';
    if (project.highlighted) {
      card.classList.add('highlighted');
    }
    
    // Create image container
    const imgContainer = document.createElement('div');
    imgContainer.className = 'project-image-container';
    
    // Create and set image
    const img = document.createElement('img');
    img.className = 'project-image';
    img.src = project.image;
    img.alt = project.imageAlt;
    imgContainer.appendChild(img);
    card.appendChild(imgContainer);
    
    // Create content container
    const contentDiv = document.createElement('div');
    contentDiv.className = 'project-content';
    
    // Create and set title
    const titleEl = document.createElement('h3');
    titleEl.className = 'project-title';
    const titleLink = document.createElement('a');
    titleLink.href = project.link;
    titleLink.target = '_blank';
    titleLink.textContent = project.title;
    titleEl.appendChild(titleLink);
    contentDiv.appendChild(titleEl);
    
    // Create and set learnings
    const learningsP = document.createElement('p');
    const learnStrong = document.createElement('strong');
    learnStrong.textContent = 'What I Learned: ';
    learningsP.appendChild(learnStrong);
    // Use a temporary div to convert HTML string to nodes
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = project.learnings;
    // Append all child nodes from the temp div
    while (tempDiv.firstChild) {
      learningsP.appendChild(tempDiv.firstChild);
    }
    contentDiv.appendChild(learningsP);
    
    // Create and set insights
    if (project.insights && project.insights.length > 0) {
      const insightsP = document.createElement('p');
      const insightStrong = document.createElement('strong');
      insightStrong.textContent = 'Key Insights:';
      insightsP.appendChild(insightStrong);
      contentDiv.appendChild(insightsP);
      
      const insightsList = document.createElement('ul');
      project.insights.forEach(insight => {
        const li = document.createElement('li');
        li.textContent = insight;
        insightsList.appendChild(li);
      });
      contentDiv.appendChild(insightsList);
    }
    
    // Create and set improvements if they exist
    if (project.improvements) {
      const improvementsP = document.createElement('p');
      const improvementsStrong = document.createElement('strong');
      improvementsStrong.textContent = 'Future Improvements: ';
      improvementsP.appendChild(improvementsStrong);
      improvementsP.appendChild(document.createTextNode(project.improvements));
      contentDiv.appendChild(improvementsP);
    }
    
    // Create and set additional link if it exists
    if (project.additionalLink) {
      const linkP = document.createElement('p');
      const link = document.createElement('a');
      link.href = project.additionalLink;
      link.target = '_blank';
      link.textContent = 'Read more on Medium';
      linkP.appendChild(link);
      contentDiv.appendChild(linkP);
    }
    
    card.appendChild(contentDiv);
    container.appendChild(card);
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', createProjectCards);