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
    description: `Working on AI/ML models for ULAS HiPR High-Powered Rocketry.`,
    technologies: ["Python"],
  },
  {
    year: "April 2023 - September 2024",
    role: "Front-Desk Receptionist",
    company: "Woodenbridge Hotel & Lodge",
    description: `Handled communications with Microsoft Outlook and multi-line phone systems. Used the HotSoft property management system and TablePath program for reservations. Operated the reception under stressful conditions, handling a variety of tasks such as check-ins, taking payments, answering phone calls and emails, and addressing customer issues.`,
    technologies: ["Microsoft Outlook", "HotSoft", "TablePath"],
  },
  {
    year: "June 2020 - November 2022",
    role: "Front-Desk Receptionist",
    company: "Moneylands Farm",
    description: `Managed bookings using the Smoobu property management system and Microsoft Excel. Duties involved handling check-ins, taking payments, and addressing resident issues and queries.`,
    technologies: ["Smoobu", "Microsoft Excel"],
  },

];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A simple portfolio website detailing my work experience and projects, which you are currently looking at! Built using ViteJS, ReactJS, and Tailwind CSS.",
    technologies: ["ReactJS", "Tailwind CSS", ],
  },
  {
    title: "Full-Stack Graphing & Calculus Calculator Application",
    image: project2,
    description:
      "A comprehensive calculator application for graphing and calculus, utilizing Python for back-end calculations and a JavaScript, HTML, and CSS-based interface for an intuitive user experience.",
    technologies: ["Python", "JavaScript", "Flask", "HTML", "CSS", "NumPy", "SymPy", "Matplotlib"],
  },
  {
    title: "Tenant Contract Analyser Web App",
    image: project3,
    description:
      "A web application developed during a hackathon to analyze tenant contracts using PDF scraping and Perplexity AI for data processing and display.",
    technologies: ["Python", "HTML", "CSS", "ReactJS"],
  },
  {
    title: "System Information Application",
    image: project4,
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
