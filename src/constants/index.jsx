import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import personImage from "../assets/testimonial.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
  RiJavaLine,
  RiRssLine,
  RiBarChartLine,
  RiBarChartHorizontalLine,
  RiDatabase2Line,
  RiLeafLine,
  RiCloudLine,
  RiServerLine,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Niraj Mohabey",
  role: "Data Scientist | Machine Learning Enthusiast",
  subheading:
    "I have a strong foundation in data science and software engineering, with hands-on experience in machine learning, data analysis, and web development. I excel at building innovative solutions like predictive models, dashboards, and interactive tools. My focus is on applying technology to solve real-world challenges in dynamic and collaborative environments.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "StockSensei Stock Market Prediction Model",
    description:
      "Developed and implemented predictive models using ARIMA, SARIMA, and Prophet to forecast stock market trends, with results stored in PostgreSQL for analysis and reporting. Built interactive web-based dashboards with HTML/CSS and Tableau to visualize forecasted data, and conducted model performance evaluations, storing metrics and visualizations to support data-driven decision-making.",
    techStack: ["PostgreSQL", "HTML", "CSS", "Python", "Machine Learning"],
    imgSrc: project1,
    link: "https://example-ecommerce.com",
  },
  {
    id: 2,
    title: "Video Game Sales History Change Point Detection Project",
    description:
      "Utilized ARIMA modeling and Plotly to analyze a dataset of 11,493 video game sales records (1980-2020), identifying key industry change points and trends. Improved impact quantification accuracy by 25% through segmentation and regression analysis, enhancing change point detection methods and reducing MSE by 18%.",
    techStack: ["Python", "Machine Learning", "SQL", "HTML", "CSS"],
    imgSrc: project2,
    link: "https://example-socialapp.com",
  },
  {
    id: 3,
    title: "Business Intelligence Solution for X (formerly Twitter)",
    description:
      "Developed a comprehensive BI solution with four strategic dashboards for CEO sentiment, competitive analysis, stock performance, and real-time tweet monitoring. Performed predictive analysis for spam account detection, achieving 91.82% accuracy using Random Forest model. Demonstrated expertise in data warehousing, dashboard design, and predictive analytics, enhancing decision-making capabilities and improving social media campaign performance by 25%.",
    techStack: ["Python", "Machine Learning", "SQL", "HTML", "CSS"],
    imgSrc: project3,
    link: "https://myportfolio.com",
  },
  {
    id: 4,
    title: "Renewable Energy Market Analysis",
    description:
      "Researched market participation strategies for renewable energy and storage assets in wholesale energy markets. Developed financial analysis models for energy asset bidding activities, aligning with market demands and clean energy goals.",
    techStack: ["Python", "Machine Learning", "SQL", "HTML", "CSS"],
    imgSrc: project4,
    link: "https://example-blogplatform.com",
  },
  {
    id: 5,
    title: "Plagiarism Detection Website Using Machine Learning",
    description:
      "Guided the creation of a Python plagiarism detection system using advanced NLP techniques, LCS, and cosine similarity algorithms by improving detection accuracy by 20%.",
    techStack: ["Python", "Machine Learning", "SQL", "NLP", "HTML", "CSS"],
    imgSrc: project5,
    link: "https://github.com/nirajmohabey/Plagiarism_Detection",
  },
  {
    id: 6,
    title: "Color Detection Project",
    description:
      "Executed a Python project using Pandas and OpenCV to detect colors in images and live webcam feeds, achieving a high accuracy rate of 95%. Designed a user-friendly interface that allows real-time color identification and RGB value display, enhancing the project's practical applications in design and digital imaging fields by 35%.",
    techStack: ["Python", "Machine Learning", "SQL", "HTML", "CSS"],
    imgSrc: project6,
    link: "https://github.com/nirajmohabey/Color_Detection",
  },
];

export const SKILLS = [
  {
    name: "Python",
    icon: <RiCodeSSlashLine className="text-green-500" />,
  },
  {
    name: "SQL",
    icon: <RiDatabaseLine className="text-purple-600" />,
  },
  {
    name: "Git",
    icon: <RiGitBranchLine className="text-orange-700" />,
  },
  {
    name: "R Programming",
    icon: <RiRssLine className="text-blue-400" />,
  },
  {
    name: "Tableau",
    icon: <RiBarChartLine className="text-blue-600" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Power BI",
    icon: <RiBarChartHorizontalLine className="text-yellow-600" />,
  },
  {
    name: "Oracle",
    icon: <RiDatabase2Line className="text-red-600" />,
  },
  {
    name: "Anaconda",
    icon: <RiLeafLine className="text-green-500" />,
  },
  {
    name: "AWS",
    icon: <RiCloudLine className="text-yellow-400" />,
  },
  {
    name: "PostgreSQL",
    icon: <RiServerLine className="text-blue-500" />,
  },
  {
    name: "HTML",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "Jun 2022 – Nov 2023",
    role: "Data Science Intern",
    company: "SUNRISE GROUP USA LLC",
    description:
      "Applied machine learning models, including SVM and Linear Regression, to analyze network-based data for detecting anomalies and patterns in financial datasets, achieving 83% prediction accuracy on test data. Developed and implemented an interactive system for network data analysis, enhancing user input processing for insurance cost prediction. Collaborated with cross-functional teams to analyze data and present insights to stakeholders, supporting proactive cybersecurity measures for financial data protection.",
    techStack: [
      "Python",
      "Data Analysis",
      "Machine Learning",
      "SVM",
      "Linear Regressing",
    ],
  },
  {
    yearRange: "Aug 2020 – Jan 2021",
    role: "Data Science Intern",
    company: "INNODATATICS * Innovation | Data | Analytics",
    description:
      "Achieved 98% accuracy in sentiment analysis of network traffic using NLP techniques to identify anomalous behaviors in Trip Advisor reviews. Performed data cleaning, transformation, and analysis using Python, focusing on pattern recognition for network traffic and behavioral analytics to predict network intrusions.",
    techStack: ["Python", "Data Analysis", "Machine Learning", "MySQL", "NLP"],
  },
  {
    yearRange: "Jun 2020 – Aug 2020",
    role: "Machine Learning Intern",
    company: "INTERNSHIP STUDIO",
    description:
      "Reengineered marketing classification system, boosting targeting accuracy to 98% and enhancing campaign outcomes through thorough data cleaning and preparation. Implemented advanced segmentation techniques to personalize marketing campaigns, resulting in a 20% increase in customer engagement and a 15% rise in conversion rates.",
    techStack: ["Python", "Machine Learning", "SQL", "NLP"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Master of Science in Data Science",
    institution: "Worcester Polytechnic Institute",
    duration: "Jan 2024 – Dec 2025",
    description:
      "Graduated with honors in Computer Science, focusing on algorithms, data structures, and web development. Completed a capstone project on scalable cloud architectures.",
  },
];

export const TESTIMONIAL = {
  name: "Sarah Doe",
  title: "CEO, TechCorp",
  quote:
    "Working with David was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
  image: personImage,
};
