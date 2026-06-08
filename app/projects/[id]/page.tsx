import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import projects from '../../data/projects';

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return notFound();

  return (
    <div className="container">
      <div style={{ marginTop: 'var(--header-height)' }} />
      <div className="project-detail">
        <div className="project-detail-image">
          <Image src={project.imageUrl} alt={project.title} fill className="project-image-img" />
        </div>

        <div className="project-detail-content">
          <h1>{project.title}</h1>
          <div className="project-detail-meta">
            {project.year && <div><strong>Ano:</strong> {project.year}</div>}
            {project.position && <div><strong>Minha posição:</strong> {project.position}</div>}
          </div>

          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)' }}>{project.description}</p>

          {project.observation && (
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <strong>Observação:</strong>
              <p style={{ color: 'var(--color-text-secondary)' }}>{project.observation}</p>
            </div>
          )}

          <div>
            <h4>Tecnologias</h4>
            <div className="project-detail-tech">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 'var(--spacing-md)', display: 'flex', gap: '1rem' }}>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Ver no GitHub</a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Abrir demo</a>
            )}
            <Link href="/" className="btn">Voltar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
