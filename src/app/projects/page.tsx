import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100"
    style={{
            backgroundImage: "url('')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">All Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}