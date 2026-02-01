export const profile = {
  id: 1,
  name: "Amal Thomas",
  role: "Fullstack Developer",
  imageUrl: "/images/profile.png",
  bio: "Committed Fullstack Developer with extensive experience collaborating with cross-functional teams to produce high-quality solutions in growth-driven environments. Specialized in Python, Django, React, and Next.js.",
  location: "Kannur, India",
  email: "amalthomasktyr@gmail.com",
  phone: "+91 8848689262",
  github: "https://github.com/amalthoma",
  linkedin: "https://www.linkedin.com/in/amal-thomas-67aa0a263",
  resumeUrl: "/Amal_Thomas_FullStack_Resume.pdf"
};

export const skills = [
  { id: 1, name: "React", category: "Frontend", proficiency: 90, icon: "React" },
  { id: 2, name: "Next.js", category: "Frontend", proficiency: 85, icon: "SiNextdotjs" },
  { id: 3, name: "Redux", category: "Frontend", proficiency: 80, icon: "SiRedux" },
  { id: 4, name: "Tailwind CSS", category: "Frontend", proficiency: 95, icon: "SiTailwindcss" },
  { id: 5, name: "Python", category: "Backend", proficiency: 90, icon: "SiPython" },
  { id: 6, name: "Django", category: "Backend", proficiency: 85, icon: "SiDjango" },
  { id: 7, name: "Node.js", category: "Backend", proficiency: 80, icon: "SiNodedotjs" },
  { id: 8, name: "PostgreSQL", category: "Database", proficiency: 75, icon: "SiPostgresql" },
  { id: 9, name: "MongoDB", category: "Database", proficiency: 80, icon: "SiMongodb" },
  { id: 10, name: "Git", category: "Tools", proficiency: 85, icon: "SiGit" },
  { id: 11, name: "Docker", category: "Tools", proficiency: 70, icon: "SiDocker" },
  { id: 12, name: "DSA", category: "Computer Science", proficiency: 80, icon: "Cpu" }
];

export const experience = [
  {
    id: 1,
    company: "Neopraxis Innovations Pvt Ltd",
    role: "Software Developer",
    period: "03/2024 - 12/2025",
    description: "Fullstack development focusing on scalable web applications.",
    achievements: [
      "Developed functional databases, applications and servers to support websites on back-end.",
      "Integrated third-party APIs to enhance functionality and improve overall user experience.",
      "Reduced page load times by optimizing front-end assets (JS, CSS, Images).",
      "Created RESTful APIs using Django REST framework.",
      "Designed responsive UIs with HTML, CSS, and JS."
    ]
  },
  {
    id: 2,
    company: "Business Technology Research & Analytics Centre",
    role: "Software Development Intern",
    period: "07/2023 - 02/2024",
    description: "MERN Stack development internship.",
    achievements: [
      "Maintained and developed web applications via MERN stack.",
      "Built responsive user interfaces using React.",
      "Optimized performance by designing efficient MongoDB queries.",
      "Assisted in Express.js middleware implementation for routing and authentication."
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Ticket-Lite SaaS",
    description: "A Trello-style event management platform simulating enterprise logic. Features organization workspaces, role-based access control (RBAC), and secure invitation systems.",
    problem: "Businesses needed a unified view of their metrics without complex setup.",
    solution: "Built a modular dashboard using React and Charts, connected to a Python analytics engine.",
    techStack: ["Django", "React", "PostgreSQL", "Docker"],
    features: ["Real-time data updates", "Customizable widgets", "Role-based access"],
    githubUrl: "https://github.com/amalthoma/ticket-lite-backend",
    demoUrl: "https://ticket-lite-frontend.vercel.app/",
    category: "Fullstack",
    featured: true,
    imageUrl: "https://plus.unsplash.com/premium_photo-1728488389835-2f9568c5d76a?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "Finance Analytics",
    description: "Real-time expense tracker with dynamic data visualization and secure RESTful APIs for granular financial analysis.",
    problem: "Managing large transaction datasets on the client-side caused significant UI latency and frozen charts during real-time data visualization.",
    solution: "Migrated complex calculations to the Django backend using database-level functions, ensuring a fluid, high-performance user experience.",
    techStack: ["Python", "Django REST", "Chart.js"],
    features: ["Real-time expense tracking","Dynamic data visualization","Granular spending analysis","RESTful API integration","Server-side data aggregation","Secure user authentication"],
    githubUrl: "https://github.com/amalthoma/finance-dashboard",
    demoUrl: "https://finance-web-xvy4.onrender.com/",
    category: "Fullstack",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1761587941453-bd1790225d52?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Netflix Clone UI",
    description: "Pixel-perfect streaming interface. Demonstrates complex Redux state management and efficient handling of large media datasets via TMDB API.",
    problem: "Replicating a pixel-perfect, high-fidelity streaming interface that remains performant across various screen sizes while handling heavy image assets.",
    solution: "Leveraged React for a modular UI and optimized asset delivery to ensure rapid load times and smooth horizontal scrolling across different device categories.",
    techStack: ["React", "Redux", "TMDB API"],
    features: [
      "Pixel-perfect streaming interface",
      "Dynamic content via TMDB API",
      "Responsive hero banner sections",
      "Category-based horizontal sliders",
      "Optimized image lazy-loading"
    ],
    githubUrl: "https://github.com/amalthoma/netflix-clone",
    demoUrl: "https://netflix-clone-c6gc.vercel.app/",
    category: "Frontend",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export const uses = [
  { id: 1, category: "Editor", name: "VS Code", description: "My daily driver with extensive extensions." },
  { id: 2, category: "Terminal", name: "Oh My Zsh", description: "Productivity booster on the command line." },
  { id: 3, category: "OS", name: "MacOS / Linux", description: "Preferred environments for development." },
  { id: 4, category: "Software", name: "Postman", description: "For API development and testing." },
  { id: 5, category: "Software", name: "Figma", description: "For UI design and prototyping." },
  { id: 6, category: "Hardware", name: "MacBook Pro", description: "Reliable machine for fullstack work." }
];
