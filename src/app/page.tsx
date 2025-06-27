import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import Image from 'next/image';
import { projects, skills } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        {/* Home Section */}
        <section
          id="home"
          className="bg-gradient-to-r from-blue-500 to-purple-600 relative py-20"
          style={{
            backgroundImage: "url('/images/programming.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto text-center px-4 relative z-10">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6"
            />
            <h1 className="text-5xl font-bold mb-4 text-white">Welcome to My Portfolio</h1>
            <p className="text-xl mb-6 max-w-2xl mx-auto text-white">
              Hi, I'm Nilupu Udara, a passionate developer creating awesome web experiences.
            </p>
            <a
              href="#contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition relative z-10"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-100 py-20"
          style={{
            backgroundImage: "url('/images/aboutme.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">About Me</h2>
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <div className="flex flex-col md:flex-row items-center mb-6" >
                <Image
                  src="/images/profile.jpeg"
                  alt="Nilupu Udara"
                  width={150}
                  height={150}
                  className="rounded-full object-cover mb-4 md:mb-0 md:mr-6"
                />
                <div className="text-lg text-gray-700">
                  <p className="mb-4">
                    As a passionate Computer Science undergraduate at Eastern University, Sri Lanka. I am
                    actively building my skills in software development with a keen interest in full-stack
                    applications. I have hands-on experience with languages such as JavaScript, TypeScript, C#,
                    and C++, and frameworks like ASP.NET and Angular. I enjoy solving complex problems and
                    continuously seek opportunities to enhance software solutions. I thrive in collaborative
                    environments and bring enthusiasm, adaptability, and a strong desire to learn. I am eager to
                    gain industry experience and contribute meaningfully through an internship opportunity in
                    the IT field.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <a
                  href="#contact"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="/projects"
                className="text-blue-600 hover:underline font-semibold text-lg"
              >
                View All Projects
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-gray-100 py-16"
          style={{
            backgroundImage: "url('/images/skill.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <div className="container mx-auto px-4">
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

        {/* Contact Section */}
        <section
          id="contact"
          className="relative bg-gradient-to-r from-purple-600 to-blue-500 py-16"
          style={{
            backgroundImage: "url('/images/contact.jpg')",
            backgroundSize: 'cover', // or 'contain' if cropping is an issue
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', // Optional: prevents scrolling issues
          }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Get in Touch</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto text-white">
              Reach out via email or connect on social media.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:nilupu.udara@example.com"
                className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-200 transition"
              >
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/nilupul-udara"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-200 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/nilupuudara"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-200 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}