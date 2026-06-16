"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { SiGo, SiNestjs, SiPostgresql, SiPrisma, SiMongodb, SiRedis, SiDocker, SiReact, SiTypescript, SiSpringboot, SiDjango, SiFlask, SiLinux, SiGit, SiHtml5, SiCss, SiNodedotjs } from 'react-icons/si';
import { projects } from './data/projects';
import ThemeToggle from "../components/ThemeToggle";

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
  const [activeCategory, setActiveCategory] = useState('');
  const [isAvatarAlt, setIsAvatarAlt] = useState(false);

  const categories = [
    {
      id: 'backend',
      title: 'Backend',
      count: 5,
      accent: '#4a90e2',
      icon: SiGo,
      items: [
        { label: 'Go', icon: SiGo },
        { label: 'NestJS', icon: SiNestjs },
        { label: 'Node.js', icon: SiNodedotjs },
        { label: 'Spring Boot', icon: SiSpringboot },
        { label: 'Django / Flask', icon: SiDjango },
      ],
    },
    {
      id: 'database',
      title: 'Database',
      count: 4,
      accent: '#3cb371',
      icon: SiPostgresql,
      items: [
        { label: 'PostgreSQL', icon: SiPostgresql },
        { label: 'Prisma ORM', icon: SiPrisma },
        { label: 'MongoDB', icon: SiMongodb },
        { label: 'Redis', icon: SiRedis },
      ],
    },
    {
      id: 'devops',
      title: 'DevOps',
      count: 4,
      accent: '#ff8c42',
      icon: SiDocker,
      items: [
        { label: 'Docker', icon: SiDocker },
        { label: 'CI/CD', icon: SiGit },
        { label: 'Git', icon: SiGit },
        { label: 'Linux', icon: SiLinux },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend',
      count: 3,
      accent: '#8a2be2',
      icon: SiReact,
      items: [
        { label: 'React', icon: SiReact },
        { label: 'TypeScript', icon: SiTypescript },
        { label: 'HTML / CSS', icon: SiHtml5 },
      ],
    },
  ];

  // Dados do portfólio importados de ./data/projects

  const experiences: Experience[] = [
    {
      id: '1',
      company: 'Begyn',
      role: 'Backend Developer',
      period: 'Present',
      description: 'Developed and maintained APIs using Go. Worked with PostgreSQL following best practices.',
      technologies: ['Go', 'Docker', 'PostgreSQL', 'RestAPI'],
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
    const header = document.querySelector('.header');
    const headerHeight = header ? header.clientHeight : 80;

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 12;

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
      const header = document.querySelector('.header');
      const headerHeight = header ? header.clientHeight : 80;
      const scrollPosition = window.scrollY + headerHeight + 20;

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

      const atPageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10;
      if (atPageBottom) {
        setActiveSection('contact');
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
                <Image
                  src="/images/logodhmc.svg"
                  alt="Diogo Correia Logo dark"
                  className="logo-image logo-theme-dark"
                  width={120}
                  height={40}
                />
                <Image
                  src="/images/LogoD.svg"
                  alt="Diogo Correia Logo light"
                  className="logo-image logo-theme-light"
                  width={120}
                  height={40}
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
            <div className="header-right">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className={`hero ${activeSection === 'home' ? 'hero-visible' : 'hero-hidden'}`}>
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
                src="/images/myPhoto1.png"
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
              <Link key={project.id} href={`/projects/${project.id}`} className="project-card-link">
                <div className="project-card">
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
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank');
                          }}
                          className="project-link-btn"
                        >
                          Github
                        </button>
                      )}
                      {project.liveUrl && (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, '_blank');
                          }}
                          className="project-link-btn"
                        >
                          Live demo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
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
                <div
                  className="skills-grid"
                  onMouseEnter={() => setIsAvatarAlt(true)}
                  onMouseLeave={() => {
                    setActiveCategory('');
                    setIsAvatarAlt(false);
                  }}
                >
                  {categories.map((category) => {
                    const Icon = category.icon;
                    const isActive = activeCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        type="button"
                        className={`skill-category ${category.id} ${isActive ? 'active' : ''}`}
                        style={{ '--accent': category.accent } as React.CSSProperties}
                        onMouseEnter={() => setActiveCategory(category.id)}
                        onClick={() => setActiveCategory(category.id)}
                        aria-expanded={isActive}
                      >
                        <div className="category-header">
                          <div className="category-title">
                            <span className="category-icon">
                              <Icon />
                            </span>
                            <div>
                              <h4>{category.title}</h4>
                            </div>
                          </div>
                        </div>
                        <div className="category-items">
                          {category.items.map((item) => {
                            const ItemIcon = item.icon;
                            return (
                              <div key={item.label} className="category-item">
                                <span className="category-item-icon">
                                  <ItemIcon />
                                </span>
                                <span className="category-item-label">{item.label}</span>
                              </div>
                            );
                          })}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="about-avatar">
              <Image
                src="/images/myPhoto2.png"
                alt="Foto de Diogo Correia"
                fill
                priority
                className={`avatar-image rect-avatar ${isAvatarAlt ? 'hidden' : 'visible'}`}
              />
              <Image
                src="/images/myPhoto2OtherPose.png"
                alt="Foto de Diogo Correia alternativa"
                fill
                priority
                className={`avatar-image rect-avatar ${isAvatarAlt ? 'visible' : 'hidden'}`}
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