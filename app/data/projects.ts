export interface ProjectData {
  id: string;
  title: string;
  description: string;
  observation?: string;
  year?: number | string;
  position?: string;
  technologies: string[];
  imageUrl: string;
  imageGallery?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: ProjectData[] = [
  {
    id: '1',
    title: 'Cattuccino',
    description: 'A dashboard platform for the Cattuccino coffee shop startup, providing managers with financial performance data and social media marketing insights.',
    observation: 'Group project for the Projects 5 course at CESAR School, deployed with Docker.',
    year: 2024,
    position: 'Full Stack Developer',
    technologies: ['JavaScript', 'Python', 'MySQL'],
    imageUrl: '/images/project/cattuccino/cattuccino.jpeg',
    imageGallery: ['/images/project/cattuccino/cattuccino.jpeg', '/images/project/cattuccino/cattuccino2.jpeg', '/images/project/cattuccino/cattuccino3.jpeg', '/images/project/cattuccino/cattuccino4.jpeg'],
    githubUrl: 'https://github.com/DiogoHMC/Cattuccino_P5',
    featured: true
  },
  {
    id: '2',
    title: 'Performance Evaluation System',
    description: 'A platform for evaluating employee, leader, and team performance, supporting review cycles, self-assessments, 360° feedback, OKRs, and PDIs.',
    observation: 'Full-stack system built with NestJS, Prisma, and React with TailwindCSS for HR and management processes.',
    year: 2025,
    position: 'Full Stack Developer',
    technologies: ['NestJS', 'Prisma', 'React'],
    imageUrl: '/images/project/rpe/RPE.jpeg',
    imageGallery: ['/images/project/rpe/RPE.jpeg'],
    githubUrl: 'https://github.com/DiogoHMC/Sistema-de-Avaliacao-de-Performance',
    featured: true
  },
  {
    id: '3',
    title: 'EndoAI',
    description: 'A web interface for a machine learning model focused on early diabetes risk prediction, encouraging users to seek professional diagnosis.',
    observation: 'Group project for the Projects 6 course at CESAR School, with a Flask/Python backend and React frontend.',
    year: 2023,
    position: 'Contributor',
    technologies: ['React', 'Python', 'Flask'],
    imageUrl: '/images/project/endoAI/endoAI1.jpeg',
    imageGallery: ['/images/project/endoAI/endoAI1.jpeg', 'images/project/endoAI/endoAI2.jpeg','/images/project/endoAI/endoAI3.jpeg'],
    githubUrl: 'https://github.com/DiogoHMC/EndoAI'
  },
  {
    id: '4',
    title: 'Clash of Tetris',
    description: 'A multiplayer Tetris game with local and online two-player modes, an attack system, and a leaderboard.',
    observation: 'Real-time multiplayer built with React and Socket.io, deployed on Vercel.',
    year: 2025,
    position: 'Frontend Developer',
    technologies: ['React', 'Node.js', 'Vite'],
    imageUrl: '/images/project/tetris/clashOfTetris.png',
    imageGallery: ['/images/project/tetris/clashOfTetris.png'],
    githubUrl: 'https://github.com/DiogoHMC/Tetris'
  },
  {
    id: '5',
    title: 'R.E.S.P.O',
    description: 'A frontend application generated with Angular CLI for an embedded systems course project.',
    observation: 'Built with Angular and Firebase, deployed on Vercel; no further project details were documented.',
    year: 2024,
    position: 'Contributor',
    technologies: ['Angular', 'TypeScript', 'Firebase'],
    imageUrl: '/images/project/respo/respo.png',
    imageGallery: ['/images/project/respo/respo.png'],
    githubUrl: 'https://github.com/DiogoHMC/Embarcados-Front'
  },
  {
    id: '6',
    title: 'Rocket Store',
    description: 'A modern e-commerce web app for browsing products, managing a cart, and completing a checkout flow.',
    observation: 'Personal project with dark mode support and responsive, mobile-first design.',
    year: 2024,
    position: 'Contributor',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/images/project/rocketStore/rocketstore1.png',
    imageGallery: ['/images/project/rocketStore/rocketstore1.png', '/images/project/rocketStore/rocketstore2.png', '/images/project/rocketStore/rocketstore3.png','/images/project/rocketStore/rocketstore4.png'],
    githubUrl: 'https://github.com/DiogoHMC/RocketStore'
  }
];

export default projects;