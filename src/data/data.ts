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
  description: string;
  image: string;
  link?: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
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
  { name: "Figma", icon: "/skills_icons/icon-figma.svg" },
  { name: "SQL", icon: "/skills_icons/icon-sql.svg" },
  { name: "Laravel", icon: "/skills_icons/icon-laravel.svg" },
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

export const projects: ProjectItem[] = [
  {
    id: "01",
    title: "Portfolio Website",
    description:
      "A modern portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.",
    image: "/projects/2023-Porsche-911-GT3-RS-009-1536.jpg",
    link: "https://example.com/project-1",
  },
  {
    id: "02",
    title: "E-commerce Frontend",
    description:
      "Responsive storefront UI with reusable components, smooth interactions, and clean UX.",
    image: "/projects/2018-BMW-M3-CS-001-1536.jpg",
    link: "https://example.com/project-2",
  },
  {
    id: "03",
    title: "Task Management App",
    description:
      "Productivity-focused app with drag-drop workflows and clear visual hierarchy.",
    image: "/projects/2022-Dodge-Challenger-SRT-Hellcat-Jailbreak-001-1536.jpg",
    link: "https://example.com/project-3",
  },
  {
    id: "04",
    title: "Analytics Dashboard",
    description:
      "Data-rich dashboard with responsive cards, filters, and performance-focused rendering.",
    image: "/projects/2022-Ford-Mustang-Shelby-GT500-013-1536.jpg",
    link: "https://example.com/project-4",
  },
];