"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { SiReact, SiTailwindcss, SiNestjs, SiPrisma, SiPython, SiDocker, SiMysql, SiMongodb, SiNodedotjs, SiHtml5, SiCss, SiTypescript, SiGithub } from 'react-icons/si';
import ThemeToggle from '../../../components/ThemeToggle';

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
}

const iconMap: Record<string, IconType> = {
  react: SiReact,
  'react.js': SiReact,
  'react native': SiReact,
  tailwind: SiTailwindcss,
  'tailwind css': SiTailwindcss,
  nestjs: SiNestjs,
  prisma: SiPrisma,
  python: SiPython,
  docker: SiDocker,
  mysql: SiMysql,
  mongodb: SiMongodb,
  'node.js': SiNodedotjs,
  node: SiNodedotjs,
  html5: SiHtml5,
  html: SiHtml5,
  css3: SiCss,
  css: SiCss,
  typescript: SiTypescript,
  github: SiGithub
};

function getIconForTech(tech: string) {
  const key = tech.toLowerCase();
  return iconMap[key] ?? SiGithub;
}

const normalizeImagePath = (src: string) =>
  src.startsWith('/') || src.startsWith('http://') || src.startsWith('https://')
    ? src
    : `/${src}`;



export default function ProjectDetailClient({ project }: { project: ProjectData }) {
const gallery = (project.imageGallery?.length ? project.imageGallery : [project.imageUrl])
  .map(normalizeImagePath);
  const [activeImage, setActiveImage] = useState(gallery[0]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="project-detail-page">
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
            <button
              className="mobile-menu-toggle"
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
            <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
              <Link href="/#home" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/#projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
              <Link href="/#experience" onClick={() => setMobileMenuOpen(false)}>Experience</Link>
              <Link href="/#about" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </nav>
            <div className="header-right">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="container project-detail-page-content">
        <section className="project-detail">
          <div>
            <span className="project-badge">{project.position || 'Project'}</span>
            <h1>{project.title}</h1>
            <h2>Project overview</h2>
            <p className="project-subtitle">{project.description}</p>
            {project.observation ? <p className="project-note">{project.observation}</p> : null}
            <div className="project-detail-meta">
              {project.year && <div><strong>Year:</strong> {project.year}</div>}
            </div>
              <div className="project-stack">
              {project.technologies.map((tech) => {
                const TechIcon = getIconForTech(tech);
                return (
                  <span key={tech} className="tech-icon" data-tooltip={tech} aria-label={tech}>
                    <TechIcon />
                  </span>
                );
              })}
            </div>
              <div className="project-actions">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  View demo
                </a>
              )}
              <Link href="/" className="btn btn-back">
                Back to portfolio
              </Link>
            </div>
          </div>
          <div className="project-detail-carousel">
            <div className="project-detail-image preview" onClick={() => setIsLightboxOpen(true)}>
              <Image src={activeImage} alt={project.title} fill className="project-image-img" />
              <div className="project-image-overlay">Click to enlarge</div>
            </div>
            <div className="project-carousel-thumbnails">
              {gallery.map((src, index) => (
                <button
                  key={src + index}
                  type="button"
                  className={`project-carousel-thumb ${activeImage === src ? 'active' : ''}`}
                  onClick={() => setActiveImage(src)}
                  aria-label={`Show image ${index + 1}`}
                >
                  <Image src={src} alt={`${project.title} screenshot ${index + 1}`} fill className="thumb-image" />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <p>© {new Date().getFullYear()} Diogo Correia. All rights reserved.</p>
            </div>
            <div className="footer-right">
              <Link href="/">Home</Link>
              <Link href="/#projects">Projects</Link>
              <Link href="/#contact">Contact</Link>
            </div>
          </div>
        </div>
      </footer>

      {isLightboxOpen ? (
        <div className="lightbox-overlay" onClick={() => setIsLightboxOpen(false)}>
          <div className="lightbox-inner" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="lightbox-close" onClick={() => setIsLightboxOpen(false)}>
              ×
            </button>
            <div className="lightbox-image-wrapper">
              <Image src={activeImage} alt={project.title} fill className="lightbox-image" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
