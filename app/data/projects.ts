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
    description: 'A coffee shop management app with order and payment tracking, admin dashboard, and payment integration.',
    observation: 'Course project deployed using Docker.',
    year: 2024,
    position: 'Full Stack Developer',
    technologies: ['Python', 'MySQL', 'Docker', 'React'],
    imageUrl: '/images/project/cattuccino/cattuccino.jpeg',
    imageGallery: ['/images/project/cattuccino/cattuccino.jpeg', '/images/project-1.svg'],
    githubUrl: 'https://github.com/DiogoHMC/Cattuccino_P5',
    featured: true
  },
  {
    id: '2',
    title: 'Performance Evaluation System',
    description: 'A performance review platform with dashboards, reports, and secure authentication.',
    observation: 'Used internally for KPI tracking and team evaluation.',
    year: 2025,
    position: 'Full Stack Developer',
    technologies: ['NestJS', 'Tailwind CSS', 'React'],
    imageUrl: '/public/images/project/rpe/RPE.jpeg',
    imageGallery: ['/public/images/project/rpe/RPE.jpeg'],
    githubUrl: 'https://github.com/DiogoHMC/Sistema-de-Avaliacao-de-Performance',
    featured: true
  },
  {
    id: '3',
    title: 'EndoAI',
    description: 'A real-time dashboard built with modern web technologies and data visualization.',
    observation: 'In-progress development for a scalable analytics platform.',
    year: 2023,
    position: 'Contributor',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: '/images/project/endoAI/endoAI1.jpeg',
    imageGallery: ['/images/project/endoAI/endoAI1.jpeg', 'images/project/endoAI/endoAI2.jpeg','/images/project/endoAI/endoAI3.jpeg'],
    githubUrl: 'https://github.com/DiogoHMC/EndoAI'
  },
  {
    id: '4',
    title: 'Clash of Tetris',
    description: 'An e-commerce style prototype for listing and managing products online.',
    observation: 'Responsive design with reusable components.',
    year: 2023,
    position: 'Frontend Developer',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: '/images/project/tetris/clashOfTetris.png',
    imageGallery: ['/images/project/tetris/clashOfTetris.png'],
    githubUrl: 'https://github.com/DiogoHMC/Tetris'
  },
  {
    id: '5',
    title: 'Collaboration Platform',
    description: 'A team collaboration tool for task management and communication.',
    observation: 'Designed for productivity and workflow tracking.',
    year: 2023,
    position: 'Contributor',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: '/images/project-3.svg',
    imageGallery: ['/images/project-3.svg', '/images/project-4.svg'],
    githubUrl: 'https://github.com'
  },
  {
    id: '6',
    title: 'Project Showcase',
    description: 'A landing experience highlighting workflows, APIs, and user journeys.',
    observation: 'Proof of concept with clean mobile-first design.',
    year: 2023,
    position: 'Contributor',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: '/images/project-3.svg',
    imageGallery: ['/images/project-3.svg', '/images/project-4.svg'],
    githubUrl: 'https://github.com'
  }
];

export default projects;
