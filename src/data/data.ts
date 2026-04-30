// Type Interfaces and Data for the Portfolio Website
export type NavItem = {
  label: string;
  href: string;
};

interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

type Skill = {
  name: string;
  icon: string;
};

type ExperienceItem = {
    id: number;
    company: string;
    logo: string;
    duration: string;
    roleDescription: string;
};

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  // link?: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
}

// Optional: API response type
export interface ApiResponse {
  success: boolean;
  error?: string;
}

export const navItems: NavItem[] = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Me", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/harish-h-v-43b50326b",
        icon: "/linkedin.svg",
    },
    {
        name: "Github",
        url: "https://github.com/harish-23-devp",
        icon: "/github-svgrepo-com.svg",
    },
];

export const skills: Skill[] = [
  { name: "Javascript", icon: "/skills_icons/icon-javscript.svg" }, // first one as requested
  { name: "TypeScript", icon: "/skills_icons/icon-typescript.svg" },
  { name: "React", icon: "/skills_icons/icon-react.svg" },
  { name: "Next.js", icon: "/skills_icons/icon-nextjs.svg" },
  { name: "Tailwind", icon: "/skills_icons/icon-tailwindcss.svg" },
  { name: "Node.js", icon: "/skills_icons/icon-nodejs.svg" },
  { name: "API Integration", icon: "/skills_icons/icon-api-integration.svg" },
  { name: "Postman", icon: "/skills_icons/icon-postman.svg" },
  { name: "Git", icon: "/skills_icons/icon-git.svg" },
  { name: "SQL", icon: "/skills_icons/icon-sql.svg" },
  { name: "Laravel", icon: "/skills_icons/icon-laravel.svg" },
  { name: "Figma", icon: "/skills_icons/icon-figma.svg" },
  { name: "HTML", icon: "/skills_icons/icon-html.svg" },
  { name: "CSS", icon: "/skills_icons/icon-css.svg" },
];

export const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "OrisysIndia Consultancy Services Pvt. Ltd.",
      logo: "/orisyslogo.svg",
      duration: "Jun 2023 - Present",
      roleDescription:
        "Contributed to multiple live projects by developing responsive interfaces, integrating APIs, and improving accessibility and performance. Collaborated with backend teams to deliver scalable, production-ready features.",
    },
];

export const projects: ProjectItem[] = [
  {
    id: "01",
    title: "AOAOK",
    description:
    "Agriculture magazine platform with membership system.",
    shortDescription:
      "Led key feature development for AOAOK, an agriculture-focused digital magazine platform, including the full membership renewal module using React and NestJS.",
    image: "/projects/2023-Porsche-911-GT3-RS-009-1536.jpg",
    techStack: [],
    features: [],
  },
  {
    id: "02",
    title: "Visually Impaired Agent Calling System",
    shortDescription:
      "Built an accessible banking call system for visually impaired agents with full JAWS support, using React and Laravel",
    description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book. Im Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    image: "/projects/2018-BMW-M3-CS-001-1536.jpg",
        techStack: [],
    features: [],
  },
  {
    id: "03",
    title: "Oricoms",
    shortDescription:
      "Integrated Facebook APIs to streamline social media interactions, sync lead data, and enhance automated engagement for the Oricoms platform.",
    description: "qwertyuiop",
    image: "/projects/2018-BMW-M3-CS-001-1536.jpg",
        techStack: [],
    features: []
  },
  {
    id: "04",
    title: "Smart Chlorinator (IoT)",
    shortDescription:
      "Developed an interactive IoT dashboard for real-time sensor monitoring and control, with full CRUD and filtering features using React.",
    description: "qwertyuiop",
    image: "/projects/2018-BMW-M3-CS-001-1536.jpg",
        techStack: [],
    features: []
  },
    {
    id: "05",
    title: "Hll Lifecare",
    shortDescription:
      "Improved application stability by resolving backend issues, optimizing database operations, and supporting seamless deployments using Laravel.",
    description: "qwertyuiop",
    image: "/projects/2018-BMW-M3-CS-001-1536.jpg",
        techStack: [],
    features: []
  },
  {
    id: "06",
    title: "MultiSite Job Portal",
    shortDescription:
      "Developed responsive job listing and employer management modules to streamline applications and improve user workflows using React and Node.js.",
    description: "qwertyuiop",
    image: "/projects/2018-BMW-M3-CS-001-1536.jpg",
        techStack: [],
    features: []
  },
];

export const stats: StatItem[] = [
  { value: 2, label: "Experience", suffix: " yr" },
  { value: 6, label: "Projects Worked" },
  { value: 14, label: "Skills Known", suffix: "+" },
];