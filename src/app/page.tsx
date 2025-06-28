import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import { projects } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <ProjectsSection projects={projects}/>
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}