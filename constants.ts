import { Project, Experience, SocialLink } from './types';

export const SOCIALS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/ArchishmanS2005', label: 'Code ↗' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/archishman-sarkar', label: 'Network ↗' },
  { platform: 'Email', url: 'mailto:archishmansarkar94@gmail.com', label: 'Contact ↗' },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Full-Stack Engineer",
    company: "Freelance / Hackathons",
    period: "2024 - Present",
    description: "Building scalable web applications and decentralized systems. Specialized in taking ideas from zero to prototype under time constraints."
  },
  {
    role: "Computer Science Student",
    company: "Techno India University",
    period: "2024 - 2028",
    description: "Focusing on Data Structures, Algorithms, and Low-level system architecture. Moving beyond surface-level tooling to understand memory and computation."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "destore",
    number: "[001]",
    title: "DeStore",
    category: "Distributed Systems",
    description: "A decentralized storage system inspired by IPFS concepts. Designed for fault tolerance and scalability using Go's concurrency model.",
    tech: ["Go", "Distributed Systems", "P2P Networking"],
    link: "https://github.com/ArchishmanS2005/Decentralized-Storage-Platform"
  },
  {
    id: "aerosense",
    number: "[002]",
    title: "AeroSense IoT",
    category: "Full Stack + Hardware",
    description: "Real-world Air Quality Monitoring System. Integrates hardware sensors with a Node.js backend and React visualization dashboard.",
    tech: ["React", "Node.js", "IoT", "C++"],
    link: "https://github.com/ArchishmanS2005/AeroSense-1st_IoT_EVS_Project"
  },
  {
    id: "dsapractice",
    number: "[003]",
    title: "DSA System",
    category: "Core Computer Science",
    description: "A performance-aware practice system for Data Structures and Algorithms. Focuses on memory usage trade-offs and time complexity.",
    tech: ["C/C++", "Algorithms", "Memory Management"],
    link: "https://dsa-topics-nu.vercel.app/"
  },
  {
    id: "adiyogi-weather",
    number: "[004]",
    title: "Adiyogi Weather SDK",
    category: "Cloud Infrastructure",
    description: "Enterprise-grade weather system with real-time data aggregation, FastAPI backend, and multi-language SDKs.",
    tech: ["FastAPI", "Next.js 14", "SDK Development"],
    link: "https://github.com/ArchishmanS2005/WeatherSDK"
  }
];