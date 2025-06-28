import Image from 'next/image';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition">
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md mb-4">
          No Image
        </div>
      )}
      <h3 className="text-2xl font-semibold mb-2 line-clamp-2">{project.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3 text-white">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View Project
      </a>
    </div>
  );
}