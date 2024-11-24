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
    title: "Personal Portfolio Website",
    image: project1,
    description: `Developed an interactive website detailing my work experience, skills, and projects. Built using the Next.js framework with various React.js components, styled with Tailwind CSS, and deployed with Vercel.`,
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Full-Stack Graphing & Calculus Calculator Application",
    image: project2,
    description: `Engineered the back-end using Python, leveraging NumPy and SymPy for complex calculations, and Matplotlib for dynamic graphing. Employed Flask as the framework to manage server-side logic. Designed an intuitive user interface with JavaScript, HTML, and CSS to enhance overall user experience.`,
    technologies: ["Python", "JavaScript", "Flask", "HTML", "CSS", "NumPy", "SymPy", "Matplotlib"],
  },
  {
    title: "Tenant Contract Analyser Web App",
    image: project3,
    description: `Developed as part of a team of five for Hack Trinity’s Gen AI x Law Edition Hackathon. Built a PDF scraping tool to pull text data and analyze via Perplexity AI API to display for users.`,
    technologies: ["Python", "HTML", "CSS", "Perplexity AI API"],
  },
  {
    title: "System Information Application",
    image: project4,
    description: `Designed a user-friendly interface using JavaFX and CSS that displays the user’s system information with a variety of graphs and other interactive components. Utilised a variety of different Java APIs, such as OSHI, to pull system hardware information. Awarded 93% as part of a team of four for CS4421 end-of-block project.`,
    technologies: ["Java", "JavaFX", "OSHI", "XML / FXML", "CSS", "IntelliJ"],
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
