const project1 = "/assets/projects/project-1.jpeg";
const project2 = "/assets/projects/project-2.png";
const project3 = "/assets/projects/project-3.jpeg";
const project4 = "/assets/projects/project-4.jpeg";

export const HERO_CONTENT = `I am a 1st year Immersive Software Engineering [ISE] student at the University of Limerick. I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. Currently pursuing a BSc/MSc in Immersive Software Engineering with a QCA of 4.00. I thrive in collaborative environments and enjoy solving complex problems with others.`;


export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. Currently pursuing a BSc/MSc in Immersive Software Engineering with a QCA of 4.00. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "November 2024 - Present",
    role: "AI/ML Team Member",
    company: "ULAS HiPR",
    description: `Worked on AI models for high-powered rocketry simulations as part of Euroc 25 competition. Used SymPy, NumPy, RocketPy, and other Python libraries for AI models.`,
    technologies: ["Python"],
  },
  {
    year: "April 2023 - September 2024",
    role: "Front-Desk Receptionist",
    company: "Woodenbridge Hotel & Lodge",
    description: `Handled communications with Microsoft Outlook and multi-line phone systems. Used the HotSoft property management system and TablePath program for reservations. Operated the reception under stressful conditions, doing a variety of tasks such as check-ins, taking payments, answering phone calls & emails, and handling customer issues.`,
    technologies: ["Microsoft Outlook", "HotSoft", "TablePath"],
  },
  {
    year: "June 2020 - November 2022",
    role: "Front-Desk Receptionist",
    company: "Moneylands Farm",
    description: `Duties involved handling check-ins, taking payments, and handling resident issues & queries. Managed bookings using Smoobu property management system and Microsoft Excel. Helped with technical issues such as updating the website and resolving issues with the property management system.`,
    technologies: ["Smoobu", "Microsoft Excel"],
  },
];


export const PROJECTS = [
  {
    title: "Convolutional Neural Network",
    image: project1,
    description:
      "Created a Neural Network to identify hand-written letters based on the MNIST dataset using Java. Utilized Convolutional, Max Pooling, and Fully Connected Layers along with a custom data reader. Achieved 92% accuracy for guessing numbers based on the test dataset without using any external libraries.",
    technologies: ["Java", "Machine Learning", "Object-Oriented Programming"],
  },
  {
    title: "Employee Wellness & Community Platform",
    image: project1,
    description:
      "Front-end framework for a B2B SaaS platform to organize internal events such as gym classes or hikes and to track and compete in fitness challenges with colleagues. Worked on this as part of a team of four for the NDRC 2024 Startup Sprint Hackathon and won the award for the 'Most Progress' made on the day.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Cheapest Flight Finder Web App",
    image: project1,
    description:
      "Finds the cheapest flight for user’s travel requirements using the Air Scraper API from RapidAPI. Built with ReactJS and Tailwind CSS. Handles authentication with Firebase and allows users to save flights using a Firestore database.",
    technologies: ["ReactJS", "Vite", "Tailwind CSS", "Firebase", "RapidAPI"],
  },
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A simple portfolio website detailing my work experience and projects, which you are currently looking at! Built using ViteJS, ReactJS, and Tailwind CSS.",
    technologies: ["ReactJS", "Tailwind CSS", ],
  },
  {
    title: "Full-Stack Graphing & Calculus Calculator Application",
    image: project1,
    description:
      "A comprehensive calculator application for graphing and calculus, utilizing Python for back-end calculations and a JavaScript, HTML, and CSS-based interface for an intuitive user experience.",
    technologies: ["Python", "JavaScript", "Flask", "HTML", "CSS", "NumPy", "SymPy", "Matplotlib"],
  },
  {
    title: "Tenant Contract Analyser Web App",
    image: project1,
    description:
      "A web application developed during at Hack Trinity to analyze tenant contracts using PDF scraping and Perplexity AI for data processing and display.",
    technologies: ["Python", "HTML", "CSS", "ReactJS"],
  },
  {
    title: "RayCasting Engine",
    image: project1,
    description:
      "RayCater for rendering maps with simple 3D graphics. Used OpenGL for rendering shapes based off the player's position on the map.",
    technologies: ["C", "OpenGL"],
  },
  {
    title: "Mathematics CLI Application",
    image: project1,
    description: 
      "Mathematics application implementing 10+ algorithms, e.g. Shunting Yard, Gradient Descent, Dimenionality Reduction via PCA, Sieve of Erastothenes, etc. Designed amn interactive CLI menu using ANSI codes, ASCII art, and commands.",
    technologies: ["Java", "Object-Oriented-Programming"],
  },
  {
    title: "System Information Application",
    image: project1,
    description:
      "A Java application displaying system information with dynamic graphs and diagrams, developed with Java, JavaFX and CSS.",
    technologies: ["Java", "JavaFX", "CSS", "IntelliJ"],
  },
];


export const CONTACT = {
  phoneNo: "+353851366304",
  email: "24414662@studentmail.ul.ie",
};

export const TECHNOLOGIES = [
  "Java", "Python", "JavaScript", "HTML", "CSS", // Languages
  "ReactJS", "JavaFX", "Flask", "Matplotlib",             // Libraries/Frameworks
  "NodeJS", "ViteJS", "APIs", "Git", "GitHub", "VSCode", "IntelliJ" // Tools
];
