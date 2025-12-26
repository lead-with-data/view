
import React, { useState, useEffect } from 'react';
import { ProfileSidebar } from './components/ProfileSidebar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ExperienceSection } from './components/ExperienceSection';
import { ToolsGrid } from './components/ToolsGrid';
import { DesignThoughts } from './components/DesignThoughts';
import { ContactForm } from './components/ContactForm';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'experience', 'tools', 'thoughts', 'contact'];
      const scrollPosition = window.scrollY + 150; // Slightly larger offset for smoother activation

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
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
    <div className="min-h-screen flex flex-col lg:flex-row max-w-[1400px] mx-auto px-4 lg:px-12 py-8 gap-8 lg:gap-16">
      {/* Fixed Sidebar for desktop, Static for mobile */}
      <aside className="w-full lg:w-[320px] lg:sticky lg:top-8 h-fit z-40">
        <ProfileSidebar />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 w-full space-y-32 pb-24 relative">
        <Navbar activeSection={activeSection} />
        
        <section id="home" className="scroll-mt-32">
          <Hero />
        </section>

        <section id="projects" className="scroll-mt-32">
          <Projects />
        </section>

        <section id="experience" className="scroll-mt-32">
          <ExperienceSection />
        </section>

        <section id="tools" className="scroll-mt-32">
          <ToolsGrid />
        </section>

        <section id="thoughts" className="scroll-mt-32">
          <DesignThoughts />
        </section>

        <section id="contact" className="scroll-mt-32">
          <ContactForm />
        </section>
      </main>
    </div>
  );
};

export default App;
