"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// Tipos
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  current?: boolean;
}

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dados do portfólio
  const projects: Project[] = [
    {
      id: '1',
      title: 'Cattuccino',
      description: 'Brief description of the project and its main features',
      technologies: ['Python', 'mySQL', 'Docker', 'React'],
      imageUrl: '/images/cattuccino.jpeg',
      githubUrl: 'https://github.com/DiogoHMC/Cattuccino_P5',
      featured: true
    },
    {
      id: '2',
      title: 'Performance Evaluation System',
      description: 'Brief description of the project and its main features',
      technologies: ['NestJS', 'Prisma', 'Tailwind' ,'React'],
      imageUrl: '/images/project-2.svg',
      githubUrl: 'https://github.com/DiogoHMC/Sistema-de-Avaliacao-de-Performance',
      featured: true
    },
    {
      id: '3',
      title: 'Project Title 3',
      description: 'Brief description of the project and its main features',
      technologies: ['React', 'Node.js', 'MongoDB'],
      imageUrl: '/images/project-3.svg',
      githubUrl: 'https://github.com'
    },
    {
      id: '4',
      title: 'Project Title 4',
      description: 'Brief description of the project and its main features',
      technologies: ['NestJS', 'TypeScript', 'Prisma'],
      imageUrl: '/images/project-4.svg',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: '5',
      title: 'Project Title 5',
      description: 'Brief description of the project and its main features',
      technologies: ['NestJS', 'TypeScript', 'Prisma'],
      imageUrl: '/images/project-4.svg',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: '6',
      title: 'Project Title 6',
      description: 'Brief description of the project and its main features',
      technologies: ['NestJS', 'TypeScript', 'Prisma'],
      imageUrl: '/images/project-4.svg',
      githubUrl: 'https://github.com',
      featured: true
    }
  ];

  const experiences: Experience[] = [
    {
      id: '1',
      company: 'Company Name',
      role: 'Backend Developer',
      period: 'Present',
      description: 'Developed and maintained APIs using Go, NestJS, and TypeScript. Worked with PostgreSQL, Prisma, and Docker following best practices.',
      technologies: ['Go', 'Docker', 'PostgreSQL', 'API'],
      current: true
    },
    {
      id: '2',
      company: 'Billi Capital',
      role: 'Full Stack Developer',
      period: '2025',
      description: 'Automatic email sending service',
      technologies: ['Microservice', 'NestJS', 'React', 'PostgreSQL']
    }
  ];

  // Navegação suave
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Detectar seção ativa no scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'experience', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio">
      {/* Header / Navbar */}
      <header className="header">
        <div className="container">
          <div className="header-content">
              <div className="logo">
                <img
                  src="/images/logodhmc.svg"
                  alt="Diogo Correia Logo"
                  className="logo-image"
                />
              </div>
            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Navigation */}
            <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
              <a 
                href="#home" 
                className={activeSection === 'home' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              >
                Home
              </a>
              <a 
                href="#projects" 
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              >
                Projects
              </a>
              <a 
                href="#experience" 
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
              >
                Experience
              </a>
              <a 
                href="#about" 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              >
                About
              </a>
              <a 
                href="#contact" 
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Diogo Correia</h1>
              <p className="hero-subtitle">Software engineer, Back End & Web application developer</p>
              <p className="hero-description">
                Backend Developer based in Brazil, focused on Go. Building and maintaining 
                scalable APIs with modern technologies and best practices.
              </p>
              <div className="hero-cta">
                <button 
                  className="btn btn-primary"
                  onClick={() => scrollToSection('projects')}
                >
                  View projects
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => scrollToSection('contact')}
                >
                  Get in touch
                </button>
              </div>
            </div>
            <div className="hero-avatar">
              <Image
                src="/images/myPhoto1.jpeg"
                alt="Foto de Diogo Correia"
                fill
                className="avatar-image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Spotlight projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                <Image
                  src={project.imageUrl}
                  alt={`Imagem do projeto ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="project-image-img"
                />
              </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        Github
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-marker">
                  <div className={`marker-dot ${exp.current ? 'current' : ''}`}></div>
                  {index < experiences.length - 1 && <div className="timeline-line"></div>}
                </div>
                <div className="timeline-content">
                  <div className="experience-card">
                    <div className="experience-header">
                      <div>
                        <h3>{exp.role}</h3>
                        <p className="company">{exp.company}</p>
                      </div>
                      <span className="period">{exp.period}</span>
                    </div>
                    <p className="description">{exp.description}</p>
                    <div className="experience-tech">
                      {exp.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hi, I&apos;m Diogo Correia, a Backend Developer based in Brazil, focused on Go. 
                I have professional experience building and maintaining APIs using Go, NestJS 
                (TypeScript), Prisma, PostgreSQL, and Docker, following solid software design 
                and testing practices.
              </p>
              <p>
                I&apos;m also familiar with Spring Boot, Django, and Flask. Fluent in Portuguese 
                and English, with working knowledge of Spanish.
              </p>
              
              <div className="skills-section">
                <h3>Core technologies</h3>
                <div className="skills-grid">
                  <div className="skill-category">
                    <h4>Backend</h4>
                    <ul>
                      <li>Go</li>
                      <li>NestJS / TypeScript</li>
                      <li>Node.js</li>
                      <li>Spring Boot</li>
                      <li>Django / Flask</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h4>Database</h4>
                    <ul>
                      <li>PostgreSQL</li>
                      <li>Prisma ORM</li>
                      <li>MongoDB</li>
                      <li>Redis</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h4>DevOps</h4>
                    <ul>
                      <li>Docker</li>
                      <li>CI/CD</li>
                      <li>Git</li>
                      <li>Linux</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h4>Frontend</h4>
                    <ul>
                      <li>React</li>
                      <li>TypeScript</li>
                      <li>HTML/CSS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-avatar">
                <Image
                  src="/images/myPhoto2.png"
                  alt="Foto de Diogo Correia"
                  fill
                  priority
                  className="avatar-image rect-avatar"
                />
            </div>
          </div>
        </div>
      </section>

{/* Contact Section */}
<section id="contact" className="contact">
  <div className="container">
    <h2 className="section-title">Social medias & contacts</h2>

    <div className="contact-content">
      <p className="contact-intro">
        I&apos;m always interested in hearing about new projects and opportunities.
      </p>

      <div className="contact-links">

        <a
          href="/SoftwareCV.pdf"
          download
          className="contact-btn"
        >
          <span className="contact-icon">
            <Image
              src="/images/donwloadLogo.png"
              alt="Download CV"
              width={56}
              height={56}
              className="contact-icon-img"
            />
          </span>
          <span className="contact-label">Download CV</span>
        </a>

        <a
          href="https://github.com/DiogoHMC"
          className="contact-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-icon">
            <Image
              src="/images/githubLogo.png"
              alt="Github"
              width={56}
              height={56}
              className="contact-icon-img"
            />
          </span>
          <span className="contact-label">Github</span>
        </a>

        <a
          href="https://www.linkedin.com/in/diogo-henrique-melo/"
          className="contact-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-icon">
            <Image
              src="/images/linkedInLogo.png"
              alt="LinkedIn"
              width={56}
              height={56}
              className="contact-icon-img"
            />
          </span>
          <span className="contact-label">LinkedIn</span>
        </a>

        <a
          href="https://wa.me/+5581993633800"
          className="contact-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-icon">
            <Image
              src="/images/whatsappLogo.png"
              alt="WhatsApp"
              width={56}
              height={56}
              className="contact-icon-img"
            />
          </span>
          <span className="contact-label">WhatsApp</span>
        </a>

      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <p>&copy; 2026 Diogo Correia. All rights reserved.</p>
            </div>
            <div className="footer-right">
              <a href="https://github.com/DiogoHMC" target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://www.linkedin.com/in/diogo-henrique-melo/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:diogohmc2@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;