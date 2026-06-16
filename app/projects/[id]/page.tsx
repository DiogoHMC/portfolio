import { notFound } from 'next/navigation';
import projects from '../../data/projects';
import ProjectDetailClient from './ProjectDetailClient';

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
}
