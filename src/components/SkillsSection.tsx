import { skills } from '@/lib/data';

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="animated-gradient py-16 relative"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-blue-500 text-white text-center py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}