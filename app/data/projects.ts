export interface ProjectData {
  id: string;
  title: string;
  description: string;
  observation?: string;
  year?: number | string;
  position?: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: ProjectData[] = [
  {
    id: '1',
    title: 'Cattuccino',
    description: 'Aplicação para gerenciar pedidos e pagamentos de uma cafeteria, com painel administrativo e integração de pagamentos.',
    observation: 'Projeto acadêmico do curso, deploy em Docker.',
    year: 2024,
    position: 'Full Stack Developer',
    technologies: ['Python', 'mySQL', 'Docker', 'React'],
    imageUrl: '/images/cattuccino.jpeg',
    githubUrl: 'https://github.com/DiogoHMC/Cattuccino_P5',
    featured: true
  },
  {
    id: '2',
    title: 'Performance Evaluation System',
    description: 'Sistema de avaliação de performance com painéis, relatórios e autenticação.',
    observation: 'Utilizado em ambiente interno para mensuração de KPIs.',
    year: 2025,
    position: 'Backend Developer',
    technologies: ['NestJS', 'Prisma', 'Tailwind', 'React'],
    imageUrl: '/images/project-2.svg',
    githubUrl: 'https://github.com/DiogoHMC/Sistema-de-Avaliacao-de-Performance',
    featured: true
  },
  {
    id: '3',
    title: 'Project Title 3',
    description: 'Breve descrição do projeto 3.',
    observation: 'Em desenvolvimento.',
    year: 2023,
    position: 'Contributor',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: '/images/project-3.svg',
    githubUrl: 'https://github.com'
  },
    {
    id: '4',
    title: 'Project Title 3',
    description: 'Breve descrição do projeto 3.',
    observation: 'Em desenvolvimento.',
    year: 2023,
    position: 'Contributor',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: '/images/project-3.svg',
    githubUrl: 'https://github.com'
  },
    {
    id: '5',
    title: 'Project Title 3',
    description: 'Breve descrição do projeto 3.',
    observation: 'Em desenvolvimento.',
    year: 2023,
    position: 'Contributor',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: '/images/project-3.svg',
    githubUrl: 'https://github.com'
  },
    {
    id: '6',
    title: 'Project Title 3',
    description: 'Breve descrição do projeto 3.',
    observation: 'Em desenvolvimento.',
    year: 2023,
    position: 'Contributor',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: '/images/project-3.svg',
    githubUrl: 'https://github.com'
  }
];

export default projects;
