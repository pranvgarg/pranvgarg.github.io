/**
 * Project Data
 * Centralized data for all portfolio projects
 */

// Project data
const projects = [
  {
    highlighted: true,
    image: "images/project/investment-analytics.png",
    imageAlt: "Investment Analytics Pipeline Architecture",
    title: "Production-Grade Investment Analytics Pipeline",
    link: "https://github.com/pranvgarg/investment-analytics-pipeline",
    techStack: ["Apache Airflow", "dbt", "PostgreSQL", "Streamlit", "Docker", "Great Expectations", "Polygon.io", "Alpaca API"],
    learnings: "Developed a comprehensive, production-ready investment portfolio tracking system that showcases modern data engineering best practices. Gained hands-on experience with real-time data ingestion, robust orchestration, data quality validation, and financial analytics at scale.",
    insights: [
      "Architected a complete data pipeline with real-time data ingestion from professional financial APIs (Polygon.io, Alpaca) and robust orchestration using Apache Airflow with Astro Runtime.",
      "Implemented advanced financial metrics including Time-Weighted Returns, Sharpe Ratio, and Alpha calculations using dbt for data transformation and PostgreSQL for optimized storage.",
      "Created interactive Streamlit dashboards featuring real-time portfolio visualization, performance metrics, and risk analysis with benchmark comparisons.",
      "Integrated comprehensive data quality validation with Great Expectations, implementing checks for data freshness, completeness, accuracy, and business rule validation.",
      "Containerized the entire application stack using Docker Compose for easy deployment and scalability, including PostgreSQL, Airflow, and Streamlit services.",
      "Implemented monitoring and alerting with Slack integration for pipeline health, data quality issues, and critical failures.",
      "Designed a partitioned database schema for optimal performance with time-series financial data, including optimized indexes for common query patterns."
    ],
    fullDescription: "The Investment Analytics Pipeline is a sophisticated, production-grade solution for tracking and analyzing investment portfolios. The system features a microservices architecture with clear separation of concerns between data ingestion, processing, storage, and presentation layers. The pipeline begins with real-time data ingestion from professional financial APIs (Polygon.io and Alpaca), processes the data through a robust ETL pipeline orchestrated by Apache Airflow, and stores it in an optimized PostgreSQL database with time-series partitioning. The transformation layer, built with dbt, handles complex financial calculations including Time-Weighted Returns, Sharpe Ratio, and Alpha calculations. Data quality is ensured through comprehensive validation with Great Expectations, checking for data freshness, completeness, and business rule compliance. The interactive Streamlit dashboard provides real-time portfolio visualization, performance metrics, and risk analysis. The entire system is containerized with Docker Compose for easy deployment and scalability, and includes monitoring and alerting capabilities. The project demonstrates industry best practices in data engineering, including infrastructure as code, automated testing, and continuous monitoring.",
    additionalLink: "https://github.com/pranvgarg/investment-analytics-pipeline"
  },
  {
    highlighted: true,
    image: "images/project/newspaper-vendor.png",
    imageAlt: "Newspaper Vendor Model Optimization Results",
    title: "Extended Newsvendor Model with Price Optimization",
    link: "https://github.com/pranvgarg/Newspaper-Vendor-Model",
    techStack: ["Python", "Pandas", "NumPy", "SciPy", "Matplotlib", "Linear Programming", "Quadratic Programming"],
    learnings: "Developed an advanced newsvendor model that extends the traditional approach by incorporating price optimization and real-world cost factors. Gained expertise in mathematical optimization techniques and their application to inventory and pricing problems.",
    insights: [
      "Extended the classic newsvendor model to simultaneously optimize both production quantity and pricing decisions under demand uncertainty.",
      "Implemented Quadratically Constrained Programming (QCP) to solve the optimization problem, considering price sensitivity and additional cost factors.",
      "Achieved 5-10% higher profits compared to the standard newsvendor model by incorporating price elasticity of demand.",
      "Conducted sensitivity analysis using bootstrapping to evaluate model robustness and identify optimal parameters.",
      "Visualized optimization results and price-demand relationships to provide actionable business insights.",
      "Identified optimal price point at approximately $0.95 and production quantity at 535 units for maximum profitability."
    ],
    fullDescription: "The Extended Newsvendor Model project focuses on solving a classic operations research problem with modern optimization techniques. The traditional newsvendor model determines the optimal inventory level for perishable goods under demand uncertainty, but often ignores pricing decisions. This project extends the model by incorporating price optimization, allowing for simultaneous determination of both optimal price and order quantity. The solution uses Quadratically Constrained Programming (QCP) to handle the non-linear relationship between price and demand, while considering real-world costs such as rush ordering and disposal fees. The implementation includes a comprehensive sensitivity analysis using bootstrapping to assess the robustness of the solution under different demand scenarios. The model was validated against historical data and demonstrated significant profit improvements over traditional approaches. The project showcases the power of mathematical optimization in business decision-making, particularly in inventory management and pricing strategy.",
    additionalLink: "https://github.com/pranvgarg/Newspaper-Vendor-Model"
  },
  {
    highlighted: true,
    image: "images/project/connect4.jpeg",
    imageAlt: "Connect 4 AI Game",
    title: "AI-Powered Connect 4: CNN & Transformer-Based Bot",
    link: "https://github.com/pranvgarg/Connect4/tree/main",
    techStack: ["TensorFlow", "PyTorch", "Docker", "AWS", "Python"],
    learnings: "This project provided hands-on experience in implementing <span class=\"highlight\">Monte Carlo Tree Search (MCTS)</span> for game decision-making, training a <span class=\"highlight\">CNN-based AI</span> for spatial pattern recognition, and leveraging <span class=\"highlight\">Transformer-based AI</span> for sequence-based strategic play. I gained insights into deep learning architectures, Docker containerization, and AWS Lightsail deployment.",
    insights: [
      "CNN vs. Transformer Performance: CNNs excel at spatial recognition and short-term tactics, achieving 76% accuracy, whereas Transformers focus on long-term play but struggle with localized dependencies (67% accuracy).",
      "Efficient Data Generation: Self-play with MCTS generated 1.8M+ labeled game states, speeding up AI training.",
      "Docker & Anvil Uplink for Deployment: Containerized AI models using Docker & Docker Compose and deployed on AWS Lightsail, ensuring scalability and efficient cloud execution.",
      "Game Optimization: Integrated TensorFlow optimizations and environment variable tuning to minimize GPU memory overloads and reduce model inference time."
    ],
    fullDescription: "This Connect 4 AI project explores and compares two different deep learning approaches for game strategy: Convolutional Neural Networks (CNNs) and Transformer models. I implemented a Monte Carlo Tree Search (MCTS) algorithm that generates high-quality training data through self-play, creating over 1.8 million labeled game states. The CNN model was designed to recognize spatial patterns on the game board, while the Transformer model was trained to understand the sequential nature of gameplay. Performance testing revealed that the CNN achieved 76% accuracy in predicting optimal moves, excelling at tactical play, while the Transformer reached 67% accuracy but showed promise in long-term strategic planning. The entire system was containerized using Docker and deployed on AWS Lightsail for scalable cloud execution. I implemented memory optimizations and TensorFlow configurations to reduce inference time and prevent GPU memory overloads during gameplay."
  },
  {
    image: "images/project/image3.png",
    imageAlt: "Classification Output",
    title: "Image Classification with Neural Network",
    link: "https://github.com/pranvgarg/Image-Classification-with-Neural-Network/tree/main",
    techStack: ["PyTorch", "NumPy", "Matplotlib", "Python"],
    learnings: "I gained practical experience in building and training a Convolutional Neural Network (CNN) using PyTorch for multi-class image classification. This project strengthened my understanding of CNN architecture, hyperparameter tuning, and model evaluation.",
    insights: [
      "The model achieved strong performance (93.57% training accuracy and 85.72% validation accuracy) but faced challenges in distinguishing visually similar categories.",
      "Pooling layers proved effective for dimensionality reduction, and fully connected layers were critical for classification."
    ],
    improvements: "Refining the model by separately training visually similar classes and exploring advanced architectures could further enhance accuracy while maintaining generalization.",
    fullDescription: "This image classification project involved designing, building, and training a custom Convolutional Neural Network (CNN) using PyTorch. I worked with a multi-class dataset containing diverse image categories and implemented a complete machine learning pipeline from data preprocessing to model evaluation. The architecture featured multiple convolutional layers with ReLU activations, max pooling for dimensionality reduction, and fully connected layers for classification. After training for 50 epochs with a batch size of 64 and a learning rate of 0.001, the model achieved 93.57% training accuracy and 85.72% validation accuracy. Key challenges included handling overfitting and distinguishing between visually similar categories. I experimented with data augmentation techniques such as random flips, rotations, and normalization to improve the model's generalization capability."
  },
  {
    image: "images/project/image4.png",
    imageAlt: "Competitive Analysis Output",
    title: "Competitive Analysis of Entry-Level Luxury Car Market",
    link: "https://github.com/pranvgarg/Competitive-Analysis-Entry-Level-Luxury-Car-Market",
    techStack: ["NLP", "R", "Tableau", "Sentiment Analysis"],
    learnings: "Analyzed social media data to explore customer preferences, brand dynamics, and the factors shaping brand appeal in the luxury car segment.",
    insights: [
      "Uncovered distinct brand groupings; BMW and Audi stood out for their aspirational appeal, while Cadillac led in luxury perception."
    ],
    fullDescription: "This competitive analysis project explored the entry-level luxury car market through the lens of social media data. I collected and analyzed over 50,000 social media posts mentioning major brands like BMW, Audi, Mercedes-Benz, Lexus, and Cadillac. Using natural language processing techniques in R, I conducted sentiment analysis to understand emotional responses to each brand and extracted key themes from consumer discussions. The analysis revealed distinct brand positioning: BMW and Audi resonated strongly with younger demographics and were associated with performance and aspirational qualities, while Cadillac dominated in luxury perception but struggled with younger buyers. Mercedes-Benz and Lexus occupied middle ground, balancing luxury with practicality. I visualized these insights using Tableau to create interactive dashboards that mapped brand perception across different customer segments and geographic regions."
  },
  {
    highlighted: true,
    image: "images/project/icu_mortality.png",
    imageAlt: "ICU Mortality Prediction",
    title: "Predicting ICU Mortality Using Machine Learning: A Global Perspective",
    link: "https://github.com/pranvgarg/Predicting-ICU-Mortality-Using-Machine-Learning",
    techStack: ["Scikit-learn", "TensorFlow", "Pandas", "SMOTE", "PCA"],
    learnings: "This project gave me valuable experience in developing machine learning models for healthcare applications. I deepened my understanding of how to handle imbalanced datasets using techniques like SMOTENC, how to evaluate models with various metrics (e.g., accuracy, recall, ROC AUC), and how to apply dimensionality reduction (PCA) to streamline high-dimensional data. It also reinforced the importance of global data and model generalization across diverse healthcare systems.",
    insights: [
      "The project demonstrated the power of ensemble methods (like Random Forest and XGBoost) and neural networks in improving model performance.",
      "It was interesting to observe how the MLP model outperformed traditional methods like APACHE in terms of recall, which is crucial for minimizing false negatives in critical healthcare predictions."
    ],
    additionalLink: "https://medium.com/@pg.garg.pranav/predicting-icu-mortality-using-machine-learning-a-global-perspective-dc18d009afb0",
    fullDescription: "This research project focused on developing machine learning models to predict mortality risk in intensive care units (ICUs) using the MIMIC-III and eICU global datasets. I addressed the challenge of imbalanced datasets by implementing SMOTENC (Synthetic Minority Over-sampling Technique for Nominal and Continuous features) to create synthetic samples of the minority class. For dimensionality reduction, I applied Principal Component Analysis (PCA) to manage the high-dimensional clinical data effectively. I evaluated multiple machine learning models including Random Forest, XGBoost, and Multi-layer Perceptron (MLP) neural networks, comparing them with traditional clinical scoring systems like APACHE. The MLP model achieved the highest recall (0.89) and F1-score (0.81), significantly outperforming the APACHE system's 0.71 recall. The models were validated across different healthcare systems to ensure generalizability, and I created a robust evaluation framework that prioritized recall to minimize the more costly false negatives in a critical care setting."
  },
  {
    image: "images/project/fragrances.png",
    imageAlt: "Fragrances Recommender System",
    title: "Fragrances Recommender System",
    link: "https://github.com/pranvgarg/Fragrances-Recommender-System",
    techStack: ["BERT", "Flask API", "BeautifulSoup", "SQLite", "NLP"],
    learnings: "I gained experience in developing a personalized fragrance recommendation engine by scraping over 44,000 fragrance reviews from the Base Notes forum. I applied advanced NLP techniques like BERT for topic modeling, sentiment analysis for customer feedback, and built an API to integrate the system with e-commerce platforms for both online and in-store applications.",
    insights: [
      "The system effectively matches user preferences with product recommendations.",
      "I observed that leveraging customer feedback and identifying key attributes in reviews improved the relevance of the suggestions.",
      "Using topic modeling helped identify the most desired fragrance attributes, boosting customer satisfaction."
    ],
    fullDescription: "This project involved creating a sophisticated fragrance recommendation system by leveraging natural language processing and machine learning techniques. I started by scraping over 44,000 fragrance reviews from the Base Notes forum using BeautifulSoup, then preprocessed this text data for analysis. The core of the system employed BERT (Bidirectional Encoder Representations from Transformers) for advanced topic modeling, allowing me to extract latent fragrance attributes and preferences from unstructured review text. I built a sentiment analysis component to weigh reviews based on customer satisfaction, ensuring more positive experiences had greater influence on recommendations. The system was designed to consider both explicit user preferences and implicit patterns derived from review analysis. I implemented the recommendation engine as a Flask API, making it easy to integrate with e-commerce platforms for online shopping or in-store kiosk applications. The system stores fragrance profiles and user interaction data in a SQLite database, allowing for continuous improvement of recommendations through feedback loops."
  },
  {
    image: "images/project/heartbeat.png",
    imageAlt: "Heartbeat Anomaly Detection",
    title: "LSTM Autoencoder and CNN for Heartbeat Anomaly Detection",
    link: "https://github.com/pranvgarg/HeartBeat-Detection",
    techStack: ["TensorFlow", "LSTM", "CNN", "Keras", "Scikit-learn"],
    learnings: "This project gave me hands-on experience in using <span class=\"highlight\">CNNs</span> for feature extraction and <span class=\"highlight\">LSTM Autoencoders</span> for detecting heartbeat anomalies in time-series data. I gained knowledge in preprocessing time-series data, handling missing values, and applying MinMaxScaler to scale features. I also explored anomaly detection using reconstruction errors from LSTM models.",
    insights: [
      "The combination of CNNs for feature extraction and LSTM Autoencoders for sequence modeling proved effective in detecting anomalies in heartbeat signals.",
      "I learned how to use reconstruction error as a key indicator for anomaly detection, and how cross-validation can improve model reliability.",
      "The Precision-Recall Curve (PRC) and AUPRC were crucial in evaluating model performance."
    ],
    fullDescription: "This heartbeat anomaly detection project combined Convolutional Neural Networks (CNNs) and Long Short-Term Memory (LSTM) Autoencoders to identify irregular patterns in ECG time-series data. I preprocessed the PhysioNet ECG dataset, handling missing values and applying MinMaxScaler to normalize the signals. The architecture featured a CNN component to extract spatial features from the ECG waveforms, which were then fed into an LSTM Autoencoder that learned to reconstruct normal heartbeat patterns. By measuring reconstruction error—the difference between the original input and the model's reconstruction—I could identify anomalous heartbeats that deviated from normal patterns. I implemented a threshold-based classification system where reconstruction errors above a certain value were flagged as anomalies. The model was evaluated using 5-fold cross-validation, achieving an F1-score of 0.92 and an Area Under the Precision-Recall Curve (AUPRC) of 0.94. The system demonstrated particular strength in detecting subtle arrhythmias that traditional rule-based methods often miss."
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
    img.loading = "lazy"; // Add lazy loading for better performance
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
    
    // Add tech stack badges if they exist
    if (project.techStack && project.techStack.length > 0) {
      const techStackDiv = document.createElement('div');
      techStackDiv.className = 'tech-stack';
      
      project.techStack.forEach(tech => {
        const techBadge = document.createElement('span');
        techBadge.className = 'tech-badge';
        techBadge.textContent = tech;
        techStackDiv.appendChild(techBadge);
      });
      
      contentDiv.appendChild(techStackDiv);
    }
    
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

    // Add expandable section with full description if it exists
    if (project.fullDescription) {
      // Add read more button
      const readMoreContainer = document.createElement('div');
      readMoreContainer.className = 'read-more-container';
      
      const readMoreBtn = document.createElement('button');
      readMoreBtn.className = 'read-more-btn';
      readMoreBtn.textContent = 'Read More';
      readMoreBtn.setAttribute('aria-expanded', 'false');
      readMoreContainer.appendChild(readMoreBtn);
      
      contentDiv.appendChild(readMoreContainer);
      
      // Create expandable content
      const expandableContent = document.createElement('div');
      expandableContent.className = 'expandable-content';
      expandableContent.style.display = 'none';
      
      const fullDescP = document.createElement('p');
      fullDescP.textContent = project.fullDescription;
      expandableContent.appendChild(fullDescP);
      
      contentDiv.appendChild(expandableContent);
      
      // Add click event listener to toggle content
      readMoreBtn.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
          expandableContent.style.display = 'none';
          this.textContent = 'Read More';
          this.setAttribute('aria-expanded', 'false');
        } else {
          expandableContent.style.display = 'block';
          this.textContent = 'Read Less';
          this.setAttribute('aria-expanded', 'true');
        }
      });
    }
    
    card.appendChild(contentDiv);
    container.appendChild(card);
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', createProjectCards);