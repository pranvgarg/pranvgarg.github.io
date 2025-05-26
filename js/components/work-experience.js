/**
 * Work Experience Component
 * Manages the work experience section content
 */

// Work experience content
const workExperienceConfig = {
  experiences: [
    {
      company: {
        name: "Kimberly-Clark",
        url: "https://www.kimberly-clark.com/"
      },
      role: "Solution Data Engineer and Business Analyst",
      description: `
        I led enterprise-scale digital procurement initiatives, optimizing ETL pipelines,
        enhancing data architecture, and integrating SAP S/4 HANA with Coupa to improve
        procurement scalability and data accuracy. My work involved SQL query optimization,
        reducing execution latency, and implementing CI/CD pipelines for automated data ingestion
        using Azure Data Factory and Databricks. Additionally, I contributed to
        workflow automation, leveraging SCRUM methodologies to streamline vendor management
        and approval processes. Through data-driven forecasting and cloud-based infrastructure
        enhancements, I enabled efficient system integrations, reducing procurement redundancy and
        improving operational efficiency across global teams. Additionally,
        I implemented ETL pipelines to integrate data into <a href="https://www.collibra.com/" target="_blank">Collibra</a>,
        making data governance more robust and accessible for teams across the organization.
      `
    }
  ],
  summary: [
    `My journey in analytics and technology has been hands-on and rewarding. I've built expertise in Python, SQL,
     and machine learning while honing my data visualization skills using tools like Tableau and Power BI.
     Through internships and projects, I've learned to take ideas from concept to implementation,
     developing predictive models and advanced analytics that create actionable insights.`,
    `I'm always eager to learn and collaborate. If you're interested in connecting, feel free to reach out—I'm excited
     to explore opportunities where I can combine my technical expertise, procurement experience, and business acumen
     to make an impact.`
  ]
};

// Function to initialize the work experience section
function initializeWorkExperience() {
  const workSection = document.querySelector('.work-experience-section');
  if (!workSection) return; // Guard clause if container doesn't exist
  
  // Create heading
  const heading = document.createElement('h2');
  heading.className = 'section-heading';
  heading.textContent = 'Work Experience';
  workSection.appendChild(heading);
  
  // Add each work experience
  workExperienceConfig.experiences.forEach(exp => {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = `
      As a ${exp.role} at
      <a href="${exp.company.url}" target="_blank">${exp.company.name}</a>,
      ${exp.description}
    `;
    workSection.appendChild(paragraph);
  });
  
  // Add summary paragraphs
  workExperienceConfig.summary.forEach(summaryText => {
    const paragraph = document.createElement('p');
    paragraph.textContent = summaryText;
    workSection.appendChild(paragraph);
  });
}